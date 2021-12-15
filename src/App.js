import TopBar from "./components/topBar/TopBar";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Link, Route, Routes
} from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Write from "./Pages/writes/Write"
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single"; 

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={user?<Home/>:  <Register />} />
        <Route exact path="/Login" element={user?<Home/>:  <Login/>} />
        <Route exact path="/write" element={user?<Write/>:  <Register/>} />
        <Route exact path="/settings" element={user?<Settings/>:  <Register/>} />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
