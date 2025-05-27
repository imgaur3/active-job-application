import { JSX } from "react";

export interface IRoute {
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element: any;
    layout: (props: { children: JSX.Element }) => JSX.Element;
    exact?: boolean;
  }
  
  export interface ISagaAction<T> {
    payload: T;
    type: string;
  }
  