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
  imglistitem: {
    width: '90%',
    margin: '0 auto',
    position: 'relative',
  },
  image1: {
    maxWidth: '100%',
    opacity: '0%'
  },
  image2: {
    width: '100%',
    height: '100%'
  },
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
    marginBottom: '2rem'
  },
  text1: {
    fontSize: '20px',
    marginBottom: '10px',
    width: '70%',
    "@media (max-width: 992px)": {
      width: '100%',
    },
  },
  roadmap: {
    display: 'flex',
    marginBottom: '1rem'
  },
  percent: {
    color: '#bfc500',
    width: '100px',
    fontSize: '18px',
    textAlign: 'center'
  },
  content: {
    fontSize: '18px',
    width: '100%',
    color: 'black'
  }
}));

function Roadmap() {
	const classes = useStyles();

  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.sectionLeft}>
          <div className={classes.roadmap}>
            <div className={classes.content}>
              The old system is based on market control and greed. Sminem will not allow this by releasing the bulls. Sminem is an open-community in contrast to a secret society optimistic to save the crypto markets from any bearish sentiment. The only way to stop elite financial mafia from garnishing the wages of underpaid employers is to escape the old system. sminem wants to save the markets from depression and bring optimism and euphoria for all investors Sminem uses cryptocurrency to embolden his own strength. While extremely powerful when exposed to the full flux of a decentralized system, this can be seen during the beginning of the Bogdanoff Twins arc, where he accumulated most of his crypto-powers during the activation of CRAB-17
            </div>
          </div>
        </div>
        <div className={classes.sectionRight}>
          <div className={classes.imglistitem}>
            <img src='/images/roadmap.png' className={classes.image2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;