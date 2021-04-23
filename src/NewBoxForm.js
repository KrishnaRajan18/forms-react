import React, { useState } from "react";

const NewBoxForm = props => {
  const initialState = {
    color: "",
    width: "",
    height: ""
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // alert(`form has added the value ${formData.color}`);

    props.addBox(formData.color, formData.width, formData.height);
    setFormData(initialState);
  };
  const [formData, setFormData] = useState(initialState);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};
export default NewBoxForm;
