import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ModelsContext } from '../../../context/ModelsContext';
import AuthForm from '../../authForm/AuthForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const { authOpen, dispatchModel } = React.useContext(ModelsContext);
  const [open, setOpen] = React.useState(authOpen);
  
  React.useEffect(()=> {
    setOpen(authOpen)
  },[authOpen])
  
  const handleClose = () => {
    dispatchModel({type:"CLOSE_AUTH_MODEL"})
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"AUTH"}</DialogTitle>
        <DialogContent>
          <AuthForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}