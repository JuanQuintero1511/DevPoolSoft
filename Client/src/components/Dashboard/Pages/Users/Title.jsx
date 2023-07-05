import React from 'react';
import Typography from '@mui/material/Typography';
// import { GRIS, VERDE_OSCURO } from '../../helpers/colors';

const Title = (props) => {
  return (
    <Typography variant="h4" 
    // color={VERDE_OSCURO}
     gutterBottom>
      {props.children}
    </Typography>
  );
}

export default Title;

// <Typography component="h2" variant="h6" color="black" align="center" gutterBottom></Typography>
