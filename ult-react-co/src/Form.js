import React, { useState } from "react";
import "./Form.css";

const initialState = {
  firstName: "",
  lastName: "",
  biography: "",
  transport: "",
  agree: false,
  breakfast: false,
  lunch: false,
  dinner: false,
  shirtSize: ""
};
const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const onChangehandler = e => {
    const value =
      e.target.type !== "checkbox" ? e.target.value : e.target.checked;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState);
  };
  const onClickHandler = () => {
    setFormState(initialState);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formState.firstName}
        onChange={onChangehandler}
      />
      <br />

      <label htmlFor="lastName">last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formState.lastName}
        onChange={onChangehandler}
      />
      <textarea
        name="biography"
        id="biography"
        cols="10"
        rows="10"
        value={formState.biography}
        onChange={onChangehandler}
      ></textarea>

      <label htmlFor="transport">Preferred transport</label>
      <select
        name="transport"
        id="transport"
        value={formState.transport}
        onChange={onChangehandler}
      >
        <option>None selected</option>
        <option value="planes">Planes</option>
        <option value="trains">Trains</option>
        <option value="cars">Cars</option>
        <option value="boats">Boats</option>
      </select>
      <fieldset>
        <legend>Select your meals</legend>
        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          checked={formState.breakfast}
          onChange={onChangehandler}
        />
        <label htmlFor="breakfast">Breakfast</label>
        <input
          type="checkbox"
          id="lunch"
          name="lunch"
          checked={formState.lunch}
          onChange={onChangehandler}
        />
        <label htmlFor="lunch">Lunch</label>
        <input
          type="checkbox"
          id="dinner"
          name="dinner"
          checked={formState.dinner}
          onChange={onChangehandler}
        />
        <label htmlFor="dinner">Dinner</label>
      </fieldset>

      <fieldset>
        <legend>T-shirt size</legend>
        <input
          type="radio"
          id="sizeS"
          name="shirtSize"
          value="s"
          checked={formState.shirtSize === "s"}
          onChange={onChangehandler}
        />
        <label htmlFor="shirtSize">Small</label>
        <input
          type="radio"
          id="sizeM"
          name="shirtSize"
          value="m"
          checked={formState.shirtSize === "m"}
          onChange={onChangehandler}
        />
        <label htmlFor="shirtSize">Medium</label>

        <input
          type="radio"
          id="sizeL"
          name="shirtSize"
          value="l"
          checked={formState.shirtSize === "l"}
          onChange={onChangehandler}
        />
        <label htmlFor="shirtSize">Large</label>
      </fieldset>
      <label htmlFor="agree">I agree to the TOC</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        checked={formState.agree}
        onChange={onChangehandler}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={onClickHandler}>
        Clear Values
      </button>
    </form>
  );
};
export default Form;
