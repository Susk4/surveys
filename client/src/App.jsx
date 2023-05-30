import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Applayout from "./components/Layout/Applayout";
import Register from "./components/Register/Register";
import { WithProtected } from "./components/Layout/WithProtected";
import Surveys from "./components/Surveys/Surveys";
import Answers from "./components/Answers/Answers";
import Profile from "./components/Profile/Profile";

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
            <Route
              path="/answers"
              element={
                <WithProtected>
                  <Answers />
                </WithProtected>
              }
            />
            <Route
              path="/surveys"
              element={
                <WithProtected>
                  <Surveys />
                </WithProtected>
              }
            />
            <Route
              path="/profile"
              element={
                <WithProtected>
                  <Profile />
                </WithProtected>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
