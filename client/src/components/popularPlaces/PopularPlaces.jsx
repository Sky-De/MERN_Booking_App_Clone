import React from "react"
import PopularPlacesSkeleton from "../skeleton/PopularPlacesSkeleton";
import "./popularPlaces.scss";
import useFetch from "../../hooks/useFetch"
import PopularPlacesItem from "./popularPlacesItem/PopularPlacesItem";

const PopularPlaces = () => {
  // query for popular places base on rating
  const { data, loading, error } = useFetch("/v1/places/popularPlaces?limit=6");
  console.log(data);
  console.log(error);
  return (
    <section className="popularPlaces">
        <h3 className="popularPlaces__title">Popular Places</h3>
        <ul className="popularPlaces__list">
        {loading && <PopularPlacesSkeleton/>}
        {
          data.map((item) => <PopularPlacesItem key={item._id} {...item}/>)
        }
        
        </ul>

    </section>
  )
}

export default PopularPlaces