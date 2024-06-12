import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
import TailSelect from "../Ui/TailSelect";
import getcode from './getcode.json' ;

export default function FrcstList() {
    const [sParms] = useSearchParams();
    const gubun = sParms.get('gubun');
    const x = sParms.get('x');
    const y = sParms.get('y');
    const dt = sParms.get('dt');
    const area = sParms.get('area');
    
    
    const [tdata,setTdata] = useState();
    const [ops,setOps] = useState([]);
    const [selItem,setSelItem] = useState();
    const [tags , setTags] = useState();
    const selRef = useRef();
    
    const sky = {"1" : "맑음" , "3" : "구름많음" , "4" : "흐림"}
    const pty = {"0" : "없음" , "1" : "비" , "2" : "비/눈" , 
                "3" : "눈" , "4" : "소나기" , "5" : "빗방울" ,
                "6" : "빗방울눈날림" , "7" : "눈날림"}

    //data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTdata(data.response.body.items.item)
            })
    }

    const handleselect = () => {
        console.log(selRef.current.value)
        let tm = getcode.filter( item => ( gubun === '단기'
                                         ?  item["예보구분"]==="단기예보"
                                         :  item["예보구분"]==="초단기예보") &&
                                        item["항목명"] === selRef.current.value);
                                     
        setSelItem(tm[0]);
        
    }
    
    useEffect(()=>{
        let tm = getcode.filter(item => gubun === '단기'
                                        ?  item["예보구분"]==="단기예보"
                                        :  item["예보구분"]==="초단기예보")
                        .map(item => item["항목명"]) 
        setOps(tm);
    
        let url;
        if ( gubun === '초단기') {
            // url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
            // url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
            // url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}` ;
            url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
            url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
            url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}` ;
          }
          else {
            url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
            url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
            url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}` ; 
          }

          console.log(url)
        getFetchData(url) ;
    },[]);

    useEffect(() => {
        console.log("tdata", tdata)
      } , [tdata]);
    
    useEffect(() => {
        if (!selItem) return; 
       
        let tm = tdata.filter(item => item['category']===selItem['항목값'])
                        .map(item =>
                            <tr key={`${item["fcstDate"]}${item["fcstTime"]}`}
                            className="border-b border-neutral-200 hover:bg-neutral-100 text-center">
                                <td scope="col" className='px-6 py-3'>
                                    {selItem["항목명"]}({item["category"]})
                                </td>
                                <td scope="col" className='px-6 py-3'>
                                    {`${item["fcstDate"].substring(0, 4)}-${item["fcstDate"].substring(4, 6)}-${item["fcstDate"].substring(6, 8)}`}
                                </td>
                                <td scope="col" className="px-6 py-3">
                                    {`${item["fcstTime"].substring(0, 2)}:${item["fcstTime"].substring(2, 4)}`}
                                </td>
                                <td scope="col" className="px-6 py-3">
                                    {item["category"]==='SKY'
                                    ? sky[item["fcstValue"]]
                                    : item["category"] === 'PTY'
                                        ?pty[item["fcstValue"]]
                                        :`${item["fcstValue"]} ${selItem["단위"]}`}
                                    {item["fcstValue"]}{selItem["단위"]}
                                </td>
                            </tr>
                        );

        console.log("tm" , tm)
        setTags(tm);
    },[selItem])


    return (
    <div className='w-full h-full flex flex-col justify-start items-center '>
        <div className='w-10/12 grid grid-cols-1 md:grid-cols-2 p-2 gap-2 '>
            <h1 className="w-full text-2xl font-bold 
                        flex justify-center items-center m-5">
                👨‍💼👩‍💼{gubun}예보(<div className="text-blue-300">{area}</div>)
            </h1>
            <div className="flex justify-center items-center m-5">
            <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="--- 항목선택 ---"
                      handleChange={handleselect} />
            </div>
        </div>
        <table
            className="w-11/12 text-left text-sm font-light text-surface">
        <thead
            className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">항목명</th>
            <th scope="col" className="px-6 py-3">예측일자</th>
            <th scope="col" className="px-6 py-3">예측시간</th>
            <th scope="col" className="px-6 py-3">항목값</th>
          </tr>
          {tags}
        </thead>
      </table>
    </div>
  )
}
