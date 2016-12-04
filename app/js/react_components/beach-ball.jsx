import React, { PropTypes } from 'react'

import 'styles/beach-ball'

export default class BeachBall extends React.Component {
    render() {
        const { pos } = this.props
        var className = "beach-ball"
        if (this.props.size) {
            switch (this.props.size) {
                case "small":
                    className += " small"
                    break
                case "large":
                    className += " large"
                    break
                case "x-large":
                    className += " x-large"
                    break
                default:
                    break
            }
        }

        return (
            <div className={className} style={{left: pos[0], top:pos[1]}}>
            </div>
        )
    }
}

BeachBall.propTypes = {
    size: React.PropTypes.string,
    pos: React.PropTypes.array.isRequired
}