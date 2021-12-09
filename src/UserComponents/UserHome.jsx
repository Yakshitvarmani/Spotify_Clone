import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./userBlock.css";

const UserHome = () => {
  return (
    <section className="userBlock">
      <article>
        <UserLeftBlock />
        <UserRightBlock />
      </article>
    </section>
  );
};

export default UserHome;
