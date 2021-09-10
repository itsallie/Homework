import React from "react";
import './App.css'

function Score(props) {
    return (
        <div>
            <p className="scores"><span>Date:</span> {props.score.date}</p>
            <p className="scores"><span>Score:</span> {props.score.score} </p>
        </div>
    )
}

export default Score;