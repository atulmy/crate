// Imports
import React from 'react'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { primary as primaryGradient } from '../../ui/common/gradients'
import { level1 } from '../../ui/common/shadows'

// App Imports
import home from '../../../setup/routes/home'
import user from '../../../setup/routes/user'
import Logo from './Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'

// Component
const Header = () => {

    return(
        <header style={ { backgroundImage: primaryGradient, boxShadow: level1, padding: '0 2em', height: '5em', position: 'fixed', left: 0, right: 0, top: 0 } }>
            <Grid alignCenter={ true } style={ { marginTop: '1.5em' } }>
                <GridCell>
                    {/* Logo */}
                    <Logo style={ { float: 'left' } } />

                    {/* Left menu */}
                    <Menu style={ { float: 'left', marginTop: '0.5em', marginLeft: '2em'  } }>
                        <MenuItem to={ home.men.path }>Men</MenuItem>

                        <MenuItem to={ home.women.path }>Women</MenuItem>

                        <MenuItem to={ home.howItWorks.path }>How It Works</MenuItem>
                    </Menu>
                </GridCell>

                {/* Right menu */}
                <GridCell style={ { textAlign: 'right' } }>
                    <Menu>
                        <MenuItem to={ user.login.path }>Login</MenuItem>

                        <MenuItem to={ user.signup.path }>Signup</MenuItem>
                    </Menu>
                </GridCell>
            </Grid>
        </header>
    )
}

export default Header