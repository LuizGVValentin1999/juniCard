import { useCookies } from "react-cookie";

export function Deslogar() {
  const [cookies, setCookie] = useCookies();
  
  setCookie('tokenJunicard', '');
  window.location.replace("/saldo");
  return (
    <>Delogando...</>
  );
}
