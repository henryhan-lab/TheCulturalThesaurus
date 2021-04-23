import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sidebarPhoto from '../assets/images/SignUpSide.png';
import FacebookLogin from 'react-facebook-login';
import GoogleBtn from './GoogleBtn';
import LinkedinLogin from '../assets/images/linkedinSignIn.png';
import {Redirect} from 'react-router-dom'
import {signin} from './api-auth.js'
import auth from './../auth/auth-helper'

const responseFacebook = (response) => {
  console.log(response);
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Cultural Thesaurus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.  '}
        <Link color="inherit" href="https://material-ui.com/">
          Privacy Policy
        </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#000"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#000"
      },
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#000"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#000"
      },
      "& .MuiInputLabel-outlined": {
        color: "white"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#000"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#000"
      }
  },
  image: {
    backgroundImage: "url(" + sidebarPhoto + ")",       // importing the png locally
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
})

const clickSubmit = () => {
  const user = {
    email: values.email || undefined,
    password: values.password || undefined
  }

  signin(user).then((data) => {
    if (data.error) {
      setValues({ ...values, error: data.error})
    } else {
      auth.authenticate(data, () => {
        setValues({ ...values, error: '',redirectToReferrer: true})
      })
    }
  })
}

const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value })
}

const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
}
const {redirectToReferrer} = values
  if (redirectToReferrer) {
    return (<Redirect to={from}/>)
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" noWrap style={{ fontWeight: 600 }}>
            Sign in to your Cultural Thesaurus Account
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email} 
              onChange={handleChange('email')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password} 
              onChange={handleChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={clickSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="#000">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2" color="#000">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={5}>
              <Copyright />
          </Box>
          <br></br>
          <FacebookLogin
              appId="726439581639807"
             autoLoad={false}
            fields="name,email,picture"
            icon="fa-facebook"
            callback={responseFacebook} />
            <br></br>
            <GoogleBtn/>
            <br></br>
            <div  style={{ backgroundImage: "url(" + LinkedinLogin + ")",width: '215px',height: '41px' }}> </div>
        </div>
      </Grid>
    </Grid>
  );
}