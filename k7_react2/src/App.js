import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Login from './1/Login';
import Home from './1/Home';
import Subway from './1/Subway';
import { RecoilRoot } from 'recoil';
import MainNav from './1/MainNav';


function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
    <div className="flex flex-col max-full max-w-screen-lg h-screen overflow-y-auto mx-auto ">
      <header className='flex justify-start items-center text-x1 font-bold h-20 p-10 bg-amber-200'>
        <div>REACT</div>
        <ul className='flex justify-center items-center text-sm'>
          <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-gray-600'>
                  <Link to='/home'>홈</Link>
          </li>
          <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-gray-600'>
                  <Link to='/subway'>지하철대기정 보1</Link>
          </li>
          
          <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-gray-600'>
                  <Link to='/login'>로그인</Link>
          </li>
         
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/mainnav' element={<MainNav/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/subway' element={<Subway/>}/>

          
        </Routes>
      </main>
    </div>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
