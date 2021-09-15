import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";
import './App.css'

function FloorPlan() {
    return (
        <div id="floorplan">
            <BedRoom bednum="1" />
            <Kitchen />
            <Bath size="Full" />
            <BedRoom bednum="2" />
            <LivingRoom />
            <Bath size="Half" />
            <BedRoom bednum="3" />
        </div>
    )
}

export default FloorPlan;