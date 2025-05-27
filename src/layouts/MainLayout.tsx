import React,{ ReactNode } from "react";
import { Drawer } from "../components";
import { Box } from "@mui/material";

type Props = {
    children: ReactNode;
}

const MainLayout = ({children}: Props) => {
    return (
       <Box className="flex">
          <Drawer />
          <Box className="flex flex-col w-full h-[calc(100vh-0px)] overflow-auto bg-[#ffffff] pb-0 ">
            <Box className="w-full rounded- p-[45px] h-full overflow-y-auto max-md:rounded-tl-none max-md:p-0 max-md:bg-white">
              {children}
            </Box>
          </Box>
       </Box>

    )
}

export default MainLayout;  