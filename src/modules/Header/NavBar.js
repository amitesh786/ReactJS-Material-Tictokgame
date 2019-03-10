import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Login WebApp',
            seconds: 0
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);

        if (this.props.children) {
            this.setState({
                title: this.props.children
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { title } = this.state;

        return (
            <div>
                <AppBar position="static" style={styles.appBar}>
                    <Toolbar style={styles.leftShift}>
                        <Typography variant="title" color="inherit" >
                            {title} - {this.state.seconds}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
} 

const styles = {
    appBar: {
        "backgroundColor": "rgb(31,188,210)"
    },
    leftShift: {
        "paddingLeft": "38%"
    }
};
