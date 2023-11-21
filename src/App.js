import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Setting from './Pages/Setting/setting';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
