import React from 'react'
import { Route } from 'react-router-dom'
import { LandingPage, Home, Details, About, Create, NotFound } from '../pages/index'

function RouteApp() {
    return (
        <>
            <Route exact path={'/'} component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/about" component={About} />
            <Route path="/create" component={Create} />
            {/* <Route exact path={"*"} component={NotFound} /> */}
        </>
    )
}

export default RouteApp