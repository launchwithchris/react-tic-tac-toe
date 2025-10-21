
import Player from './components/Player.jsx';

function App() {
  
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol="X" onEdit={() => {}} />
        <Player name="Player 2" symbol="O" onEdit={() => {}} />
      </ol>
      GAME BOARD
    </div>
  </main>

}

export default App
