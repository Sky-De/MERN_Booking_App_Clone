import "./home.scss";
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList";
import PopularPlaces from "../../components/popularPlaces/PopularPlaces";
import Divider from "../../components/divider/Divider";
const Home = () => {
  return (
    <main className="homeMain">
     <Featured/>
     <Divider/>
     <PropertyList/>
     <Divider/>
     <PopularPlaces/>
    </main>
  )
}

export default Home