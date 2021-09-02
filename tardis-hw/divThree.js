import React, { Component } from 'react'

export default class DivThree extends Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false
        }
    }

    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),
                    caps: false,
                }
            }
            )
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true,
                }
            })
        }
    }

    render() {
        return (
            <section>
                <div>
                    <h3 onClick={() => this.props.change(this.props.name)}>{this.props.name}</h3>
                </div>
                <div>
                    <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
                </div>
            </section>

        )
    }
}