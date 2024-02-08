import Login from './Pages/Login/login';
import ProfileEdit from './Pages/ProfileEdit/profileEdit';
import Setting from './Pages/Setting/setting';
import RegularSeat from './Pages/RegularSeat/regularSeat';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} /> */}
          <Route path="/" element={<RegularSeat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
