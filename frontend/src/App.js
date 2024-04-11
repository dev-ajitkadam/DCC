import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Services from './Component/Pages/Services';
import Login from './Component/auth/Login';
import Contact from './Component/Pages/Contact';
import ShowHeader from './Component/navigation/ShowHeader';
import Slider from './Component/navigation/Slider';
import NavBar from './Component/navigation/NavBar';
import Footer from './Component/navigation/Footer';
import ShowFooter from './Component/navigation/ShowFooter';
import SiteEngDash from './Component/Dashboard/siteeng/SitEngDash';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <ShowHeader>
      <NavBar/>
      <Slider/>
    </ShowHeader>
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/siteengdash' element={<SiteEngDash/>}/>
      </Routes>
      </div>
      <ShowFooter>
      <Footer/>
      </ShowFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
