import React from 'react'
import { Link } from 'react-router-dom'

import { Drawer } from '@mui/material'

import { DrawerMenuObject } from '../objectconfig/menuObject'
import { menuInterface } from '../type/navigationType'

const DrawerNavigation = () => {
    return (
        <Drawer
            sx={{
            width: 285,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 285,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            <div className='drawer-logo-holder'>
                <Link to=''><img src='logo_motion_trade.png' alt="Motion Trade Logo" width="176" /></Link>
            </div>
            <ul className='vertical-list-default'>
                {
                    DrawerMenuObject.map( (m: menuInterface, i: number) =>
                        (
                            <li key={i}>
                                <Link to={m.url} className='menu-drawer-option'>{ m.title }</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </Drawer>
    )
}

export default DrawerNavigation