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
            dataTittle: [],
            dataRows: [],
            fetchData: []
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

            this.setState({
                fetchData : data,
                dataTittle: ["Id", "Title", "Body"]
            });
            
            openSnackbar({ message: 'Data fetch updated.' });
        });
    }

    thFunction = (dataTittles) => {

        this.dataTittles = dataTittles.map((dataTittle) => {
            return (
                <th key={dataTittle}>
                    {dataTittle}
                </th>
            );
        });
    }

    trFunction = (dataRows) => {
        this.tableRows = dataRows.map((dataRow, index) => {
            return (
                <tr key={index}>
                    <td>{dataRow[0]}</td>
                    <td>{dataRow[1]}</td>
                    <td>{dataRow[2]}</td>
                </tr>
            );
        });       
    }

    render() {

        // Redirect to login if not fill credentional
        const { action } = this.props.history;
        if (action === "POP") {
            return <Redirect to='/login' />;
        }

        const errorTableTextId = "errorTableText";
        const fetchData = this.state.fetchData;

        if (fetchData.length > 0) {
            const dataRows = [];
            
            for (var i = 0; i < fetchData.length; i++) {
                dataRows.push([fetchData[i].id, fetchData[i].title, fetchData[i].body]);
                this.trFunction(dataRows);
            }
            this.thFunction(this.state.dataTittle);
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
                            <tr>{this.dataTittles}</tr>
                            {this.tableRows}
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
