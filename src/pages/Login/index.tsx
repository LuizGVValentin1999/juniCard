import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export function Login() {
  return (
    <div className='center'>
    <Grid className="loginBox" textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="red" textAlign="center">
          <h1>Bem vindo a Juni Card</h1>
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Nome de usuario"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Senha passada pela professora"
              type="password"
            />

            <Button color="red" fluid size="large">
              Entrar
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    </div>
  );
}
