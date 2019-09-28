import React from "react"
import PropTypes from "prop-types"

function handleFormSubmit(name) {
  let body = JSON.stringify({
    ingredient: { name: name }
  });

  fetch("http://localhost:3000/api/v1/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(response => {
      return response.json();
    })
    
}

const NewIngredient = props => {
  let formFields = {};

  return (
    <form onSubmit={e => {
        handleFormSubmit(formFields.name.value);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
        ref={input => (formFields.name = input)}
        placeholder="Name"
      />

      <button className="btn blue lighten-2">Submit</button>
    </form>
  );
};

export default NewIngredient
