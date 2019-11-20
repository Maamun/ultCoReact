import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: ""
  });

  const onChangehandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState);
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
      <button type="submit">Save</button>
    </form>
  );
};
export default Form;
