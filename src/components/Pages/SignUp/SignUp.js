import React from "react";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import PageWrapper from "../../common/PageWrapper/PageWrapper";
import "./sign-up.css";

function SignUp() {
  const { register, handleSubmit,watch, errors } = useForm();
  const password = React.useRef({});
  const onSubmit = (data) => console.log(data);
  password.current = watch("password", "");
  console.log(errors);
  return (
    <PageWrapper>
          <div className="jumbotron p-3 p-md-5  rounded bg-white">
         <h1 className="display-4 font-italic">Sign Up</h1>
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
              placeholder="Enter email"
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
        <div className="form-group">
          <label htmlFor="cpassword">
            Confirm Password
            <input
              type="password"
              className={`form-control ${ errors.cpassword ? 'is-invalid' :''}`}
              name="cpassword"
              id="cpassword"
              placeholder="Password"
              ref={register({
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
            />
          </label>
          {errors.cpassword && (
            <small id="usernameHelp" className="form-text text-danger">
             {errors.cpassword.message}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="mx-4" to='/login'>
             Login
            </Link>
      </form>
      </div>
    </PageWrapper>
  );
}

export default SignUp;
