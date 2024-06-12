import React from 'react'

export default function MyDiv3(probs) {
  return (
    <div>
      <div className="flex flex-col p-5 m-10 w-1/3 h-1/3 bg-orange-200 text-white">
      <div className="w-full">
      {`$(probs.dn1)` > `$(probs.dn2)`> `$(probs.dn3)`}
      </div>

      </div>
    </div>
  )
}
