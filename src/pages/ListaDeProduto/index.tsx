import React, {  useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import QRCode from 'react-qr-code';
import { Button, Icon, Input, Modal, Table } from 'semantic-ui-react'
import { api } from "../../api/axios";
import { formatNumber } from "../../auxiliar/functions";
import html2canvas from "html2canvas";

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

interface listProdutoProps {
  dadosProdutos:{
    ID: string[];
    CODIGO: string[];
    NOME: string[];
    VALOR: string[];
  }[];
}

export function ListaDeProduto() {
  const [cookies, setCookie] = useCookies();
  const [idProduto, setIdProduto] = useState('');
  const [codigoProduto, setCodigoProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [nomeProdutoAux, setNomeProdutoAux] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [infoQr, setInfoQr] = useState('');
  const [listProdutos, setListProdutos] = useState<listProdutoProps | null>(null);

useEffect(() => {
  if(cookies.tokenJunicard)
    buscarListadeProdutos();
}, [])

useEffect(() => {
  if(codigoProduto){
    let valorQr = {CODIGO : codigoProduto}
    setInfoQr(JSON.stringify(valorQr));
  }
  else{
    setInfoQr('');

  }
 
}, [codigoProduto])

 async function buscarListadeProdutos() {
  try{
    let response = await api.get('getitens',{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
    if(response.data){
      setListProdutos(response.data);
    }
  }
  catch (error:any) {
    if(error.response.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
 }

 async function abriEdicao(idProduto:any) {

  try{
    let response = await api.get('getitem?Produto='+idProduto,{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
    if(response?.data){
      setIdProduto(response.data.dadosProduto.ID);
      setCodigoProduto(response.data.dadosProduto.CODIGO);
      setNomeProduto(response.data.dadosProduto.NOME);
      setNomeProdutoAux(response.data.dadosProduto.NOME);
      setValorProduto(response.data.dadosProduto.VALOR);
      dispatch({ type: 'open', size: 'mini' })
    }
  }
  catch (error:any) {
    if(error.response?.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
 }

 async function removerProuto(idProduto:any) {

  try{
    let response = await api.post('removeritem',{
      Produto:idProduto
    },{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});

    if(response?.data.status == '1'){
      alert(response.data.msg);
      buscarListadeProdutos();
    }
  }
  catch (error:any) {
    if(error.response?.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
 }

 
 async function formProuto() {
 
  

  try{
    let response = await api.post('cadastraritem',{
      Id:idProduto,
      Codigo:codigoProduto,
      Nome:nomeProduto,
      Valor:valorProduto
    },{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});

    if(response?.data.status == '1'){
      alert(response.data.msg);
      buscarListadeProdutos();
      dispatch({type: 'close'});
    }
  }
  catch (error:any) {
    if(error.response?.data.status === '-1'){
      setCookie('tokenJunicard', '');
    }
    alert(error.response.data.msg);
  }
 }

 const printRef = React.useRef();
 const handleDownloadImage = async () => {
  const element:any = printRef.current;
  const canvas = await html2canvas(element);

  const data = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = nomeProduto + 'QRCODE.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
};
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state
  return (
    <div>
      <Button onClick={() => {
         setIdProduto('');
         setCodigoProduto('');
         setNomeProduto('');
         setValorProduto('');
        dispatch({ type: 'open', size: 'mini' })
        }}>
        Adicionar um produto
      </Button>

      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Produto</Table.HeaderCell>
          <Table.HeaderCell>Valor</Table.HeaderCell>
          <Table.HeaderCell>Editar</Table.HeaderCell>
          <Table.HeaderCell>Excluir</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      {listProdutos?.dadosProdutos.map((produto, index) => (
        <Table.Row   key={`${produto.ID}`} >
          <Table.Cell>{`${produto.CODIGO} - ${produto.NOME}`}</Table.Cell>
          <Table.Cell>J$ {formatNumber(produto.VALOR)}</Table.Cell>
          <Table.Cell onClick={() => abriEdicao(produto.ID)}> <div className='center'><Icon circular name='edit' color="blue" /></div></Table.Cell>
          <Table.Cell onClick={() => removerProuto(produto.ID)}><div className='center'><Icon circular name='trash' color="red" /></div></Table.Cell>
        </Table.Row>
      ))}
        
      </Table.Body>
    </Table>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>{nomeProdutoAux?'Editando o produto: '+nomeProdutoAux:'Qual produto deseja Adicionar' }</Modal.Header>
        <Modal.Content>
            <Input
              fluid
              name="Codigo"
              placeholder="Código do Produto"
              value={codigoProduto}
              onChange={event => setCodigoProduto(event.target.value)}
            />
            <br/>
          <Input
              fluid
              name="produto"
              placeholder="Nome do Produto"
              value={nomeProduto}
              onChange={event => setNomeProduto(event.target.value)}
            />
            <br/>
            <Input
              fluid
              name="valorProduto"
              placeholder="Valor do produto"
              value={valorProduto}
              onChange={event => setValorProduto(event.target.value)}
            />
            <br/>
            <div className="centerComp" >
              {infoQr &&  
              <>
              <div className="centerComp"  ref={printRef}>
                <h3>{nomeProduto} por J${formatNumber(valorProduto)}</h3>
                <QRCode  
                  value={infoQr}
                />
              </div>
              <br/>
                <Button  onClick={handleDownloadImage}>
                  Baixar QR code
                </Button>
              </>
              }
              
            </div>
        </Modal.Content>
        <Modal.Actions>
          <Button negative  onClick={() => dispatch({ type: 'close' })}>
            Cancel
          </Button>
          <Button positive onClick={formProuto}>
            Salvar
          </Button>
        </Modal.Actions>
      </Modal>

    </div>
  );
}
