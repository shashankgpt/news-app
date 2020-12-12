import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types'
import { signUpUser, getUserInfo } from "../../../store/actions/user.action";
import PageWrapper from "../../common/PageWrapper/PageWrapper";

function Profile() {
    const dispatch = useDispatch();
    const stateInfo = useSelector((state) => state.user);
    console.log(stateInfo);
    const { register, handleSubmit, setValue,watch, errors } = useForm();
    const password = React.useRef({});
    const onSubmit = (data) => {
      dispatch(signUpUser(data.username, data.password));
    };
    password.current = watch("password", "");
    console.log(errors);

    React.useEffect(()=>{
        dispatch(getUserInfo());
      },[])

      React.useEffect(()=>{
       const keys = Object.keys(stateInfo.profile)
        for(let i=0;i<keys.length;i+=1) {
          setValue(keys[i], stateInfo.profile[keys[i]]);
        }
      },[stateInfo.profile])

    return (
      <PageWrapper>
        <div className="jumbotron p-3 p-md-5  rounded bg-white">
          <h1 className="display-4 font-italic">{stateInfo.username} Profile</h1>
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
          <form
            className="text-left form-margin"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  name="firstName"
                  id="firstName"
                  aria-describedby="usernameHelp"
                  placeholder="Enter email"
                  ref={register({ required: true })}
                />
              </label>
              {errors.firstName && (
                <small id="usernameHelp" className="form-text text-danger">
                  You must specify a firstName
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastname">
                First Name
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  name="lastname"
                  id="lastname"
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
              <label htmlFor="email">
                First Name
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  name="email"
                  id="email"
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
              <label htmlFor="gender">
              Gender
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  name="gender"
                  id="gender"
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-link">
              Logout
            </button>
          </form>
        </div>
      </PageWrapper>
    );
  }
  
  export default Profile;
  