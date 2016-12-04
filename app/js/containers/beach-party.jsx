import React from 'react'

import BeachBall from 'react_components/beach-ball'

import 'styles/beach-party'

export default class BeachParty extends React.Component {
    render() {
        return (
            <div className="beach-party-page">
                <BeachBall size="x-large" />
                <BeachBall size="large" />
                <BeachBall />
                <BeachBall size="small" />
            </div>
        )
    }
}