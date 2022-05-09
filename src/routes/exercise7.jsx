import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Exercise7() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const submitFormData = (e) => {
    e.preventDefault();
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitFormData}>
        <TextField
          type="text"
          id="firstname"
          name="first_name"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleInputData("firstName")}
        />

        <TextField
          type="text"
          id="lastname"
          name="last_name"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleInputData("lastName")}
        />
      </form>
      <Button
        onClick={() =>
          alert("Hello " + formData.firstName + " " + formData.lastName + "!")
        }
        variant="contained"
      >
        GREET ME
      </Button>
    </div>
  );
}
