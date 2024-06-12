import RecoilDiv3 from './RecoilDiv3'
import React from 'react'
import { AtomN } from "../14/AtomN";
import { useRecoilValue } from 'recoil';
export default function RecoilDiv2() {
  const n = useRecoilValue(AtomN)
  return (
    <div className='flex flex-col justify-center items-center text-2xl'>
        <div>
        RecoilDiv2 : n1 = {n}
        </div>
        <RecoilDiv3  />
    </div>

  )
}
