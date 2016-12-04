import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BeachBall from 'react_components/beach-ball'
import { getBallUrl, changeBallImage } from 'actions/index'

import 'styles/beach-party'

function mapStoreToProps(store) {
    return store.beachParty
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBallUrl, }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class BeachParty extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    // Keeping this here to keep from BeachBall needing to be connected to store.
    handleClick(index) {
        this.props.getBallUrl(index)
    }

    render() {
        const { balls, getBallUrl } = this.props

        return (
            <div className="beach-party-page">

                {balls.map((ball, index) => {
                    return <BeachBall
                        key={ index }
                        ball={ ball }
                        onClick={ this.handleClick.bind(null, index) }/>
                })}

            </div>
        )
    }
}