import React from 'react';
//import View from "react-native";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Logo from '../assets/images/CT_Dark.png';
import SearchBar from "material-ui-search-bar";
import auth from './../auth/auth-helper'
import {Link, Redirect, withRouter} from 'react-router-dom'

// <Button size="small">Subscribe</Button>
const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  browser: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'underline',
  },
  RoundedSearch: {
    marginLeft: 450,
  },
  userIcon: {
    marginLeft: 150,
  },
}));

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#FFF952'}
  else
    return {color: '#000000'}
};

const sections = [
  { title: 'Categories', url: "/categories" },
  { title: 'Random Word', url: "/wordPage" },
  { title: 'WordBattles', url: '#' },
  { title: 'About', url: "/about" },
];

const classes = () => useStyles();
const Title = "Cultural Thesaurus";

const Header = withRouter(({history}) => (
  <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <a href="/"><img src={Logo} height={120} width={264}/> 
        </a>
        <SearchBar className={classes.search}
          onRequestSearch={(searchVal) => history.push('/search/post/' + searchVal)}
          placeholder={"Search the world.."}
          style={{
            margin: '0 auto',
            minWidth: 400,
            maxWidth: 700,
            marginLeft: 200,
            marginRight: 110,
          }}
        />
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")} style={{color: "#FFFFFF", backgroundColor: "#2e2e2e", marginRight: "5px"}}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")} style={{color: "#FFFFFF", backgroundColor: "#2e2e2e"}}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)} style={{color: "#FFFFFF", backgroundColor: "#2e2e2e", marginRight: "5px"}}>My Profile</Button>
          </Link>
          <Button style={{color: "#FFFFFF", backgroundColor: "#2e2e2e"}} onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
      </Toolbar>
      <Toolbar component="nav" variant="dense" style={{
          justifyContent: 'space-between',
            overflowX: 'auto',
          }}>
        {sections.map((section) => (
          <Link
            style={{color: "#FFFFFF"}}
            nowrap="true"
            key={section.title}
            variant="body1"
            to={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  ))

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
  };

export default Header