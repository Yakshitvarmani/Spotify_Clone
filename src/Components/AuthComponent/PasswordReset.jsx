import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const PasswordReset = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    email: "",
  });

  let { loading, email } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(email);
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `Password reset message has been sent to ${email} address `;
      toast.info(message);
      history.push("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Password Reset</h1>
          {/* <button>Sign up with Facebook</button> */}
          <p style={{ fontsize: "14px", paddingBottom: "20px" }}>
            Enter your Spotify username, or the email address that you used to
            register. We'll send you an email with your username and a link to
            reset your password.
          </p>
          {/* <p className="signEmail">Sign up with your email address</p> */}
        </div>

        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password_reset">
                  Email address or username
                </label>
                <input
                  type="text"
                  placeholder=""
                  required
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group btn-group">
                <button>send</button>
              </div>
            </form>
            <div>
              <p>If you still need help, contact Spotify Support.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
