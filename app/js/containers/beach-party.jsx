import React from 'react'

import BeachBall from 'react_components/beach-ball'

import 'styles/beach-party'

export default class BeachParty extends React.Component {
    render() {
        return (
            <div className="beach-party-page">
                <BeachBall pos={[100,60]}/>
                <BeachBall size="x-large" pos={[250,100]}/>
                <BeachBall size="large" pos={[450,70]}/>
                <BeachBall pos={[600,30]}/>
                <BeachBall size="large" pos={[760,80]}/>
                <BeachBall size="small" pos={[900,50]}/>

                <BeachBall size="large" pos={[100,250]}/>
                <BeachBall size="small" pos={[250,350]}/>
                <BeachBall pos={[500,250]}/>
                <BeachBall size="x-large" pos={[640,220]}/>
                <BeachBall size="small" pos={[900,300]}/>

                <BeachBall size="x-large" pos={[30,400]}/>
                <BeachBall pos={[300,500]}/>
                <BeachBall size="small" pos={[430,400]}/>
                <BeachBall size="large" pos={[600,450]}/>
                <BeachBall size="small" pos={[800,450]}/>

            </div>
        )
    }
}