// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H2, H4 } from '../ui/typography'
import Button from '../ui/button'
import ImageTile from '../ui/image/Tile'
import { level1 } from '../ui/common/shadows'

// App Imports
import { user } from '../../setup/routes'

// Component
const Men = () => (
    <Grid alignCenter={ true } style={ { padding: '2em' } }>
        <Helmet>
            <title>Monthly supply of clothes and accessories for Men - Crate</title>
        </Helmet>

        <GridCell>
            <Grid alignCenter={ true }>
                <GridCell justifyCenter={ true }>
                    <ImageTile width={ 300 } height={ 530 } shadow={ level1 } image={ '/images/stock/men/1.jpg' } />
                </GridCell>

                <GridCell>
                    <Grid>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/men/2.jpg' } />
                        </GridCell>
                    </Grid>

                    <Grid>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/men/3.jpg' } style={ {  marginTop: '1.9em' } } />
                        </GridCell>
                    </Grid>
                </GridCell>
            </Grid>
        </GridCell>

        <GridCell style={ { textAlign: 'center' } }>
            <H2 font="secondary">Monthly crates for Men</H2>

            <H4 style={ { marginTop: '0.5em' } }>Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.</H4>

            <Link to={ user.signup.path }>
                <Button theme="secondary" style={ { marginTop: '1em' } }>Get Started</Button>
            </Link>
        </GridCell>
    </Grid>
)

export default Men