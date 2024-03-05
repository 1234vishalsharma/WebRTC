
import { Route, Routes } from 'react-router-dom';
import Lobby from './Pages/Lobby';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Lobby/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
