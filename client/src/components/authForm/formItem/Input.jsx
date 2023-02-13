import "./input.scss";
const Input = ({ type, changeHandler, name, label, requierd}) => {
  return (
    <div className="inputCon">
        <label>{label}</label>
        <input required type={type} onChange={changeHandler} name={name}/>
    </div>
  )
}

export default Input