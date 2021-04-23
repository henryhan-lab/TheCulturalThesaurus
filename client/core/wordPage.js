import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header_Dark';
import bground from '../assets/images/ctBground.png';
import WordCard from './WordCard';
import {read} from '../post/api-post.js'; 


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
}));

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

export default function wordPage({ match }) {
  const classes = useStyles();  
  const preventDefault = (event) => event.preventDefault();

  const [post, setPost] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal
  
      read({
        postId: match.params.postId}, signal).then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setPost(data)
        }
      })
    return function cleanup(){
      abortController.abort()
    }
  }, [match.params.postId])

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{backgroundImage: "url(" + bground + ")"}}>
      <Container maxWidth="lg">
      <Header title="CulturalThesaurus"/>
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <div style={{width: '847px'}}>

          <WordCard word={post}></WordCard>
      
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