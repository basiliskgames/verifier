import React, { FC } from 'react';
import { GameField } from '../GameField';
import styles from './styles.module.scss';

interface Props {
  game_id: string;
  steps: { symbol: string; mult: number }[][][][];
}

export const GameResult: FC<Props> = ({ steps, game_id }) => {
  return (
    <div className={styles.resultContainer}>
      {steps.map((step, s_idx) => (
        <div key={s_idx} className={styles.stepContainer}>
          <span>{s_idx === 0 ? 'Base game' : `Free game #${s_idx}`}</span>
          <div className={styles.clustersContainer}>
            {step.map((cluster, c_idx) => (
              <GameField key={`${s_idx}@${c_idx}`} cluster={cluster} game_id={game_id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
