
export default function Ball({n}) {
const colorN = {
    'b0' : 'bg-orange-600',
    'b1' : 'bg-lime-600',
    'b2' : 'bg-sky-600',
    'b3' : 'bg-violet-600',
    'b4' : 'bg-rose-600'
}
return (
    <div className={`inline-flex justify-center mx-2
                     items-center w-16 h-16 rounded-full 
                     ${colorN["b" + Math.floor(n / 10)]}
                     text-white text-2xl font-bold `}>
      {n}
    </div>
  )
}
