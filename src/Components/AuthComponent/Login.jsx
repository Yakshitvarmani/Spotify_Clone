import React from "react";
import Logo from "../../Pages/HeaderComponent/Logo";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section id="loginBlock">
      <article>
        <Logo />
        <p></p>
        <h1>To continue, log in to Spotify.</h1>
        <div className="loginContent">
          <div>
            <button>
              <span>
                <i class="fab fa-facebook"></i>Continue with facebook
              </span>
            </button>
            <button>
              <span>
                <i class="fab fa-apple"></i>Continue with apple
              </span>
            </button>
            <button>Continue with google</button>
            <button>Continue with Phone Number</button>
          </div>

          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>

        <section id="authBlock">
          <article>
            {/* <Logo /> */}
            <div className="authContent">
              {/* <h1>Sign up for free to start listening</h1>
              <button>Sign up with Facebook</button>
              <p className="orBlock">
                <strong>or</strong>
              </p>
              <p className="signEmail">Sign up with your email address</p> */}
            </div>

            <div className="formContent">
             <LoginForm/>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Login;
