import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [rooms,setRooms] = useState([]);
    const navigate = useNavigate()
    const getReservedRooms = async () => {
      const { data } = await axios.post("/v1/users/reservedRooms",{id:user._id});
      setRooms(data) ;
    }
    useEffect(() => {
      if(!user){
       navigate('/')
      }
    getReservedRooms()
    },[])
  return (
    <main className="profile">
        <h2>Reserverd Rooms</h2>
        <ul>
          {rooms.length < 1 ? "No Reserveed room yet" : rooms.map((room,index) => {
            return <li key={index}>room: {room}</li>
          })}
        </ul>
    </main>
  )
}

export default Profile