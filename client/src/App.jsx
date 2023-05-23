import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Applayout from "./components/layout/Applayout";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <div>
                <Applayout /> <Outlet />
              </div>
            }
          >
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
