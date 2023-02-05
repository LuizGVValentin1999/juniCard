import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Saldo } from "./pages/Saldo";
import { Compra } from "./pages/Compra";
import { Lista } from "./pages/Lista";
import { QrCode } from "./pages/QrCode";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/Saldo" element={<Saldo />} />
        <Route path="/Compra" element={<Compra />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/QrCode" element={<QrCode />} />
      </Route>
    </Routes>
  );
}
