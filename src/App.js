import './style.css';
import TravelCard from './TravelCard';

function App() {
  return (
    <div className="App">
      <nav>
        <img src='globe.svg' alt='Globe' height='24px' width='24px'/>
        my travel journal
      </nav>
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
    </div>
  );
}

export default App;
