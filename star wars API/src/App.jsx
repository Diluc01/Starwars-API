import "./App.css";
import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships();
      setStarships(starshipData);
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Starships</h1>
      <div>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;
