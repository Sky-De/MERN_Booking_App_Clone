import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import { getDatesRange } from "../../../../functions/getDatesRange";
import "./reserveItem.scss";


const ReserveItem = ({title,description,maxPeople,roomNumbers,handleSelectedRooms}) => {
  const { date } = useContext(SearchContext);
  const allDates = getDatesRange(date[0].startDate,date[0].endDate);

    const isUnavailableDay = (roomNumber) => {
    const isFound = roomNumber.bookedDates.some((date) => allDates.includes(new Date(date).getTime()));
    return isFound;
  }

  
  return (
    <li className="room">
        <div className="room__content">
        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        <p>{description}</p>
        <small>Max People {maxPeople}</small>
        </div>
        <div className="room__action">
            {roomNumbers.map(roomNumber => {
                return (
                <div className="room__inputControl">
                <label>{roomNumber.number}</label>
                <input name={roomNumber.number} className="room__checkbox" disabled={isUnavailableDay(roomNumber)} type="checkbox" value={roomNumber._id} onChange={handleSelectedRooms} />
                </div>
                )
            })}
        </div>
        
    </li>
  )
}

export default ReserveItem