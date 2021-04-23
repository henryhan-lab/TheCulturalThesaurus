import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../assets/images/bground.png';
import { withStyles } from "@material-ui/core/styles";
import {create} from './api-user.js'
import {Link} from 'react-router-dom'

function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Cultural Thesaurus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteTextTypography>
  );
}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
})(Typography);

const useStyles = makeStyles((theme) => ({

  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff952"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff952"
    },
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#fff952"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#fff952"
    },
    "& .MuiInputLabel-outlined": {
      color: "white"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#fff952"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff952"
    }
  },

  paper: {
    paddingTop: theme.spacing(26),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    height: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  body: {
    height: '100%',
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
  }

  return (
    //975px
    <div style={{ backgroundImage: "url(" + Background + ")", width: '100%', height: '975px', backgroundSize: '100%' }}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <WhiteTextTypography component="h1" variant="h5" noWrap >
            Join the Cultural Thesaurus Community!
        </WhiteTextTypography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.root}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                color="secondary"
                value={values.name}
                onChange={handleChange('name')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.root}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                color="secondary"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.root}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                value={values.password} 
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="secondary" style ={{ color: "#ffffff"}} />}
                label={ <span style={{ color: "white" }}>I want to receive inspiration, marketing promotions and updates via email from the Cultural Thesaurus Team.
                </span>}
              />
            </Grid>
          </Grid>
          <Link to="/signin" style={{textDecoration: "none"}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={clickSubmit}
            >
              Sign Up
            </Button>
          </Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2" style ={{ color: "#ffffff"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} style={{ position: "relative", bottom: "10px"}}>
        <Copyright />
      </Box>
    </Container>
    </ div>
  );
}
