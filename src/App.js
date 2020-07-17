import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Metronome from '@kevinorriss/metronome'

const App = () => {
    return (
        <Router>
            <ul>
                <li><Link to="/">Metronome</Link></li>
                <li><Link to="/other">Other</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Metronome} />
                <Route exact path="/other">
                    <p>Other</p>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
