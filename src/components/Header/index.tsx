import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

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
        <Menu size='mini'icon='labeled'>
          <Menu.Item
            name="Saldo"
            href="/saldo"
            active={activeItem === "/saldo"}
          >
            <Icon name='dollar sign' />
            Saldo
        </Menu.Item>
         
         
          {adminUser !== '1' && 
            <>
             <Menu.Item
                name="QrCode"
                href="/meuqrcode"
                active={activeItem === "/meuqrcode"}
                >
                <Icon name='qrcode' />
                QrCode
              </Menu.Item>
              <Menu.Item
                name="Comprar"
                href="/qrcode"
                active={activeItem === "/qrcode"}
                >
                <Icon name='camera retro' />
                Comprar
              </Menu.Item>
              <Menu.Item
                name="Compras"
                href="/lista"
                active={activeItem === "/lista"}
                >
                <Icon name='shop' />
                Compras
              </Menu.Item>
            </>
           
          }
          {adminUser === '1' && 
            <>
              <Menu.Item
                name="Lista de Produtos"
                href="/listadeproduto"
                active={activeItem === "/listadeproduto"}
                >
                <Icon name='align justify' />
                Lista de Produtos
              </Menu.Item>
              <Menu.Item
                name="Trasferir"
                href="/trasferir"
                active={activeItem === "/trasferir"}
                >
                <Icon name='camera' />
                Trasferir
              </Menu.Item>
            </>
           
          }
          
          <Menu.Menu position='right'>
            <Menu.Item
              name='Sair'
              href="/deslogar"
              active={activeItem === 'Sair'}
              >
              <Icon name='log out' />
              Sair
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
