import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import {flex, sectionLeft, sectionRight, homeTitle, imglist, imglistitem} from '../../assets/jss/material.js'

const useStyles = makeStyles((theme) => ({
  flex,
  sectionLeft,
  sectionRight,
  homeTitle,
  imglist,
  imglistitem,
  fairTitle: {
    color: '#bfc500',
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: '1.6em',
  },
  ponzi: {
    fontSize: '1.05em',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  middle: {
    width: '100%',
    marginBottom: '1rem'
  },
  text1: {
    fontSize: '20px',
    marginBottom: '10px',
    '& a': {
      color: '#bfc500',
    }
  },
  text2: {
    fontSize: '14px',
    fontStyle: 'italic'
  }
}));

function Specs() {
	const classes = useStyles();

  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.sectionLeft}>
          <h1 className={classes.homeTitle}>THE SPECS</h1>
          <p className={classes.text1}>Sminem was ironically the critical saviour of cryptobecause he defeated both shorters and scammers.<br/><br/>Greedy bankers are trying to leave every small trader bleeding and dry, Sminem is here to stop this tyranny and counter with justice.</p>
        </div>
        <div className={classes.sectionRight}>
          <div className={classes.imglistitem}>
            <img src='/images/spec.png' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;