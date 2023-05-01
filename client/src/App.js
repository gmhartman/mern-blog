import React from "react";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/home/single/single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home/> : <Register />} />
        <Route path='/login' element={user ? <Home/> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
