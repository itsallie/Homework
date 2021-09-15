import React from "react";

function Bedroom(props) {
    return (
        <div id={`bed-${props.bednum}`}>
            <h1>BedRoom {props.bednum}</h1>
        </div>
    )
}
export default Bedroom;