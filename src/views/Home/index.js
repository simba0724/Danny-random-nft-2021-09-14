import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {useWeb3React} from '@web3-react/core';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Welcome from './Welcome'
import BuySection from './BuySection'
import Specs from './Specs'
import Roadmap from './Roadmap'
import Team from './Team'

import {divide} from '../../assets/jss/material.js'

const useStyles = makeStyles((theme) => ({
	divide,
  wrap: {
    width: "80%",
  	"@media (min-width: 1200px)": {
      maxWidth: "1200px",
    },
    margin: '0 auto',
    padding: '0',
    justifyContent: 'space-between'
  },
  slideimg: {
  	width: '100%',
  	marginBottom: '3rem',
    border: '1px solid black'
  }
}));

function Home() {
	const classes = useStyles();
  const {account, connector, chainId, activate, error, active} = useWeb3React();

  return (
    <div>
      <Header account={account} active={active} />
      <div className={classes.wrap}>
      	<img className={classes.slideimg} src='/images/background.jpeg' />
      	<Welcome />
      	<BuySection />
      	<div className={classes.divide}></div>
      	<Specs />
      	<div className={classes.divide}></div>
      	<Roadmap />
      	<div className={classes.divide}></div>
      	<Team />
      </div>
    	<Footer />
    </div>
  );
}

export default Home;