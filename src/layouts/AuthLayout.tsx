import React from "react";
import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
    children: ReactNode;
}
const AuthLayout = ({children}: Props) => {
    return (
        <>
            <Box className="flex flex-col justify-center items-center h-screen">
                {children}
            </Box>
        </>
    )
}

export default AuthLayout;  