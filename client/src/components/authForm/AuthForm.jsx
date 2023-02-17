import { useContext } from "react";
import { useState } from "react";
import  axios from 'axios';
import "./authForm.scss";
import { AuthContext } from "../../context/AuthContext";
import Input from "./formItem/Input";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress'
import { ModelsContext } from "../../context/ModelsContext";
const AuthForm = () => {
  const USER_INFO_INITIAL_STATE = {username:'',userpassword:'',repeatpassword:'',usermail:''};
  const [isSignIn, setIsSignIn] = useState(true);
  const [matchPass, setMatchPass] = useState(true);
  const [userInfo, setUserInfo] = useState(USER_INFO_INITIAL_STATE);
  const { loading, error, dispatchAuth } = useContext(AuthContext);
  const { dispatchModel } = useContext(ModelsContext);

  const submitFormData = async (e) => {
    e.preventDefault();
    if(isSignIn){
      // SIGNIN--------
      dispatchAuth({type:"LOGIN_START"});
  
      try {
        const { data } = await axios.post("/v1/auth/login", userInfo);
        dispatchAuth({type:"LOGIN_SUCCESS", payload:data.details});
        dispatchModel({type:"CLOSE_AUTH_MODEL"});
      } catch (error) {
        dispatchAuth({type:"LOGIN_FAILURE", payload: error.response.data});
      }

    }else{
      if(userInfo.userpassword !== userInfo.repeatpassword){
        setMatchPass(false);
        return
      }else{
        setMatchPass(true);
        // SIGNUP--------
        console.log(userInfo);
        dispatchAuth({type:"SIGN_UP_START"});
        try {
          const res = await axios.post("/v1/auth/register", userInfo);
          dispatchAuth({type: "SIGN_UP_SUCCESS", payload: res.data});
          dispatchModel({type:"CLOSE_AUTH_MODEL"});  
        } catch (error) {
          dispatchAuth({type: "SIGN_UP_FAILURE", payload: error.response.data});
        }
      }
    }

  }
  // console.log(user);
  const changeMethod = () => {
    dispatchAuth({type:"REMOVE_ERR"});
    setMatchPass(true);
    setIsSignIn((pre) => !pre);

  }
  const changeUserInfo = (e) => {
    setUserInfo((pre) => ({...pre,[e.target.name]:e.target.value}))
    // console.log(userInfo);     
  }

  return (
    <form className="authForm">
      <div className="authForm__control">
        <Input type="text" label="Name" changeHandler = {changeUserInfo} name="username"/>
        {!isSignIn && <Input type="email" label="Email" changeHandler = {changeUserInfo} name="usermail"/>}
        <Input type="password" label="Password" changeHandler = {changeUserInfo} name="userpassword"/>
        {!isSignIn && <Input type="password" label="Re-Password" changeHandler = {changeUserInfo} name="repeatpassword"/>}
        <div className="authForm__action">
         <button className="authForm__btn" disabled={loading} onClick={submitFormData}>{isSignIn ? "Sign In" : "Sign Up"}</button>
         <p className="authForm__toggle" onClick={changeMethod}>{isSignIn ? "Don't have account? SignUp" : "Have an account? SignIn"}</p>
        </div>
      </div>
      
      {loading && <CircularProgress color="success"/>}
      
      {error && <Alert severity="error" >{error.message}</Alert>}
      {!matchPass && <Alert severity="error" >Passwords are not match</Alert>}
    </form>
  )
}

export default AuthForm