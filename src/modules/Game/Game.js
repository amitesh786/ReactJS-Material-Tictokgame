import React from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import NavBar from '../Header/NavBar';
import Board from '../Board/Board';
import '../Game/Game.css';
import calculateWinner from '../CalculateWinner/CalculateWinner';
import Error, { openSnackbar } from '../Login/Error';
import DraggableDialog from '../Dialog/DraggableDialog';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            title: 'Tic Tok WebApp'
        };
    }

    jumpTo(step) {

        // if step are zero then start the game again
        if (step === 0) {
            openSnackbar({ message: 'Game restart.' });
        }
        
        // Set state parameters for step number and next
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    logout() {
        window.location.reload();
    }

    render() {
        
        // Redirect to login if not fill credentional
        const { action } = this.props.history;
        if (action === "POP") {
            return <Redirect to='/login' />;
        }

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
        const errorGameTextId = "errorGameText";

        return (
            <div className="game-page">

                <div style={styles.MuiTheme}>

                    <MuiThemeProvider>
                        <div>
                            <NavBar >{this.state.title}</NavBar>
                            <Error id={errorGameTextId} />

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
                </div>

                <div className="game">

                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>

                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>

                <div className="get-data-api" >
                    <DraggableDialog />
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

export default Game;
