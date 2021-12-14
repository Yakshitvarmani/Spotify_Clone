import React, { useState } from "react";
import firebase from "firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    phone: "",
  });

  let { loading, phone } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let reCaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let confirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, reCaptchaContainer);
      let code = window.prompt("enter otp");
      confirmationMessage.confirm(code);
      toast.success("successfully logged in");
      history.push("/userHome/profile");
      console.log(phone);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Enter phone number</h1>
        </div>

        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone number"
                  required
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                          </div>
                          <div id="recaptcha-container"></div>
              <div className="form-group btn-group">
                <button>send</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
