import React from 'react';
import AuthLayout from "../../../layouts/AuthLayout";
import LogIn from "./LogIn";

export const LogInRoutes = {
    path: '/login',
    exact: true,
    element: LogIn,
    layout: ({ children }: { children: React.ReactNode }) => <AuthLayout>{children}</AuthLayout>,

};