import React, { useState } from "react";

import Card from "../shared/components/UIElements/Card";
import Input from "../shared/components/FormElements/Input";
import useForm from "../shared/hooks/form-hook";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
  } from "../utils/validator";
import { Button } from "../shared/components/FormElements/Button";
import "./auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
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
  const switchModeHandler = () => {
    
    setIsLogin((prev) => !prev);
  }

  return (
    <Card className="authentication">
        <h2>{isLogin ? "Login requried": "Sign Up"}</h2>
      <form action="/">
        <div className="form-control">

        <label> Role </label>
        <select>
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
        <Button type="submit" disabled={!formState.isValid}>{isLogin ? "Login" : "Sign Up"}</Button>
      </form>
      <Button onClick={switchModeHandler}>
        Switch to {isLogin ? "Sign Up": "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
