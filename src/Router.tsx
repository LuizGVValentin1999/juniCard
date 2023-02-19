import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Saldo } from "./pages/Saldo";
import { Compra } from "./pages/Compra";
import { Lista } from "./pages/Lista";
import { QrCode } from "./pages/LeitorQrCode";
import { MeuQrcode } from "./pages/MeuQrcode";
import { Trasferir } from "./pages/Trasferir";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout  />}>
        <Route path="/" element={<Saldo />} />
        <Route path="/saldo" element={<Saldo />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/meuqrcode" element={<MeuQrcode />} />
        <Route path="/trasferir" element={<Trasferir />} />
      </Route>
    </Routes>
  );
}
