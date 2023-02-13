import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import  Hotel  from "./pages/hotel/Hotel";
import SearchPage from "./pages/searchPage/SearchPage";
import NavBar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Mail from "./components/mailList/Mail"
import Footer from "./components/footer/Footer";
import Divider from "./components/divider/Divider";
import ScrollProgress from "./components/scrollProggress/ScrollProgress";
import AuthModel from "./components/models/authModel/AuthModel";
import Profile from "./pages/profile/Profile";


// note : refactore color usage / scss varibles for color and mixin and mixin for media queris

function App() {
  return (
    <BrowserRouter>
     <AuthModel/>
     <ScrollProgress/>
     <NavBar/>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/hotels" element={<SearchPage/>}/>
       <Route path="/hotels/:id" element={<Hotel/>}/>
     </Routes>
     <Divider/>
     <Mail/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
