import "./App.css";
import { ParkProvider } from "./ParkContext";
import { ParkPage } from "./ParkPage";

function App() {
  return (
    <ParkProvider>
      <ParkPage />
    </ParkProvider>
  );
}

export default App;
