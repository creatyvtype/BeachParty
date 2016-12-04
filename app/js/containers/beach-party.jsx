import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as API from 'api/index'

import BeachBall from 'react_components/beach-ball'
import { getBallUrl, changeBallImage } from 'actions/index'

import 'styles/beach-party'

function mapStoreToProps(store) {
    return store.beachParty
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBallUrl, changeBallImage }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class BeachParty extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {
        API.getBall()
        .then((response) => {
            this.props.changeBallImage(index, response.data.ball_url)
        })
    }

    render() {
        const { balls, getBallUrl } = this.props

        return (
            <div className="beach-party-page">

                {balls.map((ball, index) => {
                    return <BeachBall
                        key={index}
                        coordinates={ ball.coordinates }
                        size={ ball.size }
                        imageUrl={ ball.imageUrl }
                        onClick={ this.handleClick.bind(null, index) }/>
                })}

            </div>
        )
    }
}