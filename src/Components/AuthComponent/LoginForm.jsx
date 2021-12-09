import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "./../../Apis/Firebase";

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });

  let { email, password, loading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(state);
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      //   console.log(userData);
      //   toast.success(`Succesfully ${email} loged in`);
      if (userData.user.emailVerified === true) {
        toast.success(`Succesfully ${email} has been loged in`);
        history.push("/");
      }else{
          history.push('./login')
          toast.error(`email has not verified go to ${email} verify then login `)
      }
      //   history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: true });
  };
  return (
    <div className="addForm">
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
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            required
            placeholder="Create a password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="">sometext</label> */}
          <input type="checkbox" className="form-control" id="cb" />
          <span className="checkBoxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>

        <div className="form-group btn-group">
          <button>LOG IN</button>
        </div>

        <div className="form-group">
          <p className="acc">
            Have an account?{" "}
            <Link to="/signup" style={{ color: "#1ed760" }}>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
