import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'


export function App() {
  return (
      <BrowserRouter>
          <Header />
          <div className='center'>
            <Router />
          </div>
      </BrowserRouter>
  )
}