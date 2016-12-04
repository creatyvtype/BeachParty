import React, { PropTypes } from 'react'

import 'styles/beach-ball'

export default class BeachBall extends React.Component {
    render() {
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
        console.log(className)
        return (
            <div className={className}>
            </div>
        )
    }
}

BeachBall.propTypes = {
    size: React.PropTypes.string
}