import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Saldo } from "./pages/Saldo";
import { Lista } from "./pages/Lista";
import { QrCode } from "./pages/LeitorQrCode";
import { MeuQrcode } from "./pages/MeuQrcode";
import { Trasferir } from "./pages/Trasferir";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Deslogar } from "./pages/Deslogar";
import { ListaDeProduto } from "./pages/ListaDeProduto";

export function Router() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DefaultLayout  />}>
        <Route path="/" element={<Saldo />} />
        <Route path="/saldo" element={<Saldo />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/meuqrcode" element={<MeuQrcode />} />
        <Route path="/listadeproduto" element={<ListaDeProduto />} />
        <Route path="/trasferir" element={<Trasferir />} />
        <Route path="/deslogar" element={(<Deslogar />)} />
      </Route>
    </Routes>
  );
}
