import { FormEvent, useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react'
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { NumericFormat } from 'react-number-format';
import { api } from '../../api/axios';
import { useCookies } from 'react-cookie';

interface alunoProps {
  ID: string[];
  USUARIO: string[];
  ADMIN: string[];
  SALDO: string[];
}

export function Trasferir() {
  const [valor, setValor] = useState('10,00');
  const [cookies, setCookie] = useCookies();
  const [infoAluno, setInfoAluno] = useState<alunoProps | null>(null);



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

async function trasferir() {
  try{
    let response = await api.post('trasferir',{
      Valor: valor,
      id_junior: infoAluno?.ID
    },{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
    if(response.data.status === '1'){
      alert(response.data.msg);
    }
  }
  catch (error:any) {
    if(error.response.data.status === '0'){
      setCookie('tokenJunicard', false);
    }
    alert('ERRO');
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
          setInfoAluno(JSON.parse(result.text));
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
        <Modal.Header>Trasferir Juniedas para o Junior : { infoAluno?.USUARIO} </Modal.Header>
        <Modal.Content >
          <div className="centerComp">
          <p>Quantas Juniedas gostaria de trasferir ? </p>
          <NumericFormat className='money' value={valor} onChange={event => setValor(event.target.value)} allowLeadingZeros thousandSeparator="." decimalSeparator="," />
          </div>
        </Modal.Content>
        <Modal.Actions> 
          <Button negative onClick={() => dispatch({
            type: 'close'
          })}>
            Não
          </Button>
          <Button positive onClick={trasferir}>
            Sim
          </Button>
        </Modal.Actions>
       
      </Modal>
    </>
  ); 
}
