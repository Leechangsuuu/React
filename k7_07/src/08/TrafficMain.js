import { useState, useEffect } from 'react';
import ButtonC from '../Ui/ButtonC';
export default function TrafficMain() {
  const [tdata, setTdata] = useState([]);//전체 fetch데이터
  const [c1 , setC1] = useState([]);//대분류
  const [c1Tag, setC1Tag] = useState() ;//대분류 버튼
  const [c1Sel, setC1Sel] = useState() ;//선택된 대분류
  
  const [c2 , setC2] = useState([]);//중분류
  const [c2Tag, setC2Tag] = useState() ;//중분류 버튼
  const [c2Sel, setC2Sel] = useState() ;//선택된 중분류

  const [info, setInfo] = useState() ;  //선택된 상세자료
//대분류 선택할 떄 실행
  const handleC1Select = (item) => {
    setC1Sel(item);
  }
//중분류 선택할 떄 실행
const handleC2Select = (item) => {
  setC2Sel(item);
}


//fetch함수로 데이터 가져오기
  const getData = (url) => {
    fetch(url)
    .then(resp=> resp.json())
    .then(data=> setTdata(data.data))
    .catch(err => console.log(err));
  }
  
//컴포넌트 생성시 한번실행
  useEffect(()=>{
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?';
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
    
    console.log(url)
    getData(url);
  },[])

//tdata가 변경되면 실행
  useEffect(()=>{
    if (tdata.length === 0) return;
    
    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = [...new Set(tm)]

    setC1(tm);
  },[tdata]);

//대분류 생성후
  useEffect(()=>{
    if(!c1) return;
    console.log('c1=',c1)
    let tm = c1.map((item) => <ButtonC caption={item}
                                      key={item}
                                      bcolor={'green'}
                                      handleClick={()=>handleC1Select(item)}/>)
  },[c1]);


  //대분류 선택 => 중분류
  useEffect(()=>{
    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)
                  .map(item => item['사고유형_중분류']);
    setC2(tm) 
  },[c1Sel])

//중분류가 만들어졌을때
useEffect(()=>{
  if(!c2) return;
  console.log('c2',c2)
  let tm = c2.map((item) => <ButtonC caption={item}
                                    key={item}
                                    bcolor={'blue'}
                                    handleClick={()=>handleC2Select(item)}/>)
  setC2Tag(tm);
},[c2]);

//중분류 선택 => 상세정보
useEffect(() => {
  console.log("대분류선택 :", c1Sel)
  console.log("중분류선택 :", c2Sel)

  let tm = tdata.filter(item =>  item['사고유형_대분류'] === c1Sel &&
                                  item['사고유형_중분류'] === c2Sel )
  tm = tm[0] ;
  console.log('상세', tm)
  setInfo(tm['사고건수'])
  
} , [c2Sel]) ;


    return (
    <div className='w-10/12 h-full flex flex-col justify-center items-start '>
      <div className='w-full flex justify-between items-center my-10'>
        <div className='w-1/4 justify-start items-center'>교통사고 대분류</div>
        <div className='w-3/4 flex'>
          {c1Tag}
        </div>
      </div>
      <div className='w-full flex justify-between items-center my-10'>
        <div className='w-1/4 justify-start items-center'>교통사고 중분류</div>
        <div className='w-3/4 flex'>
          {c2Tag}
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-10 ">
        사고건수 : {parseInt(info).toLocaleString()}
      </div>
    </div>
  )
}
