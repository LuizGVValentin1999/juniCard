import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "Login" };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="Login" href="/" active={activeItem === "Login"} />
          <Menu.Item
            name="Saldo"
            href="/saldo"
            active={activeItem === "Saldo"}
          />
          <Menu.Item
            name="Lista de compra"
            href="/lista"
            active={activeItem === "Lista"}
          />
          <Menu.Item
            name="Comprar item"
            href="/compra"
            active={activeItem === "Comprar"}
          />
        </Menu>
      </div>
    );
  }
}
