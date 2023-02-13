import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./style.scss";
// import { loginUser, registerUser } from '../../actions/auth';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Booking.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const Auth = () => {
  const [isSignup,setIsSignup] = React.useState(false);
  const navigate = useNavigate();
  const { loading, error, dispatchAuth } = React.useContext(AuthContext);
  
  const toggleAuthType = () => setIsSignup(pre => !pre);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // must send username/usermail/userpassword to backend
    if(isSignup){
      // signUp-----------------------------------------------------------------------------------
      if(data.get('password') !== data.get('Rpassword')) return console.log("pass in not match");
      const userData = {
        username: data.get('name'),
        usermail: data.get('email'),
        userpassword: data.get('password'),
      }
      // this line uses actions to register
      // registerUser(userData);

      dispatchAuth({type:"SIGN_UP_START"});
      // this line registers directly here
      try {
        const { data } = await axios.post("http://localhost:1818/api/v1/auth/register", userData);
        // console.log(data);
        dispatchAuth({type: "SIGN_UP_SUCCESS", payload: data});
        navigate("/");
        
      } catch (err) {
        // console.log(err);
        dispatchAuth({type: "SIGN_UP_FAILURE", payload: err.response.data});
      }

    }else{
      // logIn-----------------------------------------------------------------------------------
      const userData = {
        username: data.get('name'),
        userpassword: data.get('password'),
      }
      // this line uses actions to login
      // loginUser(userData);
      
      dispatchAuth({type:"LOGIN_START"});
      // this line login directly here
      try {
        const { data } = await axios.post("http://localhost:1818/api/v1/auth/login", userData);
        // console.log(data);
        dispatchAuth({type: "LOGIN_SUCCESS", payload: data});
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
        
      } catch (err) {
        // console.log(err);
        dispatchAuth({type: "LOGIN_FAILURE", payload: err.response.data});

      }
      
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            {isSignup &&<TextField
              margin="normal"
              required
              fullWidth
              id="usermail"
              label="Email Address"
              name="email"
              autoComplete="email"
            />}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isSignup &&<TextField
              margin="normal"
              required
              fullWidth
              name="Rpassword"
              label="R-password"
              type="password"
              id="Rpassword"
            />}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography className='ToggleBtn' onClick={toggleAuthType} variant="body1">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {loading && <span>loading...</span>}
        {error && <span>error...</span>}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}