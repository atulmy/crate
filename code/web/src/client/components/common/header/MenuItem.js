// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import { white } from '../../ui/common/colors'
import { secondary } from '../../ui/common/gradients'
import { level1 } from '../../ui/common/shadows'

// Component
const MenuItem = (props) => {
    const { children, to, active } = props

    const isActiveRoute = () => {
        return props.location.pathname === to || active
    }

    return (
        <Link to={ to } style={ Object.assign({ padding: '0.6em 1em', textTransform: 'uppercase', color: white }, isActiveRoute() ? { backgroundImage: secondary, borderRadius: '1.4em', boxShadow: level1 } : {}) } >{ children }</Link>
    )
}

// Component Properties
MenuItem.propTypes = {
    active: PropTypes.bool
}
MenuItem.defaultProps = {
    active: false
}

export default withRouter(MenuItem)