import { useContext, useState } from "react";
import { Store } from "../Store/Store";

export default function Player() {
  const [input, setInput] = useState("")
  const { name, setName } = useContext(Store);
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button onClick={() => { setName(input); setInput("") }}>Set Name</button>
      </p>
    </section>
  );
}
