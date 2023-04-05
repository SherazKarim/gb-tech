// import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar/Navbar.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// to enable dropdown
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Landing from './Components/Landing-Page/Landing';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Prices from './Components/Prices/Prices';
import Team from './Components/Team/Team';
// import LatestNews from './Components/LatestNews/LatestNews';
import Clients from './Components/Clients/Clients';
import GetTouch from './Components/GetTouch/GetTouch';
// import Footer from './Components/Footer/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"
import {useEffect} from 'react'
// import {Routes,Route,Outlet} from 'react-router-dom'
// import Web from './MoreDetails/Web';
// import About from './Components/AboutUs/About';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <Landing/>
      <AboutUs/>
      <Services/>
      <Prices/>
      <Team/>
      <Clients/>
      {/* <LatestNews/> */}
      <GetTouch/>
      
      
    </>
  );
}


export default App;
