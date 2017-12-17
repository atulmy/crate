// Imports
import React from 'react'

// UI Imports
import {Grid, GridCell} from '../../../ui/grid'
import {black, grey} from "../../../ui/common/colors"

// App Imports
import admin from '../../../setup/routes/admin'
import Menu from '../../common/header/Menu'
import MenuItem from '../../common/header/MenuItem'

// Component
const AdminMenu = () => (
  <Grid style={{backgroundColor: grey}}>
    <GridCell style={{padding: '2em', textAlign: 'center'}}>
      <Menu>
        <MenuItem to={admin.dashboard.path} type="primary" style={{color: black}}>Dashboard</MenuItem>

        <MenuItem to={admin.productList.path} type="primary" style={{color: black}}>Products</MenuItem>

        <MenuItem to={admin.crateList.path} type="primary" style={{color: black}}>Crates</MenuItem>
      </Menu>
    </GridCell>
  </Grid>
)

export default AdminMenu