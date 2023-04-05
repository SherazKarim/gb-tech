import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import About from './Components/AboutUs/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ServiceDetail from './Components/Services/ServiceDetail';
import PricesDetails from './Components/Prices/PricesDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />}/> 
      <Route path="/aboutUs" element={<About/>} />
      <Route path="/service/details/:id" element={<ServiceDetail/>}/>
      <Route path='/frontend/:id' element={<PricesDetails/>}/>
      {/* <Route path='/details' element={<PricesDetails/>} /> */}
    </Routes>
    <Footer/>
  </BrowserRouter>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
