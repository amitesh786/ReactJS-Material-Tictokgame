import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';

const PageNotFound = () => (

    <div style={style.MuiTheme}>
        <MuiThemeProvider>

            <div>
                <AppBar
                    title="Page Not Found"
                />
            </div>

            <div style={style.container}>
                <h1 as="h1">404</h1>
                <p>Uh oh! Are you sure you wanted to go here?</p>
            </div>
            
        </MuiThemeProvider>
    </div>
);

const style = {

    MuiTheme: {
        width: '50%',
        left: '25%',
        position: 'absolute'
    },

    container: {
        'margin-top': '200px',
        'text-align': 'center'
    }

};

export default PageNotFound;
