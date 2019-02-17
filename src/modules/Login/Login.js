import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Error, { openSnackbar } from './Error';
import NavBar from '../Header/NavBar';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect: false,
            title: 'Login WebApp'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.handleClick(nextProps);
    }

    handleClick(event) {
        var self = this;

        //  Validation for username 
        if (self.state.username === "") {
            openSnackbar({ message: 'Enter username first.' });
            return;
        }

        //  Validation for password 
        if (self.state.password === "") {
            openSnackbar({ message: 'Enter password first.' });
            return;
        }

        //  Validation for username & password
        if ((self.state.username === 'amitesh23' && self.state.password === 'password')) {
            openSnackbar({ message: 'Successfully...!!!' });
            self.setState({ redirect: true });
            return;

        } else {
            openSnackbar({ message: 'Incorrect username and password.' });
            self.setState({ redirect: false });
            return;
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/game' />;
        }

        // Div's Id dom
        const txtLoginId = "txtLoginId";
        const txtPasswordId = "txtPasswordId";

        const errorTextId = "errorTextId";
        const submitBtnId = "submitBtnId";

        return (
            
            <div style={styles.MuiTheme}>
                <MuiThemeProvider >
                    <div>
                        <NavBar >{this.state.title}</NavBar>
                        <Error id={errorTextId} />

                        <TextField style={styles.TextField}
                            id={txtLoginId}
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />

                        <TextField style={styles.TextField}
                            type="password"
                            id={txtPasswordId}
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />

                        <RaisedButton 
                            id={submitBtnId}
                            label="Submit" 
                            primary={true} 
                            style={styles.RaisedButton}
                            onClick={(event) => this.handleClick(event)}
                        />

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const styles = {
    
    RaisedButton : {
        margin: 15,
        left: '40%',
        position: 'relative'
    },

    MuiTheme: {
        width: '50%',
        left: '25%',
        position: 'absolute'
    },

    TextField: {
        width: '50%',
        left: '25%'
    },

    menuIcon: {
        display: 'none'
    }

};
export default Login;
