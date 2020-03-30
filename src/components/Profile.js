import React from "react";
import { Link } from "gatsby";

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/Dashboard/secret" activeClassName="active">
          Secret Stuff
        </Link>
        <Link to="/Dashboard/base" activeClassName="active">
          See Your Base
        </Link>
      </nav>
      <span>TODO show login status</span>
    </div>
  );
};

export default Profile;
