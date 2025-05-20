import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="container-fluid navbar-brand headerLink" to={'/'}>
        All Games
      </Link>
    </div>
  );
};
