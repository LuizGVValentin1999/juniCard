import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'Login' }


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Login'
            href='/'
            active={activeItem === 'Login'}
          />
            <Menu.Item
            name='Saldo'
            href='/Saldo'
            active={activeItem === 'Saldo'}
          />
          <Menu.Item
            name='Lista de compra'
            href='/Lista'
            active={activeItem === 'Lista'}
          />
          <Menu.Item
            name='Comprar item'
            href='/Compra'
            active={activeItem === 'Comprar'}
          />
        </Menu>
      </div>
    )
  }
}
