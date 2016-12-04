import React, { PropTypes } from 'react'

import 'styles/beach-ball'

export default class BeachBall extends React.Component {
    render() {
        const { coordinates } = this.props
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
            <div className={className} style={{left: coordinates.x, top:coordinates.y}}>
            </div>
        )
    }
}

BeachBall.propTypes = {
    size: React.PropTypes.string,
    coordinates: React.PropTypes.object.isRequired
}