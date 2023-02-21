import { FormEvent, useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react'
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { NumericFormat } from 'react-number-format';
import { api } from '../../api/axios';
import { useCookies } from 'react-cookie';

interface produtoProps {
  CODIGO: string[];
}
interface dadosProdutoProps {
  ID: string[];
  CODIGO: string[];
  NOME: string[];
  VALOR: string[];
}

export function QrCode() {
  const [valor, setValor] = useState('10,00');
  const [cookies, setCookie] = useCookies();
  const [infoProduto, setInfoProduto] = useState<produtoProps | null>(null);
  const [dadosProduto, setDadosProduto] = useState<dadosProdutoProps | null>(null);



function exampleReducer(state: any, action: { type: any; size?: any; }) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...') 
  }
}
useEffect(() => {
  if(infoProduto)
    getItem();
}, [infoProduto])


async function getItem() {
  try{
    let response = await api.get('getitem?Codigo='+infoProduto?.CODIGO,{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
    if(response.data.status === '1'){
      setDadosProduto(response.data.dadosProduto);
    }
  }
  catch (error:any) {
    if(error.response.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
  
  return;
 }

 
async function comprar() {
  try{
    let response = await api.post('compraritem',{
      Produto:dadosProduto?.ID
    },{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
    
    if(response.data.status === '1'){
      alert(response.data.msg);
    }
  }
  catch (error:any) {
    if(error.response.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
  
  dispatch({type: 'close'});
  return;
 }



  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <BarcodeScannerComponent
      width={500}
      height={500}
      onUpdate={(err, result:any) => { 
        if (result){
          dispatch({ type: 'open', size: 'mini' });
          setInfoProduto(JSON.parse(result.text));
        }
      }}
      />


      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({
          type: 'close'
        })}
      >
        <Modal.Header>Deseja Compra o produto: { dadosProduto?.NOME} ? </Modal.Header>
        <Modal.Content >
          <div className="centerComp">
          <p>{ dadosProduto?.NOME}  custa { dadosProduto?.VALOR}  </p>
          </div>
        </Modal.Content>
        <Modal.Actions> 
          <Button negative onClick={() => dispatch({
            type: 'close'
          })}>
            Não
          </Button>
          <Button positive onClick={comprar}>
            Sim
          </Button>
        </Modal.Actions>
       
      </Modal>
    </>
  ); 
}
