import React, { ReactNode } from "react";
import { AppBarContainer, Drawer } from "../components";
import { Box } from "@mui/material";
import Notification from "../views/notification";

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box className="flex">
      <Drawer />
      <Box className="flex flex-col w-full h-[calc(100vh-0px)] overflow-auto bg-[#ffffff] pb-0 ">
        <Box className="w-full rounded- py-[10px] px-[30px] h-full overflow-y-auto max-md:rounded-tl-none max-md:p-0 max-md:bg-white">
          <AppBarContainer />
          {children}
        </Box>
      </Box>
      <Notification />
    </Box>

  )
}

export default MainLayout;  