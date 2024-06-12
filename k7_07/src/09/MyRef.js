import ButtonC from '../Ui/ButtonC';
import { useState,useRef } from 'react';
export default function MyRef() {
    let cVal = 0;
    const [cVal, setCVal] = useState();
    const rVal = useRef();
    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleClickComp = () => {
        cVal++
    }
    const handleClickSKate = () => {
        setCVal(sVal + 1);
    }  
    const handleClickRef = () => {
        rVal.current = rVal.current + 1    
    }

    const handleClick = () => {
      if (!x1.current.value) {
        alert('값을 입력하세요.') ;
        x1.current.focus();
        return;
    }
    return (
    <div className="flex flex-col justify-center items-center"> 
      <div className='h-20 p-5 m-5 '>
        <span className='text-red-400'>컴포넌트 변수 :{cVal}</span>
        <span className='text-blue-400'>state 변수 :{sVal}</span>
        <span className='text-green-400'>Ref 변수 :{rVal.current}</span>
      </div>
      <div>
        <span>
            <ButtonC caption="컴포넌트 변수" 
                     bcolor = 'green'
                     handleClick={handleClickComp}/></span>
        <span>
            <ButtonC caption="state 변수" 
                     bcolor = 'green'
                     handleClick={handleClickSKate}/></span>
        <span><ButtonC caption="state 변수" 
                     bcolor = 'green'
                     handleClick={handleClickRef}/></span>
      </div>
      <div className='grid geid-cols-1 gap-2'>
        <input type="number" id = "txt1"/>
        <span>+</span>
        <input type="number" id = "txt2"/>
        <ButtonC caption="=" 
                 bcolor = 'green'
                 handleClick={handleClick}/>
        <input type="number" id = "txt3"/>
      </div>
    </div>
  )
}
