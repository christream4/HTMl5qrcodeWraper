
import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";

const App = () => {
  const [scannedCodes, setScannedCodes] = useState([]);

  const scannerRef = useRef(null);

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);
      setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
    }

    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  const handleClick = (e) => {
    //console.log(e.target.children[0].children[0].children[0].children[0])
    const targElem = e.target;
    console.log()
    //const actionBtn = targElem ? targElem.children[0].children[0].children[0].children[0] : undefined;
    // if (actionBtn) {
    //   console.log(actionBtn)
    //   actionBtn.click();
    // }
  }

  return (
    <div ref={scannerRef} onClick={handleClick} className="scannerStyle">

      <div id="reader" width="600px"></div>
      <ol>
        {scannedCodes.map((scannedCode, index) => (
          <li key={index}>{scannedCode.decodedText}</li>
        ))}
      </ol>

    </div>
  );
};

export default App;
