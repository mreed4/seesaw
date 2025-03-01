import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PlaygroundProvider } from "./context/PlaygroundContext";
import PlaygroundList from "./components/PlaygroundList";
import PlaygroundPage from "./components/PlaygroundPage";
import NotFoundPage from "./components/NotFoundPage"; // Import the NotFoundPage component
import ShortcutMessage from "./components/ShortcutMessage"; // Import the ShortcutMessage component

const App = () => {
  return (
    <Router>
      <PlaygroundProvider>
        <ShortcutMessage /> {/* Render the ShortcutMessage component */}
        <Routes>
          <Route path="/" element={<Navigate to="/playgrounds" replace />} /> {/* Auto-forward from "/" to "/playgrounds" */}
          <Route path="/playgrounds" element={<PlaygroundList />} />
          <Route path="/playgrounds/:city/:id" element={<PlaygroundPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Add 404 route */}
        </Routes>
      </PlaygroundProvider>
    </Router>
  );
};

export default App;
