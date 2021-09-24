import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {flex, sectionLeft, sectionRight, homeTitle, imglist, imglistitem} from '../../assets/jss/material.js'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#6dfc02',
    padding: '1.5rem',
    gap: '3rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    marginBottom: '3rem',
    "@media (max-width: 992px)": {
      gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
    },
    '& div': {
      display: 'contents'
    }
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 800,
    fontSize: '1.6em',
    color: 'black',
    textAlign: 'center',
    marginTop: '10px'
  },
  content: {
    color: 'black',
    fontSize: '16px'
  },
  btn: {
    backgroundColor: '#000',
    color: '#6dfc02',
    fontWeight: 600,
    textAlign: 'center',
    borderRadius: '8px',
    fontSize: '18px',
    padding: '5%',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }
}));

function Welcome() {
	const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>MINT THE BOY WHO SAVED CRYPTO</h1>
      </div>
      <div>
        <p className={classes.content}>Make sure you secure your Sminem NFT by participating in the presale. To get your Bored Young Gentleman, check out the collection on OpenSea.</p>
      </div>
      <div>
        <Link to='/' className={classes.btn}>
          SECURE YOUR PRESALE SPOT ON OPENSEA
        </Link>
      </div>
    </div>
  );
}

export default Welcome;