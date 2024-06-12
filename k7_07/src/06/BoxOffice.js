// import box from './BoxOffice.json';
import BoxOfficeTBody from './BoxOfficeTBody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
import { useState, useEffect, useRef} from 'react';


export default function BoxOffice() {
  const [dailyList ,setDailyList] = useState([]); 
  const[selMv, setSelMv] = useState(); 
  const selDate = useRef();
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err)) 

  }
 
  //날짜가 선택되았을때
  const handleSelect = (e) => {
    e.preventDefault();
    console.log(selDate.current.value);
    /*
    https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?
    key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
    */

    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
    url = url + `key=${process.env.REACT_APP_MV_KEY}`;
    url = url + `&targetDt=${selDate.current.value.replaceAll("-","")}`;
    console.log(url)
    getFetchData(url)
  }

  // useEffect(()=>{
  //   setDailyList(box.boxOfficeResult.dailyBoxOfficeList);   
  // },[]);
  
  useEffect(()=>{
    setSelMv(dailyList[0]);
  },[dailyList]);
  
  return (
  <div className="w-full h-full">
    <div className="w-full flex flex-col justify-start items-center mt-10">
      <form className='w-full'>
        <div className='w-11/12 my-2 flex justify-end items-center'>
          <label htmlFor = "dateId" >날짜선택  </label>
          <input type = "date" 
            id = "dateId" 
            ref = {selDate} 
            onChange = {handleSelect}
            className='bg-gray-50 border border-gray-300 text-gray-500 '/>
        </div>
      </form>
      <table className="w-11/12 text-left text-sm foot-light text-surface">
        <BoxOfficeThead /> 
        <BoxOfficeTBody dailyList = {dailyList} setSelMv = {setSelMv}/>
      </table>
        {selMv && < BoxOfficeInfo selMv = {selMv}/>}
    </div>
  </div>
  )
}
