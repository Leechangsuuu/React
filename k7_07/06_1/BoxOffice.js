import box from './BoxOffice.json';
import BoxOfficeTBody from './BoxOfficeTBody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
import { useState, useEffect} from 'react';


export default function BoxOffice() {
  const [dailyList ,setDailyList] = useState([]); 
  const[selMv, setSelMv] = useState(); 
  
  useEffect(()=>{
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);   
  },[]);
  
  useEffect(()=>{
    setSelMv(dailyList[0]);
  },[dailyList]);
  
  return (
  <div className="w-full">
    <div className="w-full flex flex-col justify-start items-center mt-10">
      <table className="w-11/12 text-left text-sm foot-light text-surface">
        <BoxOfficeThead /> 
        <BoxOfficeTBody dailyList = {dailyList} setSelMv = {setSelMv}/>
      </table>
        {selMv && < BoxOfficeInfo selMv = {selMv}/>}
    </div>
  </div>
  )
}
