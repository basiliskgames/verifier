import React, { FC, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'title'> {
  title?: ReactNode;
  subTitle?: ReactNode;
}
export const Input: FC<Props> = ({ className, title, subTitle, ...props }) => {
  return (
    <div className={'inputWrapper'}>
      <p>{title}</p>
      <input {...props} className={'form-control me-sm-2'} type="text" />
      <small className="text-secondary ">{subTitle}</small>
    </div>
  );
};
