import { useEffect, useState } from "react";

import { Statistic } from "semantic-ui-react";
import { api } from "../../api/axios";
import { useCookies } from "react-cookie";
import { formatNumber } from "../../auxiliar/functions";
export function Saldo() {
  const [saldo, setSaldo] = useState('');
  const [cookies, setCookie] = useCookies();


  

  useEffect(() => {
    consultarSaldo();
  }, [])

   async function consultarSaldo() {
    try{
      let response = await api.get('meusdados',{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
      if(response.data.SALDO){
        setSaldo(response.data.SALDO);
      }
    }
    catch (error:any) {
      if(error.response.data.status === '0'){
        setCookie('tokenJunicard', '');
      }
      alert(error.response.data.msg);
    }
   }
  return (
    <>
      <Statistic color="green">
        <Statistic.Label>Seu Saldo no Juni Card é</Statistic.Label>
        <Statistic.Value>J${saldo?formatNumber(saldo):'caregando...'}</Statistic.Value>
      </Statistic>
    </>
  );
}

