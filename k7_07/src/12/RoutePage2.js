
import { useSearchParams,useLocation } from "react-router-dom";
export default function RoutePage2() {
    const fruits = ['🍎','🍌','🥕']

    // const loc = useLocation();
    const [sParams] = useSearchParams();
    // console.log("sParams", sParams)

    // const item = sParams.get('item');

    let tm = [];
    sParams.forEach(item => fruits.includes(item)
                            ?tm.push(<li key ={item}>{`${item} : 과일`}</li>)
                            :tm.push(<li key ={item}>{`${item} : 과일아님`}</li>))



  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="flex flex-col text-2xl font-bold justify-center items-center">
            RPage2
        </h1>
        <div className="flex justify-center items-center text-2xl font-bold"> 
            <ul>
                {tm} 
            </ul>
        </div>
    </div>
  )
}

