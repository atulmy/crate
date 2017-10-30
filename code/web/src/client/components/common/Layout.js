// Imports
import React from 'react'

// App Imports
import Header from './header/Header'

const Layout = (props) => (
    <div>
        <Header />

        <section style={ { marginTop: '5em' } }>
            { props.children }
        </section>
    </div>
)

export default Layout