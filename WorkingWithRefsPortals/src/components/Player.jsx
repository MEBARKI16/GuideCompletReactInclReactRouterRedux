import { useState, useRef } from "react";

export default function Player() {
  const InputText = useRef();
  const [input, setInput] = useState(null)
  return (
    <section id="player">
      <h2>Welcome {input ?? "unknow"}</h2>
      <p>
        <input ref={InputText} type="text" />
        <button onClick={() => { setInput(InputText.current.value); InputText.current.value = ""; }}>Set Name</button>
      </p>
    </section>
  );
}
