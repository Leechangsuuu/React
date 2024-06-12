import { useRecoilValue , useRecoilState } from "recoil";
import { AtomN } from "../14/AtomN";
import { AtomN2 } from "../14/AtomN";
import RecoilDiv2 from "./RecoilDiv2";
import { useEffect } from "react";

export default function RecoilDiv() {
  const [n,setN] = useRecoilState(AtomN)
  const n2 = useRecoilValue(AtomN2)
  useEffect(()=>{
    if (!localStorage.getItem("n")) return;
    setN(parseInt(localStorage.getItem("n")))
  },[])
  return (
    <div className="flex flex-col justify-center items-center text-2xl">
        <div>
        RecoilDiv1 : n1 = {n}, n2 = {n2}
        </div>
      <RecoilDiv2/>
      
    </div> 
  )
}
