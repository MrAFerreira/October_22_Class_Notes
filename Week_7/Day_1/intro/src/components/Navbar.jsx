//Extension : ES7+ React/Redux/... snippets
import React, { Component } from 'react';
import MyButton from './MyButton';

export class Navbar extends Component {
  //Constructor would go here

  render() {
    return (
      <div>
        <MyButton color="red" text="Go to docs" link="https://beta.reactjs.org/" />
        <MyButton color="green" text="Google" link="https://www.google.com" />
        <MyButton color="blue" text="Linkedin" link="https://linkedin.com" />
      </div>
    );
  }
}

export default Navbar;
