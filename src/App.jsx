import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {toggle && <Title />}
          <button onClick={() => setToggle((togle) => (togle = !togle))}>
            <h1>Toggle </h1>
          </button>
        </div>
        <div>
          <div>
            <h1>Form 1 </h1>
          </div>
          <Form1 />
        </div>
        <div>
          <di>
            <h1>Form 2 </h1>{" "}
          </di>
          <div>
            <Form2 />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
