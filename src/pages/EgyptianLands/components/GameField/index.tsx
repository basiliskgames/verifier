import React from 'react';
import { Symbol } from 'components';
import styles from './styles.module.scss';

interface Props {
  game_id: string;
  cluster: { symbol: string; mult: number }[][];
}
export const GameField = ({ cluster, game_id }: Props) => {
  const background = require(`assets/${game_id}/background.webp`);

  return (
    <div className={styles.field} style={{ backgroundImage: `url(${background})` }}>
      {cluster.map((row, r_idx) => (
        <div key={r_idx} className={styles.row}>
          {row.map((sbl, c_idx) => (
            <Symbol key={`${r_idx}@${c_idx}`} folder={game_id} symbol={sbl.symbol} multiplier={sbl.mult} size={40} />
          ))}
        </div>
      ))}
    </div>
  );
};
