import React from 'react'
import { Link } from 'react-router-dom'

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'

import { MenuObject } from '../objectconfig/drawerMenuObject'

const drawerWidth = 240

interface menuInterface {
    title: String,
    icon: String,
    url: any
}

const DrawerNavigation = () => {
    return (
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            <List>
                {
                    MenuObject.map( (m: menuInterface, i: number) =>
                        (
                            <ListItem key={i} disablePadding>
                                <Link to={m.url} className='menu-drawer-option'>
                                    <ListItemButton>
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary={m.title} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )
                    )
                }
            </List>
        </Drawer>
    )
}

export default DrawerNavigation