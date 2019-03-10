import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Redirect } from 'react-router-dom';
import './Draggable.css';

function PaperComponent(props) {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    );
}

export default class DraggableDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            redirect: false
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleConfirm = () => {
        this.setState({ open: false, redirect: true });
    };

    render() {
        const textMsg = "Would you like to confirm ?";

        // Redirect to login if not fill credentional
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/table' />;
        }

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open Data Table
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >

                <DialogTitle id="draggable-dialog-title">Confirm pop up</DialogTitle>

                <DialogContent className="dialog-box-container">
                    <DialogContentText>
                            {textMsg}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>

                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={this.handleConfirm} color="primary">
                        Ok
                    </Button>
                </DialogActions>

                </Dialog>
            </div>
        );
    }
}
