import React from 'react'

import BeachBall from 'react_components/beach-ball'

import 'styles/beach-party'

export default class BeachParty extends React.Component {
    render() {
        return (
            <div className="beach-party-page">
                <BeachBall size="x-large" pos={[100,100]}/>
                <BeachBall size="large" pos={[200,200]}/>
                <BeachBall pos={[0,300]}/>
                <BeachBall size="small" pos={[300,400]}/>
            </div>
        )
    }
}