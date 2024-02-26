import React from 'react';
import { Link } from 'react-router-dom';
import { games } from 'config';

export const Home = () => {
  return (
    <div>
      <h1 className="lead">Please choose a game from the list below:</h1>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={'/' + game.id}>{game.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
