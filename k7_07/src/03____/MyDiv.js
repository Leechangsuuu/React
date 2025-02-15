import MyDiv2 from "./MyDiv2"
import MyDiv3 from "./MyDiv3"
export default function MyDiv() {
  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  return (
    <div className="flex flex-col p-5 m-10 w-2/3 h-2/3 bg-orange-500 text-white">
      <div className="w-full">
      {dname1}
      </div>
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />
    </div>
  )
}
