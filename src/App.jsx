import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParkProvider } from "./ParkContext";
import ParkList from "./ParkList";
import ParkPage from "./ParkPage";

const App = () => {
  return (
    <Router>
      <ParkProvider>
        <Routes>
          <Route path="/" element={<ParkList />} />
          <Route path="/parks/:city/:id" element={<ParkPage />} />
        </Routes>
      </ParkProvider>
    </Router>
  );
};

export default App;
