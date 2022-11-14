import React from 'react';

function StudentList(props) {
  console.log(props);
  return (
    <div>
      <h1>Web dev class OCt22:</h1>
      {/* StudentList is not concerned with the amount or type of component, it just renders it. props.children is a RESERVED keyword */}
      <section>{props.children}</section>
    </div>
  );
}

export default StudentList;
