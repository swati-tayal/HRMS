import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../shared/context/auth-context";

import Card from "../../../shared/components/UIElements/Card";
import Input from "../../../shared/components/FormElements/Input";
import { Button } from "../../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../../utils/validators";
import useForm from "../../../shared/hooks/form-hook";
import "./AddInteviewer.css"

const AddInterviewer = () => {
  // const auth = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const interviewerSubmitHandler  = async (event) => {
    event.preventDefault();
    try {
      await fetch(`http://localhost:5000/api/interviewers`, {
        method: "POST",
        body: JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          description: formState.inputs.description.value
        }),
        headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`}
      })
      navigate("/interviewers");
    } catch (err) {}
  }
  return (
    <Card className="authentication">
      <form onSubmit={interviewerSubmitHandler}>
        <h2>Add Interviewer</h2>
        <Input
          type="text"
          placeholder="Enter your name"
          element="input"
          id="name"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please enter a valid name."
        />
        <Input
          type="email"
          placeholder="Enter your email"
          element="input"
          id="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid email."
        />
        <Input
          type="text"
          placeholder="Enter your email"
          element="textarea"
          id="description"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(7)]}
          onInput={inputHandler}
          errorText="Please enter a valid description. Minimum 7 characters."
        />
        <Button type="submit" disabled={!formState.isValid}>
          SAVE
        </Button>
      </form>
    </Card>
  );
};

export default AddInterviewer;
