import Home from "./Home"
import Subway from "./Subway"
import Login from "./Login"
import { RecoilRoot } from "recoil"
export default function MainNav() {
  return (
    <RecoilRoot>
      <Home/>
      <Subway/>
      <Login/>
    </RecoilRoot>
  )
}
