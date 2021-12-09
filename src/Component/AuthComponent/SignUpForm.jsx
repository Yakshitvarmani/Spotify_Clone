import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./month.json";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const SignUpForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    month: "",
    dd: "",
    yy: "",
    gender: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    profile_name,
    month,
    dd,
    yy,
    gender,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        toast.success("Successfully user Registered");
        let congirmMessage = `A verification message has been sent to ${email} and verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(congirmMessage);
        history.push("/login");
        // console.log(USER_DATA);
      } else {
        // console.log("confirm email is not matching");
        toast.error("confirm email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            placeholder="Enter your email."
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm your email</label>
          <input
            type="email"
            className="form-control"
            name="email1"
            id="email1"
            required
            placeholder="Emter your email again."
            onChange={handleChange}
            value={email1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            placeholder="Create a password."
            name="password"
            className="form-control"
            required
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile_name">What should we call you?</label>
          <input
            type="text"
            placeholder="Enter a profile name"
            name="profile_name"
            className="form-control"
            id="profile_name"
            required
            onChange={handleChange}
            value={profile_name}
          />
          <label htmlFor="profile_name">This appears on your profile.</label>
        </div>
        <div className="form-group">
          <label htmlFor="date">What's your date of birth?</label>
          <div className="dateBlock">
            <input
              type="text"
              placeholder="Month"
              name="month"
              required
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DD"
              name="dd"
              required
              value={dd}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="YYYY"
              name="yy"
              required
              value={yy}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">What's your gender?</label>
          <main className="genderBlock" value={gender} onChange={handleChange}>
            <span>
              <input type="radio" value="male" name="gender" id="gender" />
              Male
            </span>
            <span>
              <input type="radio" value="female" name="gender" id="gender" />
              Female
            </span>
            <span>
              <input
                type="radio"
                value="Non-Binary"
                name="gender"
                id="gender"
              />
              Non-binary
            </span>
          </main>
        </div>
        <div className="form-group">
          <input type="checkbox" />
          <span className="checkBoxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="form-group">
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
          <button>{loading == true ? "Loading" : "Sign up"}</button>
        </div>
        <div className="form-group">
          <p className="bbb">
            Have an account?<Link to="/login"> Log in.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
