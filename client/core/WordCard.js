import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {fetch} from '../post/api-post.js';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    }
  }));
  
export default function WordCard (props) {
    const classes = useStyles()

    return (
        <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
        <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
        <Typography variant="h2" component="h2" style={{ fontWeight: 600 }}>
            '{props.word.text}'
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.word.partOfSpeech}
        </Typography>
        <br></br>
        <Typography variant="body1" fontSize component="p">
            {props.word.definition}
        </Typography>
        <br></br>
        <Typography variant="body1" fontSize component="p">
            Also see: 
            {" " + props.word.syn}
        </Typography>
        <img src={props.word.photoLink} alt="loading..." style={{ paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
        <Typography className={classes.pos} color="textSecondary">
            Created by Nigel, last edited on 11/27/2020 by Mary. 
        </Typography>
        </CardContent>
        </Card>
        )

}