import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlaygroundProvider } from "./PlaygroundContext";
import PlaygroundList from "./PlaygroundList";
import PlaygroundPage from "./PlaygroundPage";

const App = () => {
  return (
    <Router>
      <PlaygroundProvider>
        <Routes>
          <Route path="/" element={<PlaygroundList />} />
          <Route path="/playgrounds/:city/:id" element={<PlaygroundPage />} />
        </Routes>
      </PlaygroundProvider>
    </Router>
  );
};

export default App;
