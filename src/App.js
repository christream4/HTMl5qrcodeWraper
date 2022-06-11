
import { useState } from "react";
import HTML5Scanner from "./components/HTML5ScannerWraper";
import { FaCamera, FaWindowClose } from 'react-icons/fa';
const App = () => {
  const [scannedCodes, setScannedCodes] = useState("");
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  function onScanSuccess(decodedText, decodedResult) {
    setScannedCodes(decodedText);
  }

  function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
  }


  return (
    <>
      <span className="question">8. Scan the barcode</span>
      <input className="barcode-result" type="text" value={scannedCodes} placeholder="No reading" />
      <HTML5Scanner iconStart={<FaCamera />} iconStop={<FaWindowClose />} onScanFailure={onScanFailure} onScanSuccess={onScanSuccess} />
    </>
  );
};

export default App;
