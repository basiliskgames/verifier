import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  title?: ReactNode;
  subTitle?: ReactNode;
  checked: boolean;
  onChange: () => void;
}
export const Switch: FC<Props> = ({ title, subTitle, checked, onChange }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.switch}>
        <div className={`${styles.toggle} ${checked ? styles.checked : ''}`} onClick={onChange}>
          <div className={styles.point} />
        </div>
      </div>
      <small className="text-secondary">{subTitle}</small>
    </div>
  );
};
