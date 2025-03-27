import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axiosInstance.get("/matches")
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error("Error fetching matches:", error);
      });
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
