import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PublicRouter = ({
    isAutenticated,
    component :Component,
    ...rest
}) => {
    return (
        <Route {...rest}
        component={(props) =>(
            (!isAutenticated) ? (<Component { ... props} />) : (<Redirect to="/"/>)
        )} />
    )
}
PublicRouter.propTypes ={
    isAutenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRouter
