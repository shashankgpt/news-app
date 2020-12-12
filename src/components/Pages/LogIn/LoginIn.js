import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { loginUser, clearMessage } from "../../../store/actions/user.action";
import PageWrapper from "../../common/PageWrapper/PageWrapper";
import "./login.css";

function LogIn({history}) {
  const dispatch = useDispatch();
  const stateInfo = useSelector((state) => state.user);
  console.log(stateInfo);
  const { register, handleSubmit, watch, errors } = useForm();
  const password = React.useRef({});
  const onSubmit = (data) => {
    dispatch(loginUser(data.username, data.password));
  };
  password.current = watch("password", "");
  console.log(errors);
  React.useEffect(()=>{
    if(!stateInfo.success) return ;
    setTimeout(()=>{
      dispatch(clearMessage())
      history.push('/')
    },3000)
  },[stateInfo.success])
  return (
    <PageWrapper>
         <div className="jumbotron p-3 p-md-5  rounded bg-white">
         <h1 className="display-4 font-italic">Log In</h1>
         {stateInfo.success && (
          <div className="alert alert-success" role="alert">
            {stateInfo.success}
          </div>
        )}
        {stateInfo.error && (
          <div className="alert alert-danger" role="alert">
            {stateInfo.error}
          </div>
        )}
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

LogIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default LogIn;
