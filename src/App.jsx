import {useEffect, useState} from "react";
import "./App.scss";

const App = () => {
     const [temp, setTemp] = useState("");
     const [word, setWord] = useState("");
     const [size, setSize] = useState(300);
     const [bgColor, setBgColor] = useState("#ffffff");
     const [qrCode, setQrCode] = useState("");
 
     useEffect(() => {
      if(word){
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          word)}&size=${size}x${size}&bgcolor=${bgColor}`
        )
      }
     }, [word, size, bgColor])

     const handleClick = () => {
      setWord(temp)
     }


    return (
      <div className="APP">
        <h1>QR Code Generator</h1>

        <div className="input-box">

        <div className="gen">
          <input type="text" onChange={(e) => setTemp(e.target.value)} placeholder="Enter text to encode"/>
          <button className="button" onClick={handleClick}> Generate </button>
        </div>

        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => setBgColor(e.target.value.substring(1))} />

          <h5>Dimension:</h5>
          <input type="range" min="200" max="600" value={size} onChange={(e) => setSize(e.target.value)}/>
        </div>

      </div>


      <div className="output-box">
        {qrCode && <img src={qrCode} alt="Generated QR Code" />}
        {qrCode && (
          <a href={qrCode} download="QRCode">
            <button type="button">Download</button>
          </a>
        )}
      </div>



      </div>
    )

}

export default App;