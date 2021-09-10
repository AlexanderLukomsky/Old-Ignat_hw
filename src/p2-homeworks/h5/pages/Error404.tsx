import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
    return (
        <div className={'hw5__error-page'}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <NavLink to='/'>Back to home page</NavLink>
        </div>
    )
}

export default Error404
