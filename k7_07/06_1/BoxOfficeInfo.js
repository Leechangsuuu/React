
export default function BoxOfficeInfo({selMv}) {
  
    return (
    <div className='w-11/12  flex justify-center items-center bg-black text-white'>
      [{selMv.movieCd}-{selMv.movieNm}]상영한 스크린수 : {selMv.scrnCnt} 
      (
        <span className={selMv.rankOldAndNew === 'OLD' ? "text-white" : "text-yellow-200"}>
            {selMv.rankOldAndNew}
        </span>
      )
    </div>
  )
}
