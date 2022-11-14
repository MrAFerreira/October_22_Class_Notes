//This is all javascript, so we can use methods, functions, etc

//we can create and use different functions that aren't components
function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

function Greeting(props) {
  let { firstName } = props;

  return (
    <div>
      <h1>Hello {firstName.toUpperCase()} </h1>
      <h1>Hello {capitalize(firstName)} </h1>
    </div>
  );
}

//Normal export
export default Greeting;
