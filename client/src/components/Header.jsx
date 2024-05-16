import React, { Component } from 'react'
import { MenuMenu, MenuItem, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <MenuMenu position='right'>
          {/* <MenuItem>
            <Input icon='search' placeholder='Search...' />
          </MenuItem> */}
          <MenuItem className="header-date">
          3rd Term 2024
          </MenuItem>
        </MenuMenu>
      </Menu>
    )
  }
}
