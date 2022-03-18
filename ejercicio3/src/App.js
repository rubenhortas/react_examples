import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <div className="App">
      <Contador/>
      <MainComponent title='Contenedor'></MainComponent>
    </div>
  );
}

export default App;
