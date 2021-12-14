import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../Pages/HeaderComponent/Logo";
import LoginForm from "./LoginForm";
import socialLogin, {
  FacebookProcider,
  GoogleProvider,
} from "./LoginWithSocialMedia";
import { Link } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let handleClick = async provider => {
    try {
      await socialLogin(provider);
      toast.success("Successfully loggedin");
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="loginBlock">
      <article>
        <Logo />
        <p></p>
        <h1>To continue, log in to Spotify.</h1>
        <div className="loginContent">
          <div>
            <button onClick={() => handleClick(FacebookProcider)}>
              <span>
                <i class="fab fa-facebook"></i>Continue with facebook
              </span>
            </button>
            <button>
              <span>
                <i class="fab fa-apple"></i>Continue with apple
              </span>
            </button>
            <button onClick={() => handleClick(GoogleProvider)}>
              Continue with google
            </button>
            <Link to="/phone-auth">Continue with Phone Number</Link>
          </div>

          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>

        <section id="authBlock">
          <article>
            {/* <Logo /> */}
            <div className="authContent"></div>

            <div className="formContent">
              <LoginForm />
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Login;
