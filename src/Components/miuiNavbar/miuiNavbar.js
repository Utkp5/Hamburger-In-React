import { AppBar, Box, Grid, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import AppleIcon from '@mui/icons-material/Apple';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./miuiNavbar.css";


function Miuinavbar() {

    const [value,setvalue] = useState();

  return (
    //this is basically a miui inbuild fragment appbar
    //used typography just to show icon in webpage
    <AppBar>
      <Toolbar>
         <Grid container sx={{placeItems:"center"}}>
            <Grid item xs={2}> <Typography><AppleIcon /></Typography></Grid>
            <Grid item xs={6}>
              <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setvalue(val)}>
                <Tab label="products" />  
                <Tab label="Overview" />
                <Tab label="Pricing" />                 
                <Tab label="Booking" />
              </Tabs>
            </Grid>
            <Grid item xs={2} />
            <Box display='flex'>
            <Button sx={{marginLeft: 'auto'}} variant="contained">Login</Button>
            <Button sx={{marginLeft: 1}} variant="contained">Signup</Button>
            </Box>
         </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Miuinavbar;
