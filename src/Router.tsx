import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Saldo } from './pages/Saldo'
import { Compra } from './pages/Compra'
import { Lista } from './pages/Lista'

export function Router() {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<Login />} />
        <Route path="/Saldo" element={<Saldo />} />
        <Route path="/Compra" element={<Compra />} />
        <Route path="/Lista" element={<Lista />} />
      </Route>
    </Routes>
  )
}