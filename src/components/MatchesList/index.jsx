import React, { useEffect, useState } from "react";
import axios from "axios";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/matches"); // 🔗 Call Node API
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.team1} 🆚 {match.team2} - {match.date} at {match.venue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesList;
