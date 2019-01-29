import React, { Component } from 'react';
// import Snackbar from 'material-ui/core/Snackbar';
import { SnackbarProvider } from 'material-ui-snackbar-provider';

let openSnackbarFn;

class Error extends Component {

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
            <SnackbarProvider
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                message={message}
                autoHideDuration={3000}
                onClose={this.handleSnackbarClose}
                open={this.state.open}
                SnackbarContentProps={{
                    'aria-describedby': 'snackbar-message-id',
                }}
            />
        );
    }
}

export function openSnackbar({ message }) {
    openSnackbarFn({ message });
}

export default Error;
