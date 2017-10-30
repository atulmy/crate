// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H1, H4 } from '../ui/typography'
import Button from '../ui/button'
import { white } from '../ui/common/colors'
import { textLevel1 } from '../ui/common/shadows'

// App Imports
import user from '../../setup/routes/user'

// Component
const Home = () => (
    <Grid alignCenter={ true } style={ { backgroundImage: `url('/images/homepage.jpg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center top', height: 'calc(100vh - 5em)', textAlign: 'center', color: white } }>
        <Helmet>
            <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
        </Helmet>

        <GridCell>
            <H1 font="secondary" style={ { textShadow: textLevel1 } }>Crate</H1>

            <H4 style={ { textShadow: textLevel1, marginTop: '0.5em' } }>Your monthly subscription of trendy clothes and accessories</H4>

            <Link to={ user.signup.path }>
                <Button theme="secondary" style={ { marginTop: '1em' } }>Get Started</Button>
            </Link>
        </GridCell>
    </Grid>
)

export default Home