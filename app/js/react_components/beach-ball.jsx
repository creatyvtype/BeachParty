import React from 'react'
import Loader from 'react-loader'

import 'styles/beach-ball'

export default class BeachBall extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.onClick()
    }
    render() {
        const { ball } = this.props
        var className = "beach-ball"
        switch (ball.size) {
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

        return (
            <div className={ className } 
                style={{ 
                    left: ball.coordinates.x, 
                    top: ball.coordinates.y,
                }}>
                <div className="ball-image"
                    onClick={ this.handleClick }
                    style={{
                        backgroundImage: 'url(' + ball.imageUrl + ')',
                    }}>
                </div>
                <Loader loaded={ ball.requests == 0 } />

            </div>
        )
    }
}