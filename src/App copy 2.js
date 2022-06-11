import React, { useState, useEffect } from "react";
//import { Html5QrcodeScanner } from "html5-qrcode"
import { useHtml5QrCodeScanner, useAvailableDevices } from 'react-html5-qrcode-reader';
const html5QrCodeScannerFile = '/html5-qrcode.min.js';

function App() {
  const [barcodeReadings, setBarcodeReadings] = useState("No Reading");
  const [barcodeError, setBarcodeError] = useState("")


  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(
    html5QrCodeScannerFile
  );
  const { devices, error } = useAvailableDevices(
    html5QrCodeScannerFile
  );

  const handleSuccess = (data) => {
    setBarcodeReadings(data)
  }

  const handleError = (data) => {
    setBarcodeError(data)
  }
  useEffect(() => {
    if (Html5QrcodeScanner) {
      // Creates anew instance of `HtmlQrcodeScanner` and renders the block.
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false);
      html5QrcodeScanner.render(
        handleSuccess,
        (err) => console.log('err ->', err)
      );
    }
  }, [Html5QrcodeScanner]);


  return (
    <>
      <div id='reader'></div>
      <div>Barcode Readings: {barcodeReadings}</div>
      <div>{barcodeError}</div>
    </>
  );
}
export default App;
