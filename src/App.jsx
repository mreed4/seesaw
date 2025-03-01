import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PlaygroundProvider } from "./PlaygroundContext";
import PlaygroundList from "./PlaygroundList";
import PlaygroundPage from "./PlaygroundPage";
import NotFoundPage from "./NotFoundPage"; // Import the NotFoundPage component
import ShortcutMessage from "./ShortcutMessage"; // Import the ShortcutMessage component

const App = () => {
  return (
    <Router>
      <PlaygroundProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/playgrounds" />} /> {/* Redirect from "/" to "/playgrounds" */}
          <Route path="/playgrounds" element={<PlaygroundList />} />
          <Route path="/playgrounds/:city/:id" element={<PlaygroundPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Add 404 route */}
        </Routes>
      </PlaygroundProvider>
      <ShortcutMessage />
    </Router>
  );
};

export default App;
