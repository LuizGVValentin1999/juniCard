import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

interface HeaderProps {
  name: string;
  admin?: string;
}
export default class Header extends Component<HeaderProps> {
  state = { activeItem: this.props.name, adminUser:  this.props.admin };

  render() {
    const { activeItem, adminUser } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Saldo"
            href="/saldo"
            active={activeItem === "/saldo"}
          />
          {/* <Menu.Item
            name="Lista de compra"
            href="/lista"
            active={activeItem === "/lista"}
          /> */}
          {/* <Menu.Item
            name="Comprar item"
            href="/qrcode"
            active={activeItem === "/qrcode"}
          /> */}
          <Menu.Item
            name="Meu QrCode"
            href="/meuqrcode"
            active={activeItem === "/meuqrcode"}
          />
          {adminUser === '1' && 
            <Menu.Item
            name="Trasferir"
            href="/trasferir"
            active={activeItem === "/trasferir"}
          />
          }
          
          <Menu.Menu position='right'>
            <Menu.Item
              name='Sair'
              active={activeItem === 'Sair'}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
