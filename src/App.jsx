import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={"Albert"} 
      lastName={"Bernal"}
      age={35}
      hairColor={"black"}
      />
      <PersonCard 
      firstName={"Jennifer"} 
      lastName={"Bernal"}
      age={34}
      hairColor={"brown"}
      />
    </div>
  );
}

export default App;
