import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
let openSnackbarFn;

export default class Error extends Component {

    state = {
        open: false,
        message: '',
    }

    componentDidMount() {
        openSnackbarFn = this.openSnackbar;
    }

    openSnackbar = ({ message }) => {
        this.setState({
            open: true,
            message,
        });
    }

    handleSnackbarClose = () => {
        this.setState({
            open: false,
            message: '',
        });
    }

    render() {

        const message = (
            <span
                id="snackbar-message-id"
                dangerouslySetInnerHTML={{ __html: this.state.message }}
            />
        );
        
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={message}
                autoHideDuration={5000}
                onClose={this.handleSnackbarClose}
                open={this.state.open}
            />
        );
    }
}

export function openSnackbar({ message }) {
    openSnackbarFn({ message });
}
