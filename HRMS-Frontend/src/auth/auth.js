import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../shared/components/UIElements/Card";
import Input from "../shared/components/FormElements/Input";
import useForm from "../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validators";
import { Button } from "../shared/components/FormElements/Button";
import "./auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/")
    }
  }, [])
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/${role}/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: formState.inputs.email.value,
              password: formState.inputs.password.value,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        navigate("/interviewers");
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("role", role);
        formData.append("name", formState.inputs.name.value);
        formData.append("email", formState.inputs.email.value);
        formData.append("password", formState.inputs.password.value);
        const response = await fetch(
          `http://localhost:5000/api/${role}/signUp`,
          {
            method: "POST",
            formData,
          }
        );
        const data = await response.json();
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        navigate("/");
      } catch (err) {}
    }
  };

  const switchModeHandler = () => {
    setIsLogin((prev) => !prev);
  };


  return (
    <Card className="authentication">
      <h2>{isLogin ? "Login requried" : "Sign Up"}</h2>
      <form onSubmit={authSubmitHandler}>
        <div className="form-control">
          <label> Role </label>
          <select
            onChange={(event) => setRole(event.target.value)}
            value={role}
          >
            <option value="admin">Admin</option>
            <option value="interviewer">Interviewer</option>
          </select>
        </div>

        {!isLogin && (
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
        )}
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
          type="password"
          placeholder="Enter your password"
          element="input"
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(7)]}
          errorText="Please enter a valid password."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Button onClick={switchModeHandler}>
        Switch to {isLogin ? "Sign Up" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
