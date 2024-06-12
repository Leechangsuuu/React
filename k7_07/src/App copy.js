import './App.css';
//import MyDiv from './03/MyDiv';
import { RiHome3Line } from "react-icons/ri";
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodName from './07/FoodName';
// import TrafficMain from './08/TrafficMain';
// import Traffic_Nav from './08_1/Traffic_Nav';
// import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
// import Gallary from './10/Gallary';
// import Festival from './11/Festival';
import RouteMain from './12/RouteMain';
function App() {
  return (
    <div className="flex flex-col max-full max-w-screen-lg h-screen overflow-y-auto mx-auto ">
      <header className='flex justify-between items-center text-x1 font-bold h-20 p-10 bg-amber-200'>
        <div>REACT</div>
        <div><RiHome3Line className='text-3xl text-white'/></div>
      </header>
      <main className='w-full grow flex justify-center items-center overflow-y-auto mx-auto'>
        {/* <div className='flex justify-center items-center'>
          <img src = {logo} className='App-logo' alt = 'logo' />
        </div> */}
      {/* <Traffic_Nav/> */}
      {/* <Traffic/> */}
        {/* <Lotto/> */}
        {/* <BoxOffice/> */}
        {/* <TrafficMain/> */}
        {/* <FoodName/> */}
        {/* /<MyRef/>/ */}
        {/* <Gallary/> */}
        {/* <Festival/> */}
        <RouteMain/>
      </main>
      <footer className='flex justify-center items-center h-20 bg-amber-200'>
        FOOTER
      </footer>
    </div>
  );
}

export default App;

