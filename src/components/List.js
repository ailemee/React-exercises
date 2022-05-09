import React from "react";

function Animals(props) {
  const animals = props.animals;
  const listAnimals = animals.map((animals) => (
    <li key={animals.id}>{animals}</li>
  ));
  return <ul>{listAnimals}</ul>;
}

export default Animals;
