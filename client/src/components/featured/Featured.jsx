import React from "react"

import "./features.scss";
import FeaturedItem from "./featuredItem/FeaturedItem";
import useFetch from "../../hooks/useFetch";
import FeaturedSkeleton from "../skeleton/FeaturedSkeleton";

const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBEb0gsRdUtI69F6yCljHdKixqXX0oBdekg&usqp=CAU";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8z-omXNYDSkvJ04AHtzf-SfeN_QbvkzPDQ&usqp=CAU";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBEb0gsRdUtI69F6yCljHdKixqXX0oBdekg&usqp=CAU";


const Featured = () => {
  const { data, loading, error } = useFetch("/v1/hotels/countByCity?cities=berlin,madrid,abhar");
  console.log(error);
  return (
    <section className="featured">
       {loading ? <FeaturedSkeleton/>:<>
       <FeaturedItem img={img1} title="Berlin" properties={`${data[0]} Properties`}/>
       <FeaturedItem img={img2} title="Madrid" properties={`${data[1]} Properties`}/>
       <FeaturedItem img={img3} title="Abhar" properties={`${data[2]} Properties`}/>
       <FeaturedItem img={img1} title="Berlin" properties={`${data[0]} Properties`}/>
       <FeaturedItem img={img2} title="Madrid" properties={`${data[1]} Properties`}/>
       <FeaturedItem img={img3} title="Abhar" properties={`${data[2]} Properties`}/>
       </>}
    </section>
  )
}

export default Featured