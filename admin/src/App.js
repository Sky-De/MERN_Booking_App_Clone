import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { hotelInputs, productInputs, roomInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewUser from "./pages/newUser/NewUser";
import NewHotel from "./pages/newHotel/NewHotel";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);
  const ProtectetRoute = ({children}) => {
    if(!user){
      return <Navigate to="/login"/>
    }

    return children;

  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectetRoute><Home /></ProtectetRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ProtectetRoute><List columns={userColumns}/></ProtectetRoute>} />
              <Route path=":userId" element={<ProtectetRoute><Single /></ProtectetRoute>} />
              <Route
                path="new"
                element={<ProtectetRoute><NewUser inputs={userInputs} title="Add New User" /></ProtectetRoute>}
              />
            </Route>
            <Route path="hotels">
              <Route index element={<ProtectetRoute><List columns={hotelColumns}/></ProtectetRoute>} />
              <Route path=":hotelId" element={<Single />} />
              <Route
                path="new"
                element={<ProtectetRoute><NewHotel inputs={hotelInputs} title="Add New Hotel" /></ProtectetRoute>}
              />
            </Route>
            {/* <Route path="rooms">
              <Route index element={<ProtectetRoute><List columns={roomColumns}/></ProtectetRoute>} />
              <Route path=":roomId" element={<Single />} />
              <Route
                path="new"
                element={<ProtectetRoute><New inputs={roomInputs} title="Add New Room" /></ProtectetRoute>}
              />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
