import React from 'react';
import ReactDOM from 'react-dom';
import ReactGiphySearchbox from "react-giphy-searchbox";
import Footer from '../core/Footer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Header from '../core/Header_Dark';
import bground from '../assets/images/ctBground.png';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebar from '../core/Sidebar';
import List from '@material-ui/core/List';
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key


import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  Container,
  Select,
  TextField,
  Link

  
} from '@material-ui/core';

// Picker
//const gf = new GiphyFetch(UhFUfdL0oZHHh20DVt0ztFH6GbBYnZov);

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
}));

const onSubmit = async values => {
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

const sidebar = {
  title: 'Shesaurus Stats',
  description:
    'To date, the Cultural Thesaurus is home to over...',
  noOfWords:
    '3,432',
  noOfUsers:
    '1,096',
  contributeDesc:
    'Contribute to the Shesaurus community by adding to the Cultural Thesaurus!',
  social: [
    { name: 'Instagram', icon: InstagramIcon, link: 'https://www.instagram.com/culturalthesaurus' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/culturalthesaur'},
    { name: 'Facebook', icon: FacebookIcon, link: 'https://facebook.com'},
  ],
};

export default function Categories(){
  const classes = useStyles();  
    return (
      <React.Fragment>
        <CssBaseline />
        <div style={{backgroundImage: "url(" + bground + ")"}}>
        <Container maxWidth="lg">
        <Header title="CulturalThesaurus" />
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
                <div style={{width: '847px'}}>

              <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
                <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
                <Typography className={classes.title} gutterBottom variant="h3" component="h3" style={{ fontWeight: 600 , textDecoration: "yellow underline"}}>
                   Categories
                  </Typography>
                  </CardContent>
               

                  
                    <Paper style={{ padding: 16 }}>
                      <List>
                        
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Anime"}> Anime</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/BestOfTheBest"}> Best of the Best</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Creole"}> Creole </Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Slang"}> Slang</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Historical"}> Historical</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/LGBTQ+"}> LGBTQ+ Term</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/ForeignLanguage"}> Foreign Language</Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Gaming"}> Gaming </Link> <br/>
                          <Link style={{color: "black", fontSize: 17}} href = {"/search/cat/Other"}> Other </Link> <br/>

                      </List>
                
                </Paper>
            
      </Card>


      </div>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              noOfWords={sidebar.noOfWords}
              noOfUsers={sidebar.noOfUsers}
              contributeDesc={sidebar.contributeDesc}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!" />
      </div>
    </React.Fragment>
  );
}