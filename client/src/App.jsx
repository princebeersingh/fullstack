import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";


import "./Style/Navbar.scss"
import "./Style/Footer.scss"
import "./Style/Home.scss"
import "./Style/About.scss"
import "./Style/Contact.scss"
import "./Style/Services.scss"
import "./Style/Register.scss"
import "./Style/Login.scss"



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Logout' element={<Logout/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='*' element={<div><h1>Page Not Found 404!</h1></div>}/>
    </Routes>
    <Footer/>
    </Router>

    </>
  );
}

export default App;
