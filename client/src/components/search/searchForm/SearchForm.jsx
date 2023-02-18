import React from 'react';

import { format } from 'date-fns';
import { useContext } from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { SearchContext } from '../../../context/SearchContext';
import useFetch from '../../../hooks/useFetch';
import InputNumber from './inputNumber/InputNumber';
import './searchForm.scss';
import { getDatesRange } from '../../../functions/getDatesRange';

const SearchForm = () => {
  const {destination, date, options, dispatchSearch} = useContext(SearchContext);
  const [formData,setFormData] = useState({destination, date, options});
  const [openDate,setOpenDate] = useState(true);
  const nightNumb = getDatesRange(formData.date[0].startDate,formData.date[0].endDate).length;  
  const { data } = useFetch(`/v1/hotels?city=${formData.destination}&max=${formData.MaxPrice || 9999}&min=${formData.MinPrice || 0}`)
  
    const changeHandle = (e) => {
        if(e.target.name === "adult" || e.target.name === "children" || e.target.name === "room" ){
          setFormData({...formData, options: {...formData.options , [e.target.name]:e.target.value}})}
        else{setFormData({...formData, [e.target.name]:e.target.value})}
    }
    const btnClick = (e) => {
        e.preventDefault();
        dispatchSearch({type:"NEW_SEARCH",payload:{...formData}})
        console.log(data);
    }
  return (
    <form className='form'>
        <h2 className='form__title'>Search</h2>
        <div className="form__inputControl">
            <label htmlFor="destination">Destination</label>
            <input name='destination' onChange={changeHandle} value={formData.destination} type="text" placeholder='Where you gonna go?'/>
        </div>
        <div className="form__inputControl">
            <label htmlFor="date">Date</label>
            <span className='form__dateShow' onClick={() => setOpenDate((pre) => !pre)}>{`${format(formData.date[0].startDate, "MM/dd/yyyy")} to ${format(formData.date[0].endDate, "MM/dd/yyyy")}`}</span>
            <span>{nightNumb} {nightNumb > 1 ? "Nights" : "Night"}</span>
            {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setFormData({...formData, date: [item.selection]})}
                moveRangeOnFirstSelection={false}
                ranges={formData.date}
                className="form__date"
                minDate={new Date()}
            />}
        </div> 
        <div className="form__options">
              <InputNumber name="MinPrice" min={50} onChange={changeHandle}/>
              <InputNumber name="MaxPrice" min={50} onChange={changeHandle}/>
              <InputNumber name="adult" min={1} onChange={changeHandle} placeholder={formData.options.adult}/>
              <InputNumber name="children" min={0} onChange={changeHandle} placeholder={formData.options.children}/>
              <InputNumber name="room" min={1} onChange={changeHandle} placeholder={formData.options.room}/>
        </div>
        
       
        
        <button className='form__btn' onClick={btnClick}>Search</button>
    </form>
  )
}

export default SearchForm