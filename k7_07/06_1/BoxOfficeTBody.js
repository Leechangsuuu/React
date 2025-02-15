import { HiArrowNarrowUp } from "react-icons/hi";
import { HiArrowSmDown } from "react-icons/hi";
export default function BoxOfficeTBody({ dailyList, setSelMv }) {
    const handleMvSelect = (mv) =>{
        console.log("handleMvSelect",mv)
    }
    const tags = dailyList.map(item =>
        <tr key={item.movieCd}
            onClick={() => {handleMvSelect(item)}}
            className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
            <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
            <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.salesAcc).toLocaleString()}</td>
            <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.audiCnt).toLocaleString()}</td>
            <td className="whitespace-nowrap px-2 py-2 flex justify-center items-center">
                <span>{item.rankInten > 0 ? <HiArrowNarrowUp /> : 
                item.rankInten < 0 ? <HiArrowSmDown />: '-'}
                </span>
                <span>
                {parseInt(item.rankInten)!=0 && Math.abs(item.rankInten)}
                </span>
            </td>
        </tr>
    );
    return (
        <tbody>
            {tags}
        </tbody>
    )
}

