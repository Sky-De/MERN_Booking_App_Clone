import './inputNumber.scss';

const InputNumber = ({name,min,onChange,placeholder}) => {
  return (
    <div className='inputControl'>
        <label htmlFor={name}>{name}</label>{(name === "Max-price" || name === "Min-price") && <small>$ - per Night</small>}
        <input className='inputControl__number' type="number" name={name} min={min} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default InputNumber