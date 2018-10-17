import React from "react";
import UserInfo from "./UserInfo";
import { AuthContext } from "./auth/AuthContext";

const UserPage = props => {
  return (
    <div>
      <UserInfo token={props.sessionToken} />
    </div>
  );
};

export default props => (
  <AuthContext.Consumer>
    {auth => <UserPage {...props} auth={auth} />}
  </AuthContext.Consumer>
);
