import { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { api } from "../../api/axios";
import { useCookies } from "react-cookie";
import { formatNumber } from "../../auxiliar/functions";
import dayjs from "dayjs";
interface listProdutoProps {
  dadosProdutosComprados:{
    ID: string[];
    CODIGO: string[];
    NOME: string[];
    VALOR: string[];
    DATAHORA: Date;
  }[];
}

export function Lista() {
  const [cookies, setCookie] = useCookies();
  const [listProdutos, setListProdutos] = useState<listProdutoProps | null>(null);


  useEffect(() => {
    if(cookies.tokenJunicard)
      buscarListadeProdutos();
  }, [])
  
  async function buscarListadeProdutos() {
    try{
      let response = await api.get('getlistadecompra?'+Math.floor(Math.random() * 20),{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
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
        
        {listProdutos?.dadosProdutosComprados.map((produto, index) => (
          <Table.Row   key={`${produto.ID}`} >
            <Table.Cell>{`${produto.CODIGO} - ${produto.NOME}`}</Table.Cell>
            <Table.Cell>{ dayjs(produto?.DATAHORA).format('DD/MM/YYYY')}</Table.Cell>
            <Table.Cell>J$ {formatNumber(produto.VALOR)}</Table.Cell>
            <Table.Cell>Comprado</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
