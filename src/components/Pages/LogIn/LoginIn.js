import React from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import PageWrapper from "../../common/PageWrapper/PageWrapper";
import "./login.css";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <PageWrapper>
         <div className="jumbotron p-3 p-md-5  rounded bg-white">
         <h1 className="display-4 font-italic">Log In</h1>
      <form className="text-left form-margin" onSubmit={handleSubmit(onSubmit)}>
         
        <div className="form-group">
          <label htmlFor="username">
            Username
            <input
              type="text"
              className={`form-control ${ errors.username ? 'is-invalid' :''}`}
              name="username"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              ref={register({ required: true })}
            />
          </label>
          {errors.username && (
            <small id="usernameHelp" className="form-text text-danger">
              You must specify a username
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              type="password"
              className={`form-control ${ errors.password ? 'is-invalid' :''}`}
              name="password"
              id="password"
              placeholder="Password"
              ref={register({
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters"
                }
              })}
            />
          </label>
          {errors.password && (
            <small id="usernameHelp" className="form-text text-danger">
             {errors.password.message}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="mx-4" to='/signup'>
              Sign up
            </Link>
      </form>
      </div>
    </PageWrapper>
  );
}

export default SignUp;
