import React from 'react';
import NavBar from '../Header/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Error, { openSnackbar } from '../Login/Error';
import './Table.css';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
const GetAPI = 'https://jsonplaceholder.typicode.com/posts';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Data Table',
            data: [],
            tableRows: [],
            dataTittle: [],
            dataRows: []
        };
    }

    logout() {
        window.location.reload();
    }
  
    componentDidMount() {

        fetch(GetAPI)
        .then(response => response.json())
        .then((data) => {
            this.setState({ data });
            openSnackbar({ message: 'Data fetch updated.' });
        });
    }
    
    okFunction = (dataRows) => {

        const tableRows = dataRows.map((dataRow) => {
            return (
                <tr><td key={dataRow}>
                    {dataRow}
                </td>
                </tr>
            );
        });

        this.setState({
            tableRows: tableRows
        });
    }

    render() {

        // Redirect to login if not fill credentional
        const { action } = this.props.history;
        if (action === "POP") {
            return <Redirect to='/login' />;
        }
        const errorTableTextId = "errorTableText";

        debugger;

        const fetchData = this.state.data;
        const dataTittle = this.setState({
            dataTittle: ["Id", "Title", "Data"]
        });
                
        const dataRows = [];
        if (fetchData.length > 0) {
            for (var i = 0; i < fetchData.length; i++) {
                dataRows.push([fetchData[i].id, fetchData[i].title, fetchData[i].body]);
            }
            this.setState({
                dataRows: this.okFunction(dataRows)
            });
        }

        return (
            <div>
                <div style={styles.MuiTheme}>

                    <MuiThemeProvider>
                        <div>
                            <NavBar >{this.state.title}</NavBar>
                            <Error id={errorTableTextId} />

                            <Button
                                color="primary"
                                style={styles.RaisedButton}
                                onClick={() => this.logout()}
                            >
                                <svg
                                    style={styles.logoutBtn}
                                    xmlns=" http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
                                </svg>
                            </Button>
                        </div>

                    </MuiThemeProvider>
                    
                    <div className="table-content">

                        <table>
                            <tr><th>{this.state.dataTittle} </th></tr>
                            <tr>{this.state.tableRows}</tr>                            
                        </table>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const styles = {

    RaisedButton: {
        float: "right",
        bottom: "50px"
    },

    MuiTheme: {
        width: '50%',
        left: '25%',
        position: 'absolute'
    },
    
    logoutBtn: {
        fill: "rgb(255,255,255)"
    }
};
export default Table;
