import React from 'react';

import './styles/NotFound.css';
import notFoundImage from '../img/404.svg';

function NotFound() {
  return (
    <div className="notFound--container">
      <img className="notFound--image" src={notFoundImage} alt="" />
    </div>
  );
}

export default NotFound;
