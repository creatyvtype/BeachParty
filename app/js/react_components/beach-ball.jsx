import React, { PropTypes } from 'react'
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
        const { coordinates, size, imageUrl } = this.props
        var className = "beach-ball"
        if ( size ) {
            switch (size) {
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
            <div className={ className } 
                style={{ 
                    left: coordinates.x, 
                    top:coordinates.y,
                }}>
                <div className="ball-image"
                    onClick={ this.handleClick }
                    style={{
                        backgroundImage: 'url(' + imageUrl + ')',
                    }}>
                </div>
                <Loader loaded={ !this.props.loading } />

            </div>
        )
    }
}

// Is there a way to add a Ball type to this?
BeachBall.propTypes = {
    size: React.PropTypes.string.isRequired,
    coordinates: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
    imageUrl: React.PropTypes.string,
    loading: React.PropTypes.bool.isRequired
}