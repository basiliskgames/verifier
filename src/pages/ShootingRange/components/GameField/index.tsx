import React from 'react';
import { Symbol } from 'components';
import styles from './styles.module.scss';

interface Props {
  game_id: string;
  field: ISymbol[][];
}

export interface ISymbol {
  symbol: string;
  is_mystery: boolean;
  is_F: boolean;
  is_GS: boolean;
  mult: number | null;
}

const paddings: any = {
  shooting_range: '7px 18px 6px 12px',
  space_attack: '11px 20px 10px 17px',
  pirate_treasures: '20px 55px 10px 45px',
  dragon_shrine: '19px 13px 18px 13px',
  zeus_revenge: '20px 85px 20px 85px',
  soul_chaser: '30px 38px 5px 34px',
};

export const GameField = ({ game_id, field }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.background} src={require(`assets/${game_id}/background.webp`)} alt="" />
      <div style={{ padding: `${paddings[game_id]}` }}>
        {field.map((row, r_idx) => (
          <div key={r_idx} className={styles.row}>
            {row.map((sbl, c_idx) => (
              <Symbol
                key={`${r_idx}@${c_idx}`}
                folder={sbl.is_GS && !sbl.is_F ? 'coins' : game_id}
                symbol={sbl.is_F ? 'F' : sbl.is_GS ? `${sbl.symbol}_${sbl.mult}` : sbl.symbol}
                multiplier={sbl.is_GS ? null : sbl.mult}
                borderColor={sbl.is_mystery ? 'green' : null}
                size={50}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
