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
    color: '#6dfc02',
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
    marginBottom: '10px'
  },
  text2: {
    fontSize: '14px',
    fontStyle: 'italic'
  }
}));

function Welcome() {
	const classes = useStyles();

  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.sectionLeft}>
          <h1 className={classes.homeTitle}>WELCOME TO THE <br/> BORED YOUNG GENTELMAN YACHT CLUB</h1>
          <p className={classes.text1}>
            Glorified by the whole crypto community as a bringer of positive market sentiment and fruitfulness for the community. Associated with the euphoric feeling of reaching financial freedom through disconnection from parasitical centralized mafia ponzi. has won the battle of crypto by providing liquidity for a full market recovery by doubling all positions in sizes and holding strong. Built enormous strength by surviving and catching organized giant market dumps by institutional gangsters and cowboys
          </p>
        </div>
        <div className={classes.sectionRight}>
          <div className={classes.imglist}>
            <div className={classes.imglistitem}>
              <img src='/images/nft/nft1.png' />
            </div>
            <div className={classes.imglistitem}>
              <img src='/images/nft/nft1.png' />
            </div>
            <div className={classes.imglistitem}>
              <img src='/images/nft/nft1.png' />
            </div>
            <div className={classes.imglistitem}>
              <img src='/images/nft/nft1.png' />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.middle}>
        <h3 className={classes.fairTitle}>FAIR DISTRIBUTION</h3>
        <h4 className={classes.ponzi}>(BONDING CURVES ARE A PONZI)</h4>
      </div>
      <div className={classes.flex}>
        <div className={classes.sectionLeft}>
          <p className={classes.text1}>The Sminem collection consists of 7777 abloom young gentlemen generated by a network of retail investors, known for taming the bear market and releasing the bulls.</p>
        </div>
        <div className={classes.sectionRight}>
          <p className={classes.text2}>Note: Thirty young gentlemen are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;