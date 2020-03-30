import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import Profile from "../components/Profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/Dashboard\/?$/)) {
      navigate("/Dashboard/login", { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/Dashboard/base" />
        <RouteSecret path="/Dashboard/secret" />
        <RouteLogin path="/Dashboard/login" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
