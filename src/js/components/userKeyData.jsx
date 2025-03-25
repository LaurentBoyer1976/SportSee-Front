import React from 'react';

const UserKeyData = ({ icon, text, value, unit }) => {
  return (
    <figcaption className="userKeyData">
      <img src={icon} alt={`${text} icon`} className="userKeyData__icon" />
      <div className="userKeyData__info">
        <span className="userKeyData__value">{value}{unit}</span>
        <span className="userKeyData__text">{text}</span>
      </div>
    </figcaption>
  );
};

export default UserKeyData;