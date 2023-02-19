import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import 'semantic-ui-css/semantic.min.css'
import { useCookies } from 'react-cookie';
import { Login } from './pages/Login';


export function App() {
  const [cookies, setCookie] = useCookies();
  return (
      <BrowserRouter>
      {cookies.tokenJunicard ? <Router /> : <Login/> }
      </BrowserRouter>
  )
}