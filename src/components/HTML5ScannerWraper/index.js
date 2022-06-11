
import React, { useEffect, useState, } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./index.css";

const HTML5ScannerWraper = (props) => {
  const [startCam, setStartCam] = useState(false);
  const [scannerRef, setScanerRef] = useState(null);

  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrcodeScanner.render(props.onScanSuccess, props.onScanFailure);
    setScanerRef(html5QrcodeScanner);
  }, []);


  const handleStart = (e) => {
    const targElem = e.currentTarget;
    const actionBtn = targElem ? targElem.parentElement.children[1].children[2].children[0].children[0].children[0].children[0].children[0] : undefined;
    setStartCam(true);
    if (actionBtn) {
      console.log(actionBtn)
      actionBtn.click();
    }
  }

  const handleStop = (e) => {
    scannerRef.clear();
    setStartCam(false);
  }

  return (
    <>
      <div className={`scannerStyle ${startCam ? "layout-col" : ""}`} >
        <span onClick={handleStart} className={` ${startCam ? "hide-btn" : ""}`} >{props.iconStart}</span>
        <div id="reader" width="600px"></div>
        <span onClick={handleStop} className={`${startCam ? "" : "hide-btn"}`} >{props.iconStop}</span>
      </div>


    </>
  );
};

export default HTML5ScannerWraper;
