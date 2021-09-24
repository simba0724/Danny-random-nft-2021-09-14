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
    '& span': {
      color: '#bfc500',
    }
  },
  text2: {
    fontSize: '14px',
    fontStyle: 'italic'
  },
  contract: {
    marginBottom: '3rem',
    color: 'black',
    '& a': {
      fontWeight: 500,
      fontSize: '16px',
      textDecoration: 'visible',
      '&:hover': {
        color: 'black'
      },
      "@media (max-width: 992px)": {
        fontSize: '12px'
      }
    },
    "@media (max-width: 992px)": {
      marginBottom: '6rem',
    },
  }
}));

function Team() {
	const classes = useStyles();

  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.sectionLeft}>
          <h1 className={classes.homeTitle}>Do secret societies control the market?</h1>
          <p className={classes.text1}>Igor and Grichka are ancient organisms originally discovered in a secret alien lab beneath France, trapped in stasis. According to the akashic records, they were devised as a method of controlling the stock market.</p>
        </div>
        <div className={classes.sectionRight}>
          <div className={classes.imglistitem}>
            <img src='/images/team.jpeg' />
          </div>
        </div>
      </div>
      <h3 className={classes.contract} align='center'>VERIFIED SMART CONTRACT ADDRESS: <br/> <Link to='/'>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</Link></h3>
    </div>
  );
}

export default Team;