import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Saldo } from "./pages/Saldo";
import { Compra } from "./pages/Compra";
import { Lista } from "./pages/Lista";
import { QrCode } from "./pages/QrCode";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Saldo />} />
        <Route path="/saldo" element={<Saldo />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Route>
    </Routes>
  );
}
