import React from 'react'
import { connect } from 'react-redux'

import BeachBall from 'react_components/beach-ball'

import 'styles/beach-party'

function mapStoreToProps(store) {
    return store.beachParty
}

@connect(mapStoreToProps)
export default class BeachParty extends React.Component {
    render() {

        const { balls } = this.props

        return (
            <div className="beach-party-page">

                {balls.map((ball, index) => {
                    return <BeachBall
                        key={index}
                        coordinates={ ball.coordinates }
                        size={ ball.size }/>
                })}

            </div>
        )
    }
}