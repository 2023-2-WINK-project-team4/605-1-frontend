import Login from './Pages/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Setting from './Pages/Setting/setting';
import ProfileEdit from './Pages/ProfileEdit/profileEdit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
