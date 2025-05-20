import React, { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  title?: ReactNode;
  subTitle?: ReactNode;
  onSelect: (mask: number[]) => void;
}

const positions: { m: number; p: number }[] = [
  { m: 0, p: -5 },
  { m: 0, p: 61 },
  { m: 0, p: 62 },
  { m: 0, p: 63 },
  { m: 0, p: 64 },
  { m: 1, p: 0 },
  { m: 1, p: 1 },
  { m: 1, p: 2 },
  { m: 1, p: 3 },
  { m: 1, p: 4 },
];

export const NudgeSelect = ({ title, subTitle, onSelect }: Props) => {
  const [mask, setMask] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const onMaskIdxChange = (col: number, mask_idx: number) => {
    const new_mask = [...mask];
    if (mask_idx < 0) {
      mask_idx = positions.length - 1;
    }
    new_mask[col] = mask_idx % positions.length;
    setMask(new_mask);
  };

  useEffect(() => {
    onSelect([
      positions[mask[0]].p,
      positions[mask[1]].p,
      positions[mask[2]].p,
      positions[mask[3]].p,
      positions[mask[4]].p,
      positions[mask[5]].p,
    ]);
  }, [mask]);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.selector}>
        <Column col={0} mask_idx={mask[0]} onMaskIdxChange={onMaskIdxChange} />
        <Column col={1} mask_idx={mask[1]} onMaskIdxChange={onMaskIdxChange} />
        <Column col={2} mask_idx={mask[2]} onMaskIdxChange={onMaskIdxChange} />
        <Column col={3} mask_idx={mask[3]} onMaskIdxChange={onMaskIdxChange} />
        <Column col={4} mask_idx={mask[4]} onMaskIdxChange={onMaskIdxChange} />
        <Column col={5} mask_idx={mask[5]} onMaskIdxChange={onMaskIdxChange} />
      </div>
      <small className="text-secondary ">{subTitle}</small>
    </div>
  );
};

interface ColProps {
  col: number;
  mask_idx: number;
  onMaskIdxChange: (col: number, idx: number) => void;
}

const Column = ({ col, mask_idx, onMaskIdxChange }: ColProps) => {
  const up = () => {
    onMaskIdxChange(col, mask_idx + 1);
  };
  const down = () => {
    onMaskIdxChange(col, mask_idx - 1);
  };

  return (
    <div className={styles.colContainer}>
      <div className={styles.arrowBox} onClick={up}>
        <span className={styles.arrowUp} />
      </div>
      <div className={styles.mysteryCol}>
        {new Array(5).fill(null).map((_, idx) => (
          <div
            key={`${col}@${idx}`}
            className={positions[(mask_idx + idx) % positions.length].m ? styles.mysteryCell : styles.cell}
          />
        ))}
      </div>
      <div className={styles.arrowBox} onClick={down}>
        <span className={styles.arrowDown} />
      </div>
    </div>
  );
};
