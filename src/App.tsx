import { useEffect, useState } from "react";
import "./App.css";

import { Button } from "antd";

import gif from "./assets/giphy.gif";
import donation from "./assets/donation.mp3";

function App() {
  const [emulate, setEmulate] = useState(false);
  const audio = new Audio(donation);

  useEffect(() => {
    if (emulate) {
      setTimeout(() => {
        setEmulate(false);
      }, 10000);
    }
  }, [emulate]);

  return (
    <div
      style={{
        background: "#0f0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
        }}
      >
        <img
          src={gif}
          width="300px"
          height="300px"
          alt=""
          style={{ opacity: +emulate }}
        />
        <div style={{ opacity: +emulate, color: "red" }}>
          <h1>Murodjon 10.000 so`m donat qildi</h1>

          <p color="purple" style={{ fontSize: 20 }}>
            Aka nima gaplar
          </p>
        </div>
      </div>

      <Button
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
        }}
        onClick={() => {
          setEmulate(true);
          audio.play();
        }}
        type="primary"
      >
        Likkilla
      </Button>
    </div>
  );
}

export default App;
