
import { AtomN, AtomN2 } from '../14/AtomN';
import ButtonC from '../Ui/ButtonC'
import { useRecoilState, useRecoilValue } from 'recoil'


export default function RecoilDiv3() {
  const [n ,setN] = useRecoilState(AtomN);
  const n2 = useRecoilValue(AtomN2);

  const handleup = (()=>{
       setN(n+1)
    })
    const handledown = (()=>{
        setN(n-1)
    })
    const handlesave = (()=>{
      localStorage.setItem ("n",n);
      setN(0)
    })
    const handledel = (()=>{
      localStorage.removeItem ("n");
      setN(0)
    })
  return (
    <div className='flex flex-col justify-center items-center text-2xl'>
      <div>
        RecoilDiv3 :  n2 = {n2}
      </div>
      <div>
        <ButtonC caption="증가"
                bcolor='green'
                handleClick={handleup}/>
        <ButtonC caption="감소"
                bcolor='green'
                handleClick={handledown}/>
        <ButtonC caption="Local저장"
                bcolor='green'
                handleClick={handlesave}/>
        <ButtonC caption="Local삭제"
                bcolor='green'
                handleClick={handledel}/>

      </div>
    </div>
  )
}
