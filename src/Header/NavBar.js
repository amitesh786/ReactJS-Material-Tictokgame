import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Login WebApp'
        };
    }

    componentDidMount() {
        if (this.props.children) {
            this.setState({
                title: this.props.children
            });
        }
    }
    
    render() {

        const { title } = this.state;
        return (
            <div>
                <AppBar position="static" style={styles.appBar}>
                    <Toolbar style={styles.leftShift}>
                        <Typography variant="title" color="inherit" >
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )    
    }
} 

const styles = {
    appBar: {
        "background-color": "rgb(31,188,210)"
    },
    leftShift: {
        "padding-left": "38%"
    }
};

export default NavBar;
