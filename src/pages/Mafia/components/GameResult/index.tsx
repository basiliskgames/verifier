import React from 'react';
import { GameField } from '../GameField';
import styles from './styles.module.scss';

interface Props {
  game: string;
  steps: { clusters: { symbol: string }[][][] }[];
}
export const GameResult = ({ game, steps }: Props) => {
  return (
    <div className={styles.resultContainer}>
      {steps.map((step, s_idx) => (
        <div key={s_idx} className={styles.stepContainer}>
          <span>{s_idx === 0 ? 'Base game' : `Free game #${s_idx}`}</span>
          <div className={styles.clustersContainer}>
            {step.clusters.map((cluster, c_idx) => (
              <GameField key={`${s_idx}@${c_idx}`} cluster={cluster} game_id={game} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
