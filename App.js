import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './navbar';
import Home from './Home';
import Weather from './Weather'


function App() {
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>

    </Routes>
    </div>
    </>
  );
}

export default App;
