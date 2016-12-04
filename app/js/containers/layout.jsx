import React from 'react'

import 'styles/main'

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        )
    }
}