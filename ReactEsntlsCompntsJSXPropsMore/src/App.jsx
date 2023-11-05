import { CORE_CONCEPTS } from './Data'
import Header from './Components/Header';
import CoreConcept from './Components/CoreConcept.JSX';
import TabButton from './Components/TabButton'
function App() {
  function HandleClick() {
    console.log('hello world');
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
            <TabButton onSelect={HandleClick}>Components</TabButton>
            <TabButton onSelect={HandleClick}>JSX</TabButton>
            <TabButton onSelect={HandleClick}>Props</TabButton>
            <TabButton onSelect={HandleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;