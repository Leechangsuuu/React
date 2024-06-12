import './App.css';
import { BrowserRouter , Routes, Route, useSearchParams } from "react-router-dom"
import { Link } from 'react-router-dom';
//import MyDiv from './03/MyDiv';
import { RiHome3Line } from "react-icons/ri";
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodName from './07/FoodName';
// import TrafficMain from './08/TrafficMain';
// import Traffic_Nav from './08_1/Traffic_Nav';
import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
import Gallary from './10/Gallary';
import Festival from './11/Festival';
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';
import RecoilMain from './14_1/RecoilMain';
import Rest from './15/Rest';
// import RouteMain from './12/RouteMain';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col max-full max-w-screen-lg h-screen overflow-y-auto mx-auto ">
        <header className='flex justify-between items-center text-x1 font-bold h-20 p-10 bg-amber-200'>
          <div>REACT</div>
          <ul className='flex justify-center items-center text-sm'>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/Lotto'>로또</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/BoxOffice'>일일박스오피스</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/FoodName'>푸드뱅크</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/Traffic'>교통사고통계</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/Gallary'>관광사진</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/Festival'>축제</Link>
              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/frcst'>예보</Link>

              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/recoil'>리코일</Link>

              </li>
              <li className='mx-2 p-2 rounded-md hover:bg-white
                          hover:bg-white hover:text-blue-600'>
                <Link to='/rest'>Restfull</Link>

              </li>

            
            </ul>
            <p>
              {/* <Link to='/'><RiHome3Line className='text-3xl text-green-900' /></Link> */}
            </p>
        </header>
        
        <main className='w-full grow flex justify-center items-center overflow-y-auto mx-auto'>
          <Routes>
            <Route path='/Lotto' element={<Lotto/>}/>
            <Route path='/FoodName' element={<FoodName/>}/>
            <Route path='/BoxOffice' element={<BoxOffice/>}/>
            <Route path='/Gallary' element={<Gallary/>}/>
            <Route path='/Traffic' element={<Traffic/>}/>
            <Route path='/Festival' element={<Festival/>}/>
            <Route path='/frcst' element={<Frcst/>}/>
            <Route path='/frcstlt' element={<FrcstList/>}/>
            <Route path= '/recoil' element={<RecoilMain/>}/>
            <Route path= '/rest' element={<Rest/>}/>

      
          </Routes>
          
          
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
          {/* <RouteMain/> */}
        </main>
        <footer className='flex justify-center items-center h-20 bg-amber-200'>
          FOOTER
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

