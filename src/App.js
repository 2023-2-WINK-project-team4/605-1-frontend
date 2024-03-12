import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import LoginCallBack from './Pages/Login/loginCallback';
import Profile from './Pages/Profile/profile';
import Main from './Pages/Main/main';
import MeetingTable from './Pages/MeetingTable/meetingTable';
import RegularSeat from './Pages/RegularSeat/Regularseat';
import Setting from './Pages/Setting/setting';
import ProfileEdit from './Pages/ProfileEdit/profileEdit';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginCallback" element={<LoginCallBack />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<Main />} />
          <Route path="/meetingTable" element={<MeetingTable />} />
          <Route path="/regularSeat" element={<RegularSeat />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
