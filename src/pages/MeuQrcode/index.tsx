

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { api } from "../../api/axios";
import { useCookies } from "react-cookie";


interface alunoProps {
  ID: string[];
  USUARIO: string[];
  ADMIN: string[];
  SALDO: string[];
}

export function MeuQrcode() {
  const [infoAluno, setInfoAluno] = useState<alunoProps | null>(null);
  const [cookies, setCookie] = useCookies();

  
  useEffect(() => {
    meuQRcode();
  }, [])

   async function meuQRcode() {
    try{
      let response = await api.get('meusdados',{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
      if(response.data.USUARIO){
        setInfoAluno(response.data);
      }
    }
    catch (error:any) {
      if(error.response.data.status === '0'){
        setCookie('tokenJunicard', false);
      }
      alert(error.response.data.msg);
    }
   }

  return (
    <div className="centralizameuqrcode" >
      <h1>Qr Code para tranferencia de Juniedas de {infoAluno?.USUARIO}</h1>
    <QRCode
    value={JSON.stringify(infoAluno)}
    />
   </div>
  );
}
