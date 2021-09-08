import React, { Component } from "react";
import GroceriesList from './groceries';
import './App.css'

export default class App extends Component {
    state = {
        item: '',
        quantity: 0,
        units: '',
        groceries: [
            {
                item: 'Apples',
                units: 'lb',
                quantity: 3,
                isPurchased: false
            },
            {
                item: 'Bananas',
                units: 'lb',
                quantity: 2,
                isPurchased: false
            }, {
                item: 'Mangos',
                units: 'lb',
                quantity: 6,
                isPurchased: false
            }
        ]
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ isPurchased: true })
        let newItem = {
            item: this.state.item,
            quantity: this.state.quantity,
            unit: this.state.units,
            isPurchased: true
        }
        this.setState({
            groceries: this.state.groceries.concat(newItem),
            item: '',
            quantity: 0,
            unit: ''
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Groceries List</h1>
                <form id="addItem" onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Product:</label>
                    <input
                        id="item"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.item}
                        required />
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        id="quantity"
                        type="number"
                        value=""
                        onChange={this.handleChange}
                        value={this.state.quantity}
                        required />
                    <label htmlFor="unit">Unit:</label>
                    <input
                        id="unit"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.units}
                    />

                    <button id="addItemToList" type="submit">ADD</button>
                </form>
                <GroceriesList list={this.props.listItem} />
            </div>
        )
    }
}
