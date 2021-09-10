import React from "react"
import Score from "./Scores";
import './App.css'

function Student(props) {
    return (
        <div id="container">
            <hr />
            <h2>{props.student.name}</h2>
            <p>{props.student.bio}</p>
            {props.student.scores.map((scores, index) => <Score score={scores} key={index} />)}
        </div>
    )
}

export default Student;