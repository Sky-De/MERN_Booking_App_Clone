import "./propertyListItem.scss";

const PropertyListItem = ({img,title1,description}) => {
  return (
    <li className="propertyListItem">
      <img className="propertyListItem__img" src={img} alt={`${title1} sample pic`} />
      <div className="propertyListItem__titles">
        <h3>{title1}</h3>
        <h4>{description}</h4>
      </div>
    </li>
  )
}

export default PropertyListItem