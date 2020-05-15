import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [elemets, setElements] = useState(1);
  const [layout, setLayout] = useState([0, 0]);
  const container = useRef();

  useEffect(() => {
    const a = Math.floor(Math.sqrt(elemets - 1)) + 1;
    const b = Math.ceil(elemets / a);
    console.log(elemets, "!", a, b);
    setLayout([a, b]);
  }, [elemets]);

  useEffect(() => {
    const [a, b] = layout;
    const ar = Array(a).fill("auto");
    const br = Array(b).fill("auto");
    const al = ar.join(" ");
    const bl = br.join(" ");

    container.current.style.gridTemplateColumns = al;
    container.current.style.gridTemplateRows = bl;
  }, [layout]);

  const addElement = () => {
    setElements((prev) => prev + 1);
  };
  const remElement = () => {
    setElements((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <h3>Why not</h3>
          <button onClick={addElement}>+</button>
          <button onClick={remElement}>-</button>
        </div>
        <div className="container" ref={container}>
          {[...Array(elemets).keys()].map((number) => (
            <div className="element" key={number}>
              {/* Element {number + 1} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
