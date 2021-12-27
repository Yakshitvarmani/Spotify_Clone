import React, { useState } from "react";
import PhoneAuth from "./PhoneAuth";

const VerificationOtp = () => {
  let [otp, setOtp] = useState("");
  let handleChange = e => {
    let { name, value } = e.target;
    setOtp({ ...otp, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1>Enter OTP</h1>
        <form onSubmit={handleSubmit}>
          <input type="number" onChange={handleChange} />
          <button>submit</button>
        </form>
      </div>
      <PhoneAuth otp={otp} />
    </>
  );
};

export default VerificationOtp;
