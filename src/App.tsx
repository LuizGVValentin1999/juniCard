import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import 'semantic-ui-css/semantic.min.css'


export function App() {
  return (
      <BrowserRouter>
            <Router />
      </BrowserRouter>
  )
}