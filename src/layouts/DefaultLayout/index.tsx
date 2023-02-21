import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { useEffect, useState } from 'react';
import { api } from '../../api/axios';
import { useCookies } from 'react-cookie';

interface userProps {
  ID: string[];
  USUARIO: string[];
  ADMIN: string;
  SALDO: string[];
}


export function DefaultLayout() {
  const [infoUser, setInfoUser] = useState<userProps | null>(null);
  const [cookies, setCookie] = useCookies();
  
  useEffect(() => {
    if(cookies.tokenJunicard){
      meuQRcode();  
    }
  }, [])

   async function meuQRcode() {
    try{
      let response = await api.get('meusdados',{ headers: { Authorization: `Bearer ${cookies.tokenJunicard}` }});
      if(response.data.USUARIO){
        setInfoUser(response.data);
      }
    }
    catch (error:any) {
    }
   }
   
  return (
    <div>
      { infoUser &&
        <Header admin={infoUser?.ADMIN} name={window.location.pathname} />
      }
        <div className='center'>
            <Outlet />
        </div>
    </div>
  )
}