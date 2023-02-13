import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { ModelsContext } from "../../context/ModelsContext";
import Avatar from '@mui/material/Avatar';
import "./navbar.scss"

const NavBar = () => {
  //temperary img url
  const url = false;
  const { user, dispatchAuth } = useContext(AuthContext);
  const { dispatchModel } = useContext(ModelsContext);
  const navigate = useNavigate();
  const openAuthModel = () => {
    dispatchModel({type:"OPEN_AUTH_MODEL"});
  }
  const goHome = (e) => {
    e.preventDefault()
    navigate('./')
  }
  const logOutHandle = () => {
    dispatchAuth({type:"LOGOUT"});
    dispatchModel({type:"OPEN_ALERT_MODEL"});
    navigate('/')
  }

  const navToProfile = () => {
   navigate('/profile')
  }
  return (
    <nav className="navbar">
        <div className="navbar__Container">
            <a href="./" onClick={goHome} className="navbar__logo">LOGO</a>
            <div className="navbar__Items">
                
                { user ? (<div className="navbar__profile">
                <span onClick={navToProfile} className="navbar__userName">{user.userName}</span>
                <Avatar sx={{ width: 30, height: 30 }}  src={url ? url : '/broken-image.jpg'} />
                <button onClick={logOutHandle} className="navbar__Button">LogOut</button>
                </div>) : 
                (<>
                <button onClick={openAuthModel} className="navbar__Button">Register</button>
                <button onClick={openAuthModel} className="navbar__Button">Login</button>
                </>)}
                
            </div>
        </div>
    </nav>
  )
}

export default NavBar