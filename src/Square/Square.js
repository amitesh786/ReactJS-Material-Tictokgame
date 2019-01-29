import React, { Component } from 'react';
import '../Square/Square.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default Square;