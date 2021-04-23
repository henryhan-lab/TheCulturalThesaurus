import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Welcome from '../assets/images/welcomeBanner.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import lit from '../assets/images/lit.gif';
import sus from '../assets/images/sus.gif';
import bet from '../assets/images/bet.gif';
import Header from './Header_Dark';
import bground from '../assets/images/ctBground.png';
import Link from '@material-ui/core/Link';


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

const search = () => {
  if(values.search){
    list({
      search: values.search || undefined, category: values.category
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setValues({...values, results: data, searched:true})
      }
    })
  }
}

export default function Blog() {
  const classes = useStyles();  
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{backgroundImage: "url(" + bground + ")"}}>
      <Container maxWidth="lg">
      <Header title="CulturalThesaurus" />
        <main>
        <div  style={{ backgroundImage: "url(" + Welcome + ")",width: '100%',height: '500px', paddingTop: '10px', marginTop: '20px', paddingBottom:'20px', boxShadow: '5px 10px' }}> </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            <div style={{width: '847px'}}>
          {/*Word of the Day Card*/}
          <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Word of the Day
              </Typography>
              <Typography variant="h2" component="h2" style={{ fontWeight: 600 }}>
                 'Lit'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  adjective
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to describe something that is "exciting or 
                <br />
                  {'excellent."'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                  Also see: 
                  <Link href = "#" onClick={preventDefault} color="blue"> dank </Link>,
                 <Link href = "#" onClick={preventDefault} color="blue"> ill </Link>,
                 <Link href = "#" onClick={preventDefault} color="blue"> amazeballs </Link>
              </Typography>
               <img src={lit} alt="loading..." style={{ paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                  Created by Nigel, last edited on 11/27/2020 by Mary. 
              </Typography>
             </CardContent>
             <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
               <Link href = {"/wordPage/607d24e50d67871d58d6ec22"}>
                <Button size="small">Discover 'Lit'</Button>
              </Link>
              </CardActions>
          </Card>
   
          {/*2nd Card*/}
        <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
              <Typography variant="h2" component="h2" style={{ fontWeight: 600 }}>
                 'Sus'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  adjective
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to describe someone that is acting suspiciously. 
                <br />
                  {'Made popular by the videogame "Among Us" .'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                    Also see: 
                    <Link href = "#" onClick={preventDefault} color="blue"> Suspicous </Link>,
                    <Link href = "#" onClick={preventDefault} color="blue"> Scary </Link>
              </Typography>
               <img src={sus} alt="loading..." style={{ minWidth: '380px', maxWidth: '380px', minHeight: '273px', maxHeight: '273px', paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                      Created by Mary, last updated on 10/7/2020 by Keshia.
              </Typography>
         </CardContent>
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
        <Link href = {"/wordPage/607d254d0d67871d58d6ec23"}>
          <Button size="small">Discover 'Sus'</Button>
        </Link>
      </CardActions>
    </Card>

    {/*3rd Card*/}
    <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
              <Typography variant="h2" component="h2" style={{ fontWeight: 600 }}>
                   'Bet'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  Verb
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to confirm participation in a social event, 
                <br />
                  {'like a meetup.'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                   Also see: 
                   <Link href = "#" onClick={preventDefault} color="blue"> okay</Link>,
                    <Link href = "#" onClick={preventDefault} color="blue"> fosho </Link>
              </Typography>
               <img src={bet} alt="loading..." style={{ minWidth: '380px', maxWidth: '380px', minHeight: '273px', maxHeight: '273px', paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                        Created by Rui, last updated on 10/5/2020 by Nigel.
              </Typography>
         </CardContent>
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
      <Link href = {"/wordPage/607d25bb0d67871d58d6ec24"}>
        <Button size="small">Discover 'Bet'</Button>
        </Link>
      </CardActions>
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