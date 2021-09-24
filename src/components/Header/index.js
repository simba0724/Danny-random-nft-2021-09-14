import React, {useState} from 'react';
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

import {UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import { injected } from "../Wallet/connectors"

import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    color: 'black',
    "@media (max-width: 992px)": {
      display: 'block',
    },
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#FFF',
    padding: '0.5rem 2rem',
  },
  toolbar: {
    "@media (min-width: 1200px)": {
      maxWidth: "1200px",
    },
    width: '100%',
    margin: '0 auto',
    padding: '0',
    justifyContent: 'space-between',
    "@media (max-width: 992px)": {
      display: 'flex',
      flexWrap: 'wrap'
    },
  },
  logo: {
    display: 'inline-block',
    marginRight: '1rem',
    fontSize: '1.25rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
    backgroundColor: 'black',
    '& img': {
      height: '75px',
      "@media (max-width: 992px)": {
        height: '45px',
      }
    }
  },
  list: {
    display: 'flex',
    "@media (max-width: 992px)": {
      flexDirection: 'column',
    },
  },
  listwrap: {
    flexBasis: '100%',
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'end',
    "@media (max-width: 992px)": {
      display: 'none',
    },
  },
  dropdown: {
    flexBasis: '100%',
    flexGrow: 1,
    alignItems: 'center',
    display: 'none',
    justifyContent: 'end',
    "@media (max-width: 992px)": {
      display: 'flex',
    },
  },
  listItem: {
    width: 'auto',
    fontStyle: 'italic',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '1.2px',
    margin: '10px',
    justifyContent: 'end',
    '& a': {
      color: '#6dfc02',
      textDecoration: 'none'
    }
  },
  socilalist: {
    display: 'flex',
    width: 'max-content',
    "@media (max-width: 992px)": {
      display: 'none',
    },
  },
  socilalistItem: {
    width: 'auto',
    padding: '20px',
    paddingRight: 0,
    '& a': {
      color: 'black',
      textDecoration: 'none'
    }
  },
  connect: {
    backgroundColor: '#bfc500'
  },
  connecttoogle: {
    marginRight: '20px',
    backgroundColor: '#bfc500',
    display: 'none',
    "@media (max-width: 992px)": {
      display: 'block',
    },
  },
  accounttoogle: {
    display: 'none',
    fontSize: '14px',
    fontStyle: 'italic',
    fontWeight: '500',
    marginRight: '20px',
    marginTop: '15px',
    "@media (max-width: 992px)": {
      display: 'block',
    },
  }
}));

function Header({account, active}) {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const {connector, chainId, activate, error} = useWeb3React();
  const [selectedNetworkName, setSelectedNetworkName] = useState();

  const handleToggle = () => {
    setShow(!show);
  };

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.logo}>
            <img src='/images/logo.webp' />
          </Link>
          <div style={{display: 'flex'}}>
            {active ?
              (
                <span style={{color: 'black'}} className={classes.accounttoogle}>
                  Connected
                </span>
              ):(
                <Button variant="contained" className={classes.connecttoogle}  onClick={connect}>
                  Connect Wallet
                </Button>
              )
            }
            <IconButton edge="start" className={classes.menuButton} onClick={handleToggle} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.listwrap}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Link to='/presale'>
                  PRESLAE
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link to='/'>
                  GALLERY
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link to='/'>
                  PROVENANCE
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                {active ?
                  (
                    <span style={{color: 'black'}}>
                      Connected
                    </span>
                  ):(
                    <Button variant="contained" className={classes.connect} onClick={connect}>
                      Connect Wallet
                    </Button>
                  )
                }
              </ListItem>
            </List>
            <List className={classes.socilalist}>
              <ListItem className={classes.socilalistItem}>
                <Link to='/'>
                  <FaYoutube />
                </Link>
              </ListItem>
              <ListItem className={classes.socilalistItem}>
                <Link to='/'>
                  <FaInstagram />
                </Link>
              </ListItem>
              <ListItem className={classes.socilalistItem}>
                <Link to='/'>
                  <FaDiscord />
                </Link>
              </ListItem>
              <ListItem className={classes.socilalistItem}>
                <Link to='/'>
                  <FaTwitter />
                </Link>
              </ListItem>
            </List>
          </div>
          {show && (
            <div className={classes.dropdown}>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to='/presale'>
                    PRESLAE
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to='/'>
                    GALLERY
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to='/'>
                    PROVENANCE
                  </Link>
                </ListItem>
              </List>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header