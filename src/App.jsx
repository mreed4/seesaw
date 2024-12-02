import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParkProvider } from "./context/ParkContext";
import { UserProvider } from "./context/UserContext";
import Park from "./pages/Park";
import AllParks from "./pages/AllParks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ParkProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AllParks />} />
            <Route path="/:city/:name" element={<Park />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </UserProvider>
    </ParkProvider>
  );
}

export default App;
