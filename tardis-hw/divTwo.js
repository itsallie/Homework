import React, { Component } from 'react'
import DivThree from './divThree'

export default class DivTwo extends Component {
    render() {
        return (
            <div>
                <DivThree name={this.props.name} change={this.props.change} />
            </div>
        )
    }
}