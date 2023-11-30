import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login/login';
import Setting from './Pages/Setting/setting';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/setting" element={<Setting />} />

          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
