import { useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export function Compra() {
  const [count, setCount] = useState(0)

  return (
    <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Bola de Futebol</Card.Header>
        <Card.Meta>Custa J$25,00</Card.Meta>
        <Card.Description>
          Esse item será pago com o seu saldo 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Comprar 
          </Button>
          <Button basic color='red'>
            Cancelar 
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
  )
}
