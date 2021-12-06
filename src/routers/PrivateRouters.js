import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouters = ({
    isAutenticated,
    component :Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname);
    localStorage.setItem('search', rest.location.search);
    

    return (
        <Route {...rest}
        component={(props) =>(
            (isAutenticated) ? (<Component { ... props} />) : (<Redirect to="/auth/login" />)
        )} />
    )
}

PrivateRouters.propTypes ={
    isAutenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
export default PrivateRouters
