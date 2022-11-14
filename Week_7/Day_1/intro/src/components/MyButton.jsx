import React from 'react';

//This button will receive some text to display and a link to point
function MyButton(props) {
  let { text, link, color } = props;
  return (
    <div>
      <a href={link}>
        <button className={color}>{text}</button>
      </a>
    </div>
  );
}

export default MyButton;
