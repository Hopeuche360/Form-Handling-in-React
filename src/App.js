import React, {useState} from 'react';
import './App.css';

function App() {

  // using a custom hook
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: "",
    weight: 0
  })

  // function to handle inputs
  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  return (
    <div className="App">
      <h2>Form Handling in React</h2>
      <p>This codebase helps you handle the different types of form inputs in React</p>
      <br />
      <form>

        {/* text input */}
        <label>
          First Name: {" "}
          <input type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label> {" "}
          Last Name: {" "}
          <input type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>

        <br /><br />

        {/* textarea input */}
        <label>
          What's on Your Mind? {" "}
          <textarea
            name="message" cols="20" rows="3"
            value={state.message}
            onChange={handleChange}
          />
        </label>

        <br /><br />

        {/* select input */}
        <label>
          What's your favorite Car? {" "}
          <select name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="Chevy">Chevy</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Bugati">Bugati</option>
          </select>
        </label>

        <br /><br />

        {/* checkbox input */}
        <label>
          <input
            type="checkbox"
            name="isChecked"
            value={state.isChecked}
            onChange={handleChange}
          />
          {" "} Checked?
        </label>

        <br /><br />

        {/* radio input */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />
          {" "} Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />
          {" "} Female
        </label>

        <br /><br />

        {/* Range input */}
        <label>
          Weight between 0kg and 170kg: {" "}
          <input
            type="range"
            name="weight"
            min="0"
            max="170"
            value={state.weight}
            onChange={handleChange}
          />
        </label>
      </form>

      {/* rendering the form input */}
      <h4>Name: {state.fname} {state.lname}</h4>

      <p>My message: {state.message}</p>

      <p>My favorite car brand is: {state.carBrand}</p>

      <p>Are you married? {state.isChecked ? "yes" : "no"}</p>
      
      <p>Gender: {state.gender}</p>

      <p>Weight in Kg: {state.weight}</p>
    </div>
  );
}

export default App;
