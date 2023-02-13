import "./popularPlacesListItem.scss";



const PopularPlacesItem = ({img,country,city,startingPrice,rate}) => {
  return (
    <li className="popularPlacesListItem">
      <img src={img} alt={`${country} sample pic`} />
      <span className="popularPlacesListItem__name">{country}</span>
      <span className="popularPlacesListItem__city">{city}</span>
      <span className="popularPlacesListItem__price bold">Starting from : {startingPrice} $</span>
      <div className="popularPlacesListItem__ratin">
        <button className="popularPlacesListItem__btn">{rate}</button>
        <span className="bold">{rate > 8.9 ? "Perfect" : "Excelent"}</span>
      </div>
    </li>
  )
}

export default PopularPlacesItem