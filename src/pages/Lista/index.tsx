import { useState } from "react";
import { Table } from "semantic-ui-react";

export function Lista() {
  const [count, setCount] = useState(0);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Produto</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
          <Table.HeaderCell>Valor</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row warning>
          <Table.Cell>Bola de Futebol</Table.Cell>
          <Table.Cell>05/02/2023</Table.Cell>
          <Table.Cell>J$25,00</Table.Cell>
          <Table.Cell>Comprado</Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Boneca</Table.Cell>
          <Table.Cell>05/02/2023</Table.Cell>
          <Table.Cell>J$25,00</Table.Cell>
          <Table.Cell>Comprado</Table.Cell>
        </Table.Row>
        <Table.Row negative>
          <Table.Cell>Joguinho</Table.Cell>
          <Table.Cell>05/02/2023</Table.Cell>
          <Table.Cell>J$25,00</Table.Cell>
          <Table.Cell>Cancelado</Table.Cell>
        </Table.Row>

        <Table.Row positive>
          <Table.Cell>Boneca</Table.Cell>
          <Table.Cell>05/02/2023</Table.Cell>
          <Table.Cell>J$25,00</Table.Cell>
          <Table.Cell>Comprado</Table.Cell>
        </Table.Row>
        <Table.Row negative>
          <Table.Cell>Jogo da vida / banco imobiliario </Table.Cell>
          <Table.Cell>05/02/2023</Table.Cell>
          <Table.Cell>J$25,00</Table.Cell>
          <Table.Cell>Cancelado</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
