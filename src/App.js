import Login from './Pages/Login/login';
import Profile from './Pages/Profile/profile';
import ProfileEdit from './Pages/ProfileEdit/profileEdit';
import Setting from './Pages/Setting/setting';
import Main from './Pages/Main/main';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<Main />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
