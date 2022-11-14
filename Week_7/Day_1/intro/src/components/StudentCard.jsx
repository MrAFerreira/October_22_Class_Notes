import React from 'react';

function StudentCard(props) {
  const { name, week, info } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>Bootcamp: {info.bootcamp}</p>
      <p>Week: {week}</p>
      <p>City: {info.city}</p>
    </div>
  );
}

export default StudentCard;
