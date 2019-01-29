import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        redirect: false
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var self = this;

        if ((self.state.username === 'amitesh23' && self.state.password === 'password')) {
            this.setState({ redirect: true });
        } else {
            this.setState({redirect: false});
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/game' />;
        }

        return (
            <div style={style.MuiTheme}>
                <MuiThemeProvider >
                    <div>
                        <AppBar
                            title="Login WebApp"
                        />
                        <TextField style={style.TextField}
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />

                        <TextField style={style.TextField}
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />

                        <RaisedButton label="Submit" primary={true} style={style.RaisedButton} onClick={(event) => this.handleClick(event)}></RaisedButton>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    RaisedButton : {
        margin: 15,
        left: '40%',
        position: 'relative'
    },

    MuiTheme: {
        width: '50%',
        left: '25%',
        position: 'relative'
    },

    TextField: {
        width: '50%',
        left: '25%'
    }
};



export default Login;
