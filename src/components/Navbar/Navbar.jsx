import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-iu/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="commerce.js" height="25px" className={classes.image} />
                        E-commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                </Toolbar> 
            </AppBar>   
        </>
    )
}

export default Navbar
