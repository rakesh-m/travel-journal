import './style.css';
import TravelCard from './components/TravelCard';
import traveldata from './travel-data'

function App() {
  const travelCards = traveldata.map(dest =>
    <TravelCard dest={dest} />
  )

  return (
    <div className="App">
      <nav>
        <img src='globe.svg' alt='Globe' height='24px' width='24px'/>
        my travel journal
      </nav>
      <section className='travel--cards'>
          {travelCards}
      </section>
    </div>
  );
}

export default App;
