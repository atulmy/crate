// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H2, H4 } from '../ui/typography'
import Button from '../ui/button'
import ImageTile from '../ui/image/Tile'
import { Input } from '../ui/input'
import { level1 } from '../ui/common/shadows'

// App Imports

// Component
const Signup = () => (
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
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/2.jpg' } />
                        </GridCell>
                    </Grid>

                    <Grid>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/3.jpg' } style={ {  marginTop: '1.9em' } } />
                        </GridCell>
                    </Grid>
                </GridCell>
            </Grid>
        </GridCell>

        <GridCell style={ { textAlign: 'center' } }>
            <form>
                <div style={ { width: '25em', margin: '0 auto' } }>
                    <Input
                        type="text"
                        fullWidth={ true }
                        placeholder="Name"
                    />

                    <Input
                        type="email"
                        fullWidth={ true }
                        placeholder="Email"
                        style={ { marginTop: '1em' } }
                    />

                    <Input
                        type="password"
                        fullWidth={ true }
                        placeholder="Password"
                        style={ { marginTop: '1em' } }
                    />
                </div>

                <Button type="submit" theme="secondary" style={ { marginTop: '2em' } }>Signup</Button>
            </form>
        </GridCell>
    </Grid>
)

export default Signup