import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Container />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
