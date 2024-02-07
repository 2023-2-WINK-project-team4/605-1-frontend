import Login from './Pages/Login/login';
import ProfileEdit from './Pages/ProfileEdit/profileEdit';
import Setting from './Pages/Setting/setting';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCallBack from './Pages/Login/loginCallback';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginCallback" element={<LoginCallBack />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
