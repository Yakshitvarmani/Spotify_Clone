import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { AuthContextApi } from "./../../Apis/AuthContext";
import firebase from "firebase";
import { toast } from "react-toastify";
const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);
  console.log(AUTH);

  let [toggle, setToggle] = useState(true);
  let toggleElement = useRef();
  let childRef = useRef();
  let Toggleit = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = event => {
    if (
      childRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(event.target) &&
      !childRef.current.contains(event.target)
    ) {
      setToggle(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("Successfully Logged Out from the Application");
        window.location.assign("/login");
      })
      .catch(err => toast.error(err.message));
  };

  let AnnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="">Premium</Link>
        </li>
        <li>
          <Link to="">Support</Link>
        </li>
        <li>
          <Link to="">Download</Link>
        </li>
        <li className="bar">
          <a href=""></a>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );
  };

  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <figure
            className="profile_img"
            ref={toggleElement}
            onClick={Toggleit}
          >
            {AUTH === null ? (
              "loading.."
            ) : (
              <img src={AUTH.photoURL} alt={AUTH.displayName} />
            )}
            {/* <img src={AUTH.photoURL} alt={AUTH.displayName} /> */}
            <figcaption>{AUTH.displayName}</figcaption>
          </figure>

          <div
            ref={childRef}
            className="dropdown"
            style={toggle === true ? { display: "none" } : { display: "block" }}
          >
            <ul>
              <li>
                <Link to="">
                  Account <i class="fas fa-external-link-alt"></i>
                </Link>
              </li>
              <li>
                <Link to="/userhome/profile">Profile </Link>
              </li>
              <li>
                <Link to="">
                  Upgrade to Premium <i class="fas fa-external-link-alt"></i>
                </Link>
              </li>
              <li>
                <a onClick={logOut}>Log out</a>
              </li>
            </ul>
          </div>
        </li>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <nav>
        <ul>{AUTH ? <AuthenticatedUser /> : <AnnonymousUser />}</ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
