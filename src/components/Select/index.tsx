import React, { FC, useState } from 'react';
import './style.scss';

interface Props {
  title?: string;
  subTitle?: string;
  value: Value;
  game: string;
  options: Array<Value>;
  onChange: (option: Value) => void;
}

interface Value {
  sbl?: string;
  label?: string;
}
export const Select: FC<Props> = ({ title, subTitle, value, options, onChange, game }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectOption = (option: Value) => {
    onChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={'inputWrapper'}>
      <p>{title}</p>
      <div className="c_dropdown">
        <div className="c_dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {value.sbl ? (
            <img
              src={require(`assets/${game}/${value.sbl}.webp`)}
              alt={value.sbl}
              className="c_dropdown-option-image"
            />
          ) : (
            <span>{value.label}</span>
          )}
          <span className="c_dropdown-caret" />
        </div>
        <ul className={`c_dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>
              {option.sbl ? (
                <img
                  src={require(`assets/${game}/${option.sbl}.webp`)}
                  alt={option.label}
                  className="c_dropdown-option-image"
                />
              ) : (
                <span>{option.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <small className="text-secondary ">{subTitle}</small>
    </div>
  );
};
