import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router";

const Register = () => {
  return (
    <Box>
        Back to Login
        <Link to={'/sign-in'}>Login</Link>
    </Box>
  )
}

export default Register;