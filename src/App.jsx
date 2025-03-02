import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { PlaygroundProvider } from "./context/PlaygroundContext";
import { UserProvider } from "./context/UserContext"; // Import the UserProvider
import PlaygroundList from "./components/PlaygroundList";
import PlaygroundPage from "./components/PlaygroundPage";
import NotFoundPage from "./components/NotFoundPage"; // Import the NotFoundPage component
import ShortcutMessage from "./components/ShortcutMessage"; // Import the ShortcutMessage component
import ProfilePage from "./components/ProfilePage"; // Import the ProfilePage component

const App = () => {
  return (
    <Router>
      <PlaygroundProvider>
        <UserProvider>
          {" "}
          {/* Wrap the application with UserProvider */}
          <ShortcutMessage /> {/* Render the ShortcutMessage component */}
          <Routes>
            <Route path="/" element={<Navigate to="/playgrounds" replace />} /> {/* Auto-forward from "/" to "/playgrounds" */}
            <Route path="/playgrounds" element={<PlaygroundList />} />
            <Route path="/playground/:city/:id" element={<PlaygroundPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} /> {/* Add ProfilePage route */}
            <Route path="*" element={<NotFoundPage />} /> {/* Add 404 route */}
          </Routes>
        </UserProvider>
      </PlaygroundProvider>
    </Router>
  );
};

export default App;
