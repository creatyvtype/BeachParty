import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import Layout from 'containers/layout'
import BeachParty from 'containers/beach-party'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRedirect to="beach-party" />
                    <Route path="beach-party" component={BeachParty} />
                </Route>
            </Router>
        )
    }
}
