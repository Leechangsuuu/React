import { useEffect } from "react"
import { useRecoilState , useRecoilValue } from "recoil";
import { Atom , Atom2} from "./Atom";


export default function Login() {
  const [n,setN] = useRecoilState(Atom)
  const n2 = useRecoilValue(Atom2)
  useEffect(()=>{
    if 
  })
  return (
  <div>
    
  </div>
)    
}


