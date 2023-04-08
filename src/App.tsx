import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
