import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ModelsContext } from '../../../context/ModelsContext';
import useFetch from '../../../hooks/useFetch';
import ReserveItem from './reserveItem/ReserveItem';
import "./reserveModel.scss"
import axios from 'axios';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { getDatesRange } from '../../../functions/getDatesRange';
import { useNavigate } from 'react-router-dom';
import { AuthContext} from "../../../context/AuthContext"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({id}) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { date } = useContext(SearchContext);
  const allDates = getDatesRange(date[0].startDate,date[0].endDate);
  const { reserveOpen, dispatchModel } = React.useContext(ModelsContext);
  const [open, setOpen] = React.useState(reserveOpen);
  const { data, error, loading } = useFetch(`/v1/hotels/room/${id}`);
  let selectedRooms = [];
  let selectedRoomsNumbers = [];
  React.useEffect(()=> {
    setOpen(reserveOpen)
  },[reserveOpen])

  const handleSelectedRooms = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        const name = e.target.name;
        checked ? selectedRooms.push(value) : selectedRooms.splice(selectedRooms.indexOf(value),1);
        checked ? selectedRoomsNumbers.push(name) : selectedRooms.splice(selectedRooms.indexOf(name),1);
    }

  const handleClose = () => {
    dispatchModel({type:"CLOSE_RESERVE_MODEL"})
  };
  const handleReserve = async () => {
    console.log("handleReserve");
    try {
      //add room's reserved days
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.patch(`/v1/rooms/bookedDates/${roomId}`,{allDates});
          return res.data;
        })
      )
      // adds reserved room numbers to user profile data // needs better model including dates-hotelName-rooms
      await axios.patch("/v1/users/reserveRoom",{id:user._id, bookedRooms:[...selectedRoomsNumbers]})
      dispatchModel({type:"CLOSE_RESERVE_MODEL"});
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Dialog
      className='dialog'
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {loading ? <h2>Loading...</h2> :
        (
          <div className="dialog__con">
          <DialogTitle className='dialog__title'>{"Select your rooms:"}</DialogTitle>
        <DialogContent className='dialog__content'>
          <DialogContentText className='dialog__content--text' id="alert-dialog-slide-description">
            <ul className="dialog__list">
              {data && data.map((item) =>  <ReserveItem key={item.id} {...item} handleSelectedRooms={handleSelectedRooms}/> )}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog__action'>
          <Button onClick={handleReserve}>Reserve</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        </div>
        )}
        
      </Dialog>
    </div>
  );
}