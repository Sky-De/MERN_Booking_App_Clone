import React from "react"
import useFetch from "../../hooks/useFetch"
import FeaturedSkeleton from "../skeleton/FeaturedSkeleton";
import "./propertyList.scss"
import PropertyListItem from "./proprtyListItem/PropertyListItem"



const PropertyList = () => {
  const { data, loading, error } = useFetch("/v1/hotels/countByType");
  console.log(error);
  return (
    <section className="propertyList">
        <h3 className="propertyList__title">Browse by property type</h3>
        <ul className="propertyList__items">
           {loading ? <FeaturedSkeleton/> : <>
           {
            data.map((item) => {
              return <PropertyListItem key={item.id} img={item.img} title1={item.type} description={`${item.count} type`}/>
            })
           }
           </>}
        </ul>

    </section>
  )
}

export default PropertyList