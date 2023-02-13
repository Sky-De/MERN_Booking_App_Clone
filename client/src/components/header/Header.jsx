import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCar, faPlane, faTaxi, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./header.scss";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { ModelsContext } from "../../context/ModelsContext";
// import { SearchContext } from "../../context/SearchContext";
const Header = () => {
    const navigate = useNavigate();
    const showHeader = window.location.href === "http://localhost:3000/" ? true : false;
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate,setOpenDate] = useState(false);
  const [destination,setDestination] = useState("");
  const [openOptions,setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1
  });
  const dateShowhandle = ()=> {
      if(openOptions) setOpenOptions(false)
      setOpenDate(!openDate)
  }

  const optionsShowHandle = () => {
    if(openDate) setOpenDate(false);
    setOpenOptions(!openOptions)
  }

  const optionHandle = (name,operation,e) => {
    e.preventDefault()

    setOptions((pre) => {
        return {...pre, [name]: operation === "i" ? options[name] + 1 : options[name] > 0 ? options[name] - 1 : 0}
    })
  }

  const { dispatchSearch } = useContext(SearchContext);
  const { dispatchModel } = useContext(ModelsContext);
  const { user } = useContext(AuthContext);

  const searchHandler = (e) => {
    e.preventDefault();
    if(!destination) return
    
    dispatchSearch({type:"NEW_SEARCH", payload:{destination, date, options}})
    navigate("/hotels")
  }

  const openAuthPop = ()=> {
    dispatchModel({type:"OPEN_AUTH_MODEL"});
  }


  return (
    <header className="header">
        <div className="header__container">

        <ul className="header__list">
            <li className="header__listItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </li>
            <li className="header__listItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Plane</span>
            </li>
            <li className="header__listItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
            </li>
            <li className="header__listItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car</span>
            </li>
        </ul>

        {showHeader && <>
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
        <p className="header__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsa. Sit consectetur blanditiis repellendus corrupti quam temporibus voluptatem saepe quis.</p>
        {!user && <button onClick={openAuthPop} className="header__button">Signin/Register</button> }

        <form className="header__search">
            <div className="header__searchItem">
                <FontAwesomeIcon icon={faBed} className="header__icon"/>
                <input type="text" placeholder="Where are you going?" className="header__searchInput" value={destination} onChange={(e) => setDestination(e.target.value)}/>
            </div>
            
            <div className="header__searchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="header__icon"/>
                <span className="header__searchText" onClick={dateShowhandle}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="header__date"
                minDate={new Date()}

            />}
            </div>
            
            <div className="header__searchItem">
                <FontAwesomeIcon icon={faPerson} className="header__icon"/>
                <span className="header__searchText" onClick={optionsShowHandle}>{`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}</span>
                {openOptions && <div className="header__options">
                    <div className="header__optionItem">
                        <span className="header__optionItem--text">Adult</span>
                        <div className="header__optionCounter">
                            <button className="header__optionItem--button" onClick={(e) => optionHandle("adult","d",e)}>-</button>
                            <span className="header__optionItem--number">{options.adult}</span>
                            <button className="header__optionItem--button" onClick={(e) => optionHandle("adult","i",e)}>+</button>
                        </div>
                    </div>
                    <div className="header__optionItem">
                        <span className="header__optionItem--text">Children</span>
                        <div className="header__optionCounter">    
                            <button className="header__optionItem--button" onClick={(e) => optionHandle("children","d")}>-</button>
                            <span className="header__optionItem--number">{options.children}</span>
                        <button className="header__optionItem--button" onClick={(e) => optionHandle("children","i",e)}>+</button>
                        </div>
                    </div>
                    <div className="header__optionItem">
                        <span className="header__optionItem--text">Room</span>
                        <div className="header__optionCounter">    
                            <button className="header__optionItem--button" onClick={(e) => optionHandle("room","d",e)}>-</button>
                            <span className="header__optionItem--number">{options.room}</span>
                            <button className="header__optionItem--button" onClick={(e) => optionHandle("room","i",e)}>+</button>
                        </div>
                    </div>
                </div>}
            </div>

            <div className="header__searchItem">
                <button className="header__searchButton" onClick={searchHandler}>Search</button>
            </div>       
        </form>
        </>}
        
        </div>
    </header>
  )
}

export default Header