import { CORE_CONCEPTS, EXAMPLES } from './Data'
import Header from './Components/Header';
import CoreConcept from './Components/CoreConcept.JSX';
import TabButton from './Components/TabButton'
import { useState } from 'react';
function App() {
  const [topic, setTopic] = useState();
  function HandleClick(selectedButton) {
    setTopic(selectedButton)
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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Exemples</h2>
          <menu>
            <TabButton onSelect={() => HandleClick("components")}>Components</TabButton>
            <TabButton onSelect={() => HandleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => HandleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => HandleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;