import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const onChangehandler = e => {
    setFirstName(e.target.value);
  };
  return (
    <form>
      <span>{firstName}</span>
      <br />
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" value={firstName} onChange={onChangehandler} />
    </form>
  );
};
export default Form;
