import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './pages/mainpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={
          <MainPage/>
        }/>

        <Route path='/about' element={
          <div className='bg-red'>
            About page
          </div>
        }/>
      </Route>
    </Routes>
  );
}

export default App;