/*!

 =========================================================
 * Material Kit React - v1.10.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const flex = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3rem',
  "@media (max-width: 992px)": {
    display: 'block',
  },
};

const sectionLeft = {
  width: '58%',
  "@media (max-width: 992px)": {
    width: '100%',
  },
};

const sectionRight = {
  width: '30%',
  "@media (max-width: 992px)": {
    width: '100%',
  },
};

const homeTitle = {
  fontStyle: 'italic !important',
  fontSize: '1.8em',
  fontWeight: 900,
  marginBottom: '20px',
  color: '#6dfc02',
  "@media (max-width: 992px)": {
    textAlign: 'center',
  }
};

const imglist = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  gap: '1rem'
}

const imglistitem = {
  width: '100%',
  '& img': {
    width: '100%',
    height: '100%'
  }
}

const divide = {
  marginBottom: '3rem',
  borderBottom: '1px solid #3b3b3b',
  borderTop: '1px solid rgba(0,0,0,.1)'
}

export {
  //variables
  flex,
  sectionLeft,
  sectionRight,
  homeTitle,
  imglist,
  imglistitem,
  divide
};
