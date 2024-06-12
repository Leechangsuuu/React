import ButtonC from "../Ui/ButtonC";
import { useNavigate } from "react-router-dom";
export default function RouteNav() {
    const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-3 
    gap-2 m-10">
        <ButtonC caption = "Home"
                    bcolor = "green"
                    handleClick = {()=>{navigate('/')}}/>
      
        <ButtonC caption = "P1"
                    bcolor = "yellow"
                    handleClick = {()=>{navigate('/p1')}}/>
      
        <ButtonC caption = "P2"
                    bcolor = "yellow"
                    handleClick = {()=>{navigate('/p2')}}/>
      
    </div>
  )
}
