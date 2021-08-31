import React from 'react'

export function Review() {
    return (
        <div id="box1">
            <h2>Reviews</h2>
            <p>1,281</p>
        </div>
    );
}

export function Rating() {
    return (
        <div id="box2">
            <h2>Average Rating</h2>
            <p>4.6</p>
            <img id="rate" src="https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png" />
        </div>
    );
}

export function Analysis(props) {
    return (
        <div id="box3">
            <h2>Sentiment Analysis</h2>
            <p>{props.num1}</p>
            <p>{props.num2}</p>
            <p>321</p>
        </div>
    );
}