import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'

export default function FoodCard({data}) {
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow)
    }
    
 
    return (
    <div className='flex w-full h-40 justify-start items-center text-black'>
      <div className='w-1/4 h-30 '>
       <img src = {data["구분"]==="광역지원센터" ? busan :
                   data["구분"]==="기초푸드뱅크" ? bank : market}/> 
       
      </div>
      <div className='flex flex-col justify-start items-start w-3/4'>
        <div className='my-5 '>
            <h1 className='text-xl font-bold text-gray-700'>
            {data["사업장명"]}
            </h1>
            <h2 className='text-l font-bold text-gray-600'> 
            {data["운영주체명"]}
            </h2>
            <h3 className='font-bold text-gray-400'>
            {data["사업장 소재지"]}
            </h3> 
        </div>
        
        <div className='bg-green-400 w-full p-2 h-10 '
            onClick = {handleShow}>
            {isShow && <p className =' text-white font-bold'>
                Tel. {data["연락처(대표번호)"]}
            </p>}
        </div>
      </div>
    </div>
  )
}
