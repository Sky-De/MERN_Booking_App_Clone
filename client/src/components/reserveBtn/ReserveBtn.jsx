// import { useContext } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ModelsContext } from "../../context/ModelsContext";
import "./reserveBtn.scss";

const ReserveBtn = () => {
  const { user } =  useContext(AuthContext);
  const { dispatchModel } =  useContext(ModelsContext);
  const reserveHandle = () => {
    if(user) dispatchModel({type:"OPEN_RESERVE_MODEL"});
    else dispatchModel({type:"OPEN_AUTH_MODEL"})
  }
  return (<>
    <button onClick={reserveHandle} className="reserverBtn">Reserve or Book Now!</button>
  </>
  )
}

export default ReserveBtn