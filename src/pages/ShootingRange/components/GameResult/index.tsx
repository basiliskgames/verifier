import React from 'react';
import { GameField, ISymbol } from '../GameField';

interface Props {
  game: string;
  game_fields: ISymbol[][][];
}

export const GameResult = ({ game, game_fields }: Props) => {
  return (
    <div>
      {game_fields.map((field, f_idx) => (
        <div key={f_idx}>
          <span>{f_idx === 0 ? 'Base game' : `Free game #${f_idx}`}</span>
          <GameField game_id={game} field={field} />
        </div>
      ))}
    </div>
  );
};
