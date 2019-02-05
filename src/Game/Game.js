import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Button from 'material-ui/core/Button';

import RaisedButton from 'material-ui/RaisedButton';

import IconButton from 'material-ui/IconButton';


import AppBar from 'material-ui/AppBar';

import Board from '../Board/Board';
import '../Game/Game.css';
import { Redirect } from 'react-router-dom';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    jumpTo(step) {
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
        if (action == "POP") {
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

        return (
            <div style={style.MuiTheme}>
                <MuiThemeProvider>

                    <div>
                        <AppBar title="Tic Tok Game" >

                        <IconButton/> 

                            <RaisedButton
                                label="Logout"
                                primary={true}
                                style={style.RaisedButton}
                                onClick={() => this.logout()}
                            />

                        </AppBar>
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

                </MuiThemeProvider>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const style = {

    RaisedButton: {
        margin: 15,
        // left: '40%',
        float: "right",
        // position: 'relative'
    },

    MuiTheme: {
        width: '50%',
        left: '25%',
        position: 'absolute'
    }
};

export default Game;
