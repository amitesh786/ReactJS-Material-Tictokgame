import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NavBar from '../Header/NavBar';

class PageNotFound extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            title: "Page Not Found"
        };
    }

    render() {
        return (
            <div style={style.MuiTheme}>
                <MuiThemeProvider>

                    <div>
                        <NavBar >{this.state.title}</NavBar>
                    </div>

                    <div style={style.container}>
                        <h1 as="h3">404</h1>
                        <p>Uh oh! Are you sure you wanted to go here?</p>
                    </div>

                </MuiThemeProvider>
            </div>
        )
    }
} 

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
