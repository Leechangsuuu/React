import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const item = useParams();
    const fruits = ['🍎','🍌','🥕']
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="flex flex-col text-2xl font-bold justify-center items-center">
            RHome
        </h1>
        <div className="w-full grid grid-cols-2 m-10 "> 
        {fruits.includes(item)? `${item} : 과일입니다`:
                                `${item} : 과일이 아닙니다`}
        </div>
    </div>
  )
}
