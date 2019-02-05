import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static" style={styles.appBar}>
                <Toolbar style={styles.leftShift}>
                    <Typography variant="title" color="inherit" >
                        WebApp
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const styles = {
    appBar: {
        "background-color": "rgb(31,188,210)"
    },
    leftShift: {
        "padding-left": "45%"
    }
};

export default NavBar;
