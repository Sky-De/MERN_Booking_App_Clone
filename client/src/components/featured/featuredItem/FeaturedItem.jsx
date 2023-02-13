import "./featuredItem.scss"

const FeaturedItem = ({img,title,properties}) => {
  return (
    <div className="featuredItem">
        <img className="featuredItem__img" src={img} alt={`${title} pic`}/>
        <div className="featuredItem__titles">
          <h2>{title}</h2>
          <h4>{properties}</h4>
        </div>
      </div>
  )
}

export default FeaturedItem