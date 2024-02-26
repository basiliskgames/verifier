import React, { FC } from 'react';
import { Symbol } from 'components';
import styles from './styles.module.scss';

interface Props {
  game_id: string;
  game_field: string[][];
  free_games_won: number;
  selected_super_symbol: string | null;
}

export const GameResult: FC<Props> = ({ game_id, game_field, selected_super_symbol, free_games_won }) => {
  const background = require(`assets/${game_id}/background.webp`);

  return (
    <div className={styles.fieldsWrapper}>
      <div className={styles.fieldContainer} style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.field}>
          {game_field.map((row, i) => (
            <div key={i} className={styles.fieldRow}>
              {row.map((cell, j) => (
                <Symbol key={`${i}@${j}`} folder={game_id} symbol={cell} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        {free_games_won > 0 && <span>Free games won: {free_games_won}</span>}
        {selected_super_symbol && (
          <div>
            <span>Selected super symbol:</span>
            <Symbol folder={game_id} symbol={selected_super_symbol} />
          </div>
        )}
      </div>
    </div>
  );
};
