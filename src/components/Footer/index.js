import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    width: '100%'
  },
  footerwrap: {
    width: '90%',
    margin: '0 auto'
  },
  divide: {
    borderTop: '1px solid #000'
  },
  footerbody: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 0'
  },
  footerlogo: {
    "@media (max-width: 992px)": {
      order: -1,
      marginTop: 'calc(-1 * 240px / 2)',
      width: '100%',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '200px',
      display: 'flex',
      margin: '0 auto'
    },
    width: '33.33333333%',
  },
  socilalist: {
    width: '100%',
    textAlign: 'right',
    marginBottom: '10px',
    "@media (max-width: 992px)": {
      textAlign: 'center',
      marginBottom: '10px'
    },
  },
  socilalistItem: {
    width: 'auto',
    padding: '20px',
    paddingRight: 0,
    color: 'black',
    '&:hover': {
      color: '#bfc500'
    }
  },
  footerbodyleft: {
    width: '33.33333333%',
    marginTop: '60px',
    "@media (max-width: 992px)": {
      width: '100%',
    },
    '& h4': {
      textAlign: 'left',
      color: '#6dfc02',
      "@media (max-width: 992px)": {
        textAlign: 'center',
        marginBottom: '10px'
      },
    },
    '& form': {
      display: 'flex',
      width: '80%',
      marginTop: '10px',
      '& input': {
        width: '100%',
        backgroundColor: '#272626',
        border: '0ch',
        padding: '2px',
        paddingLeft: '10px',
      },
      '& button': {
        backgroundColor: '#4b4a4a',
        border: '0ch',
        padding: '10px 20px 10px 20px',
        color: '#fff',
        caretColor: 'transparent',
        transition: '.3s',
      },
      "@media (max-width: 992px)": {
        margin: '0 auto',
        marginBottom: '20px'
      },
    }
  },
  leftflex: {
    display: 'flex'
  },
  footerbodyright: {
    width: '33.33333333%',
    marginTop: '60px',
    "@media (max-width: 992px)": {
      width: '100%',
    },
  },
  copyright: {
    fontSize: '10px',
    '& p': {
      textAlign: 'right',
      "@media (max-width: 992px)": {
        textAlign: 'center',
      }
    }
  },
  copyrightlink: {

  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.footerwrap}>
        <div className={classes.divide}></div>
        <div className={classes.footerbody}>
          <div className={classes.footerbodyleft}>
            <div>
              <h4><i>GET ON THE LIST</i></h4>
              <form>
                <input placeholder='Email Address'/>
                <button>→</button>
              </form>
            </div>
          </div>
          <div className={classes.footerlogo}>
            <img src='/images/footer-logo.webp' />
          </div>
          <div className={classes.footerbodyright}>
            <div className={classes.rightflex}>
              <div className={classes.socilalist}>
                <Link to='/' className={classes.socilalistItem}>
                  <FaYoutube />
                </Link>
                <Link to='/' className={classes.socilalistItem}>
                  <FaInstagram />
                </Link>
                <Link to='/' className={classes.socilalistItem}>
                  <FaDiscord />
                </Link>
                <Link to='/' className={classes.socilalistItem}>
                  <FaTwitter />
                </Link>
              </div>
              <div className={classes.copyright}>
                <p>© 2021 Yuga Labs LLC</p>
              </div>
              <div className={classes.copyrightlink}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer