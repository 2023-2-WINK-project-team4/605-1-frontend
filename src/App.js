import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Ex from './Pages/ex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Ex />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
