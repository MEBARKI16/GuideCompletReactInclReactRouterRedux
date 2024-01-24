import Player from './components/Player.jsx';
import GlobalContext from './Store/Store.jsx';
function App() {
  return (
    <GlobalContext>
      <Player />
      <div id="challenges"></div>
    </GlobalContext>
  );
}

export default App;
