import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlaygroundProvider } from "./PlaygroundContext";
import PlaygroundList from "./PlaygroundList";
import PlaygroundPage from "./PlaygroundPage";
import NotFoundPage from "./NotFoundPage"; // Import the NotFoundPage component

const App = () => {
  return (
    <Router>
      <PlaygroundProvider>
        <Routes>
          <Route path="/" element={<PlaygroundList />} />
          <Route path="/playgrounds/:city/:id" element={<PlaygroundPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Add 404 route */}
        </Routes>
      </PlaygroundProvider>
    </Router>
  );
};

export default App;
