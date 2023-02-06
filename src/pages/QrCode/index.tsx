import { useEffect } from 'react';
import { useHtml5QrCodeScanner } from 'react-html5-qrcode-reader';

export function QrCode() {

  const html5QrCodeScannerFile = process.env.PUBLIC_URL + '/html5-qrcode.min.js'; // <-- this file is in /public.
 
  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(
    html5QrCodeScannerFile
  );
  useEffect(() => {
    if (Html5QrcodeScanner) {
      // Creates anew instance of `HtmlQrcodeScanner` and renders the block.
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
      html5QrcodeScanner.render(
        (data: any) => console.log('success ->', data), 
        (err: any) => console.log('err ->', err)
      );
    }
  }, [Html5QrcodeScanner]);
  return (
    <>
       <div id='reader'></div>
    </>
  );
}
