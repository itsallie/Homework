import React, { Component } from 'react'
import DivTwo from './divTwo'

export default class DivOne extends Component {
    render() {
        return (
            <div>
                <DivTwo name={this.props.name} change={this.props.change} />
            </div>
        )
    }
}