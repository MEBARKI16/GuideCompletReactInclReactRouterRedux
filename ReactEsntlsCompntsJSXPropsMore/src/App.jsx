import { CORE_CONCEPTS, EXAMPLES } from './Data'
import Header from './Components/Header';
import CoreConcept from './Components/CoreConcept.JSX';
import TabButton from './Components/TabButton'
import { useState } from 'react';
function App() {
  const [topic, setTopic] = useState();
  function HandleClick(selectedButton) {
    setTopic(selectedButton);

  }
  let tabContent = <p>Please select a topic</p>;
  if (topic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[topic].title}</h3>
      <p>{EXAMPLES[topic].description}</p>
      <pre>
        <code>
          {EXAMPLES[topic].code}
        </code>
      </pre>
    </div>;
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element,index) => <CoreConcept key={index} {...element} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Exemples</h2>
          <menu>
            <TabButton isActive={topic === "components" ? "active" : ""} onSelect={() => HandleClick("components")}>Components</TabButton>
            <TabButton isActive={topic === "jsx" ? "active" : ""} onSelect={() => HandleClick("jsx")}>JSX</TabButton>
            <TabButton isActive={topic === "props" ? "active" : ""} onSelect={() => HandleClick("props")}>Props</TabButton>
            <TabButton isActive={topic === "state" ? "active" : ""} onSelect={() => HandleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;