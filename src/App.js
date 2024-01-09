// import Login from './Pages/Login/login';
// import ProfileEdit from './Pages/ProfileEdit/profileEdit';
// import Setting from './Pages/Setting/Setting';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dropdown from './Components/Dropdown/dropdown';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dropdown width="200" height="60" />} />
          {/* <Route path="/setting" element={<Setting />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
