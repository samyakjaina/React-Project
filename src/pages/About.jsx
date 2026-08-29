


function About() {

  let x = 10;
  let y = 20;
  function addNumbers(a, b) {
    return a * b;
  }
  const result = addNumbers(x, y);
  const userobj = {
    name: "John Doe",
    age: 30,
    email: ""
  }
  return (
    <div>
      <h1>About</h1>
      <p>This is my first React application.</p>
      <h1>Sum of {x} and {y} is {addNumbers(userobj.age,y)}</h1>
      <p id = {userobj.name}>User Object: {userobj.age} + {result}</p>
    </div>
  );
}

export default About;