import "./App.css";
import parks from "./data";
import { useParkLogic } from "./useParkLogic";
import { ParkPage } from "./ParkPage";

function App() {
  const { parkBuilt, getAgeOfPark, features, address, name, ageRange, percentage, feedback } = useParkLogic(parks);

  return (
    <ParkPage
      name={name}
      address={address}
      parkBuilt={parkBuilt}
      getAgeOfPark={getAgeOfPark}
      features={features}
      ageRange={ageRange}
      percentage={percentage}
      feedback={feedback}
    />
  );
}

export default App;
