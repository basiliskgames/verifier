import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  symbol: string;
  folder: string;
  multiplier?: number | null;
  size?: number;
  borderColor?: string | null;
}

export const Symbol: FC<Props> = ({ folder, symbol, multiplier, size = 100, borderColor }) => {
  const border = `3px solid ${borderColor ? borderColor : 'rgba(0,0,0,0)'}`;
  // const border = `3px solid ${borderColor ? borderColor : 'rgba(255,0,0,0.3)'}`;
  return (
    <div className={styles.container} style={{ border: border }}>
      <img
        style={{ width: `${size}px`, height: `${size}px` }}
        src={require(`assets/${folder}/${symbol}.webp`)}
        alt={symbol}
      />
      {!!multiplier && <span className={styles.mult}>x{multiplier}</span>}
    </div>
  );
};
