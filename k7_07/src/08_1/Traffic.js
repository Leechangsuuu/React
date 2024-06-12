
import Traffic_Nav from './Traffic_Nav'
import { useState,useEffect } from 'react'

export default function Traffic() {
  const [tdata, setTdata] = useState();//fetch데이터
  const [c1,setC1] = useState();
  const [selC1,setSelC1] = useState(); 
  const [c2,setC2] = useState();
  const [selC2,setSelC2] = useState();  

  const[info,setInfo] = useState();
 //사용자 정의 함수
    const getFetchData = (url)=>{
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.data))
        .catch(err => console.log(err));
    }
  //컴포넌트 생성시
  useEffect(()=>{
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?';
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;

    getFetchData(url);

},[])

//Tdata가 변경될때
useEffect(()=>{
    if(!tdata) return;

    let tm = tdata.map(item => item['사고유형_대분류']);
    tm = [...new Set(tm)]
    setC1(tm);
},[tdata])

// 대분류가 생성되면
useEffect(()=>{
    if(!tdata || !c1) return;
},[c1]);

//대분류를 선택하면 => c2생성
useEffect(()=>{
    if (!tdata || !c1 || !selC1)return;
    let tm = tdata.filter(item => item['사고유형_대분류'] === selC1)
                  .map(item=>item['사고유형_중분류'])
    setC2(tm);

},[selC1]);

//중분류가 선택되면
useEffect(()=>{
    if( !tdata || !c1 || !selC1 || !selC2) return;

    let tm = tdata.filter(item => item['사고유형_대분류'] === selC1&&
                                  item['사고유형_중분류'] === selC2
                                );
    tm = tm[0];

    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    tm = infoKey.map(item => <div key = {item} 
                                  className='flex flex-col'>
                                <div className='flex justify-center items-center
                                                h-10
                                                 bg-amber-200 text-white font-bold'>
                                    {item}
                                </div>
                                <div className="flex justify-center items-center
                                                h-10
                                                  font-bold">
                                    {parseInt(tm[item]).toLocaleString()}
                                </div>
                            </div>
                            );
    setInfo(tm);
},[selC2])

    
    return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
        <div className='w-full flex justify-start items-start'>
            {c1 && <Traffic_Nav title = "대분류" 
                                c = {c1}
                                sel = {selC1}
                                setSel = {setSelC1}
                                />}
        </div>
        <div className='w-full flex justify-start items-start'>
            {c2 && <Traffic_Nav title = "중분류" 
                                    c = {c2}
                                    sel = {selC2}
                                    setSel = {setSelC2}
                                    />}
        </div>
        <div className='w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
            {info}
        </div>
    </div>
  )
}
