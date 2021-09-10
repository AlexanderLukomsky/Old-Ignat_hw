import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return (
        <div className={`hw5__menu ${openMenu ? 'open-menu' : ''}`}>
            <div onClick={() => { setOpenMenu(!openMenu) }} className={'hw5__burger'}>
                <div className={`hw5__burger-bar1`}></div>
                <div className={`hw5__burger-bar2 `}></div>
                <div className={`hw5__burger-bar3`}></div>
            </div>
            {openMenu &&
                <ul className={`hw5__navbar`} onClick={() => { setOpenMenu(!openMenu) }}>
                    <li>
                        <NavLink to='/hw-1'>
                            hw-1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/hw-2'>
                            hw-2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/hw-3'>
                            hw-3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/hw-4'>
                            hw-4
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            home page
                        </NavLink>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Header
