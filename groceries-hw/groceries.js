import React, { Component } from "react";
import App from "./App";

export default class GroceriesList extends Component {
    render() {
        return (
            <div>
                {this.props.listItem.map((listItem) =>
                    <div key={App}>
                        <ol>
                            <li>{listItem.item}</li>
                            <li>{listItem.quantity}</li>
                            <li>{listItem.units}</li>
                        </ol>)
                    </div>
                )
                }
            </div>
        );
    }
}
