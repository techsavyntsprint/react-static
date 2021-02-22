import React from "react";

import AntdCard from "../components/card/antdCard";
import LoginForm from "../components/loginForm/loginForm";

const cardStyle = {
  width: 400,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const Login = () => {
  return (
    <AntdCard title="Login" style={cardStyle}>
      <LoginForm />
    </AntdCard>
  );
};

export default Login;
