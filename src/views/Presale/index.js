import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {useWeb3React} from '@web3-react/core';
import Web3 from 'web3';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Timedown from '../../components/Timedown'

import {divide} from '../../assets/jss/material.js'

import { contract_address } from '../../config';

import {useContract} from '../../hooks/useContract';

import * as MovieAPI from '../../jsonAPI';

import PresaleABI from '../../services/abis/PRESALE.json';

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
  presalebody: {
  	width: '80%',
    border: '2px solid #000',
    margin: '10rem auto',
  },
  presaletitle: {
    textAlign: 'center',
    fontSize: '40px',
    margin: '20px',
    color: 'black'
  },
  presaleItem: {
    width: '80%',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'space-between',
    '& input': {
      width: '100%',
      fontSize: '25px',
      padding: '15px',
      "@media (max-width: 992px)": {
        padding: '15px 0',
      }
    },
    "@media (max-width: 992px)": {
      flexDirection: 'column',
    }
  },
  button: {
    margin: '0 auto',
    fontSize: '25px',
    width: '250px',
    backgroundColor: '#bfc500',
    color: '#000',
    fontWeight: 600,
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    },
    "@media (max-width: 992px)": {
      fontSize: '15px',
      width: '100%',
      marginBottom: '10px'
    }
  }
}));

function Presale() {
	const classes = useStyles();
  const [balance, setBalance] = useState(50000000000000000);
  let presaleTime = new Date('2020-12-12T00:00:00');
  let currentTime = new Date();
  const {account, connector, chainId, activate, error, active} = useWeb3React();

  let flag = currentTime < presaleTime || account === undefined;

  const mediaContract = useContract(contract_address, PresaleABI);

  const showdata = () => {
    MovieAPI.getAll()
      .then((res) => {
        console.log(res)
      })
  }

  const buy = async () => {
    window.alert("We will send you NFT after the presale. We are saving your address to our database.");
    if(balance <= 0) {window.alert("Please Input Eth Balance."); return;}
    try {
      console.log(balance)
      const purchase = await mediaContract.purchaseFor({from: account, value: String(balance)})
      MovieAPI.addWallet(account, balance)
      .then((res) => {
        console.log(res)
        window.alert("You successfully registered to our presale");
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Header account={account} active={active} />
      <div className={classes.wrap}>
      	<div className={classes.presalebody}>
          <h1 className={classes.presaletitle}>Presale Starting in <Timedown startTime={presaleTime}/></h1>
          <div className={classes.presaleItem}>
            <input type='number' placeholder='Input Eth Balance.' value={balance} min='0' disabled />
          </div>
          <div className={classes.presaleItem}>
            <Button variant="contained" onClick={() => buy()}  className={classes.button} disabled={flag}>Buy</Button>
          </div>
        </div>
      </div>
    	<Footer />
    </div>
  );
}

export default Presale;