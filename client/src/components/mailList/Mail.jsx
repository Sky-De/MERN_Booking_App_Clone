import React from 'react';
import axios from "axios";
import { useState } from "react";
import "./mail.scss";


const Mail = () => {
  const [email,setEmail] = useState("");
  const [showPopUp,setShowPopUp] = useState(false);
  const [isChecked,setIchecked] = useState(false);

  const showMessage = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 1500);
  }

  const submitHandler = async (e)=> {
    e.preventDefault();
    try {
      await axios.post("/v1/subscribe",{subscribeMail:email,appLink:isChecked});
      showMessage()
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  }
  
  
  const changeHandler = (e) => {
    setEmail(e.target.value);
  }

  const changeMarkCkeck = (e) => {
    setIchecked(e.target.checked);
  }
  
  return (
    <section className="subscribe">
        <h3 className="subscribe__title">Save time, save money!</h3>
        <p className="subscribe__description">Sign up and we'll send the best deals to you</p>
        <form className="subscribe__form" onSubmit={submitHandler}>
            <div className="inputControl">
                <input required type="email" placeholder="Your email" value={email} onChange={changeHandler}/>
                <button type="submit">Subscribe</button>
            </div>
            <div className="subscribe__checkMark">
                <input type="checkbox" id="checkMark" name="checkMark" value={isChecked} onChange={changeMarkCkeck}></input>
                <label htmlFor="checkMark"> Send me a link to get the FREE Boking.com app!</label>
            </div>
        </form>
          {showPopUp && <span className="subscribe__popUp">Thank You!</span>}
    </section>
  )
}

export default Mail



