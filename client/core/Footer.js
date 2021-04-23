import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const useStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="#ffffff" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://shesaurus.com/">
        Cultural Thesaurus, LLC.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteTextTypography>
  );
}

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer} style={{ background: 'transparent'}}>
      <Container maxWidth="lg">
        <WhiteTextTypography variant="subtitle1" align="center" color="#ffffff" component="p">
          {description}
        </WhiteTextTypography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};