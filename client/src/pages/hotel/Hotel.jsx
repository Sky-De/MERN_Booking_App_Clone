import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotel.scss";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ReserveBtn from "../../components/reserveBtn/ReserveBtn";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import  useFetch  from "../../hooks/useFetch" 
import HotelPageSkeleton from "../../components/skeleton/HotelPageSkeleton";
import { SearchContext } from "../../context/SearchContext";
import ReserveModel from "../../components/models/reserveModel/ReserveModel";
import { getDatesRange } from "../../functions/getDatesRange";
const Hotel = () => {
  const { date, options } = useContext(SearchContext);
  let nightNumb = getDatesRange(date[0].startDate,date[0].endDate).length;

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const {data,error,loading} =  useFetch(`/v1/hotels/${id}`);
  console.log(data);
  console.log(error);
  const [slideNumber,setSlideNumber] = useState(0);
  const [slideOpen,setSlideOpen] = useState(false);
  const sliderHandle = (id) =>{
    console.log(id);
    setSlideNumber(id);
    setSlideOpen(true);
  }

  const closeSlider = () => {
    setSlideOpen(false)
  }

  const rightSlider = () => {
    if(slideNumber === data.photos.length-1) setSlideNumber(0)
    else setSlideNumber((pre) => pre+1)  
  }
  
  const leftSlider = () => {  
    if(slideNumber === 0) setSlideNumber(data.photos.length-1)
    else setSlideNumber((pre) => pre - 1)
  }

  return (
    <main className="hotelPageMain">
          <ReserveModel id={id}/>
      
     {loading ? <HotelPageSkeleton/> :  <>
      
      {/* slider */}
      {slideOpen && <div className="slider">
        <FontAwesomeIcon onClick={closeSlider} className="slider__icon close" icon={faCircleXmark}/>
        <FontAwesomeIcon onClick={rightSlider} className="slider__icon right" icon={faCircleArrowRight}/>
        <div className="slider__warper">
          <img className="slider__image" src={data.photos[slideNumber]} alt="sliderImage" />
        </div>
        <FontAwesomeIcon onClick={leftSlider} className="slider__icon left" icon={faCircleArrowLeft}/>

        </div>}
      <section className="hotelPageMain__intro">
        <div className="hotelPageMain__information">
           <h1 className="hotelPageMain__title">{data.name}</h1>
           <address> <FontAwesomeIcon icon={faLocationDot}/> <span>{data.address}</span></address>
           <strong className="hotelPageMain__firstFeature">Excellent location - {data?.subwayDistance} from {data?.subwayTitle}</strong>
           <strong className="hotelPageMain__secondFeature">{`Book a stay over $${data.cheapestPrice} at this property`}{data.freeTaxi && " and get a free airport taxi"}</strong>
        </div>
        <ReserveBtn/>
      </section>
        <div className="hotelPageMain__images">
          {
            data?.photos?.map((photo,index) => <img src={photo} alt={photo} id={index} onClick={() => sliderHandle(index)}/>)

          }
        </div>
        <section className="hotelPageMain__detailsCon">
          <article className="hotelPageMain__details">
            <h2 className="hotelPageMain__details--title">{data.title}</h2>
            <p className="hotelPageMain__details--description">{data.description}</p>
          </article>
          <section className="hotelPageMain__price">
            <h3 className="hotelPageMain__price--title">Perfect for a {nightNumb}-night stay!</h3>
            <p className="hotelPageMain__price--description">Located in the real heart of <b>{data.city}</b>, this property has an
                excellent location score of <b>{data.rating}</b></p>
            <strong className="hotelPageMain__price--number">${data.cheapestPrice * nightNumb * options.room}<span> ({nightNumb} {nightNumb > 1 ?'Nights':'Night'} - {options.room} {options.room > 1? `Rooms`:`Room`})</span></strong>
            <ReserveBtn/>
          </section>
        </section>
      </>}
    </main>
  )
}

export default Hotel