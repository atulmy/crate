// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI Imports
import { Grid, GridCell } from '../../src/client/components/ui/grid'

// Stories
storiesOf('Grid', module)
    .add('Grid and Grid Cell', () => (
        <Grid gutter={ true } alignTop={ true } flexCells={ true } style={ { background: 'red', height: 400 } }>
            <GridCell style={ { background: 'yellow' } }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.
            </GridCell>

            <GridCell style={ { background: 'orange' } }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.
            </GridCell>

            <GridCell style={ { background: 'lightblue' } }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit ultricies neque.
            </GridCell>
        </Grid>
    ))