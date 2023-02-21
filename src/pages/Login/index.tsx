import React, { FormEvent, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { api } from "../../api/axios";
import { useCookies } from "react-cookie";

export function Login() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();
  
  async function login(event: FormEvent) {
    event.preventDefault();
  
    if(!usuario || !password) {
      return;
    }
    
    try{
      let response = await api.post('login', {
        Usuario: usuario,
        Senha: password
      });
      if(response.data.token){
        setCookie('tokenJunicard', response.data.token);
      }
    
      setUsuario('');
      setPassword('');
    }
    catch (error:any) {
      setCookie('tokenJunicard', '');
      alert(error.response.data.msg);
    }
   
  }

  return (
    <div className='center'>
    <Grid className="loginBox" textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header color="red" textAlign="center">
          <h1>Bem vindo a Juniedas</h1>
        </Header>
        <Form  onSubmit={login}  size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              name="user"
              iconPosition="left"
              placeholder="Nome de usuario"
              value={usuario}
              onChange={event => setUsuario(event.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Senha passada pela professora"
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
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
