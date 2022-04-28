import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Paramater from './components/Paramater';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:arry" element={<Paramater />} />
      <Route path="/:arry/:color" element={<Paramater />} />
      <Route path="/:arry/:color/:bgColor" element={<Paramater />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
