import { useNavigate } from 'react-router-dom';
import React from './searchResultItem.scss'

const SearchResultItem = (props) => {
  const { _id, city, title, photos, subwayDistance, freeTaxi, descriptionShort, freeCancellation, features, rateTitle, rating, price, titleSrc} = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/hotels/${_id}`)
  }
  return (
    <li className='resultItem'>
      <div className="resultItem__img">
        <img src={photos[0]} alt={title} />
      </div>
      <div className="resultItem__info">
        <h1>{city}</h1>
        <h2 className="resultItem__title"><a href={titleSrc}>{title}</a></h2>
        <p className="resultItem__subway">{`${subwayDistance} from Subway`}</p>
        {freeTaxi && <strong className="resultItem__freeTaxi">Free airport taxi</strong>}
        <strong className="resultItem__description">{descriptionShort}</strong>
        <p className="resultItem__features">{features}</p>
        {freeCancellation && <strong className="resultItem__freeCanceling--s">Free cancellation</strong>}
        {freeCancellation && <p className="resultItem__freeCanceling--p">You can cancel later,so lock in this greate price today!</p>}
      </div>
      <div className="resultItem__details">
        <div className="resultItem__details--rate">
          <strong>{rateTitle}</strong>
          <span>{rating}</span>
        </div>
        <div className="resultItem__details--price">
          <strong>{`$ ${price}`}</strong>
          <p>Includes taxes and fees</p>
          <button onClick={handleClick}>See availability</button>
        </div>

      </div>
    </li>
  )
}

export default SearchResultItem