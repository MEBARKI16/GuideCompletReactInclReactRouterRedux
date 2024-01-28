import { useState, useRef } from "react";

export default function Player() {
  const InputText = useRef();
  const InputText2 = useRef();
  const HandleClick = () => {
    setInput(InputText.current.value);
    InputText2.current.innerText = "Welcome " + InputText.current.value;
    InputText.current.value = "";
  }
  return (
    <section id="player">
      <h2 ref={InputText2}>Welcome unknow</h2>
      <p>
        <input ref={InputText} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
