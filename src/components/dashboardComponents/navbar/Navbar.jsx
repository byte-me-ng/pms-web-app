import * as React from "react";
import { DesktopNavbar } from "./desktopNavbar/DesktopNavbar";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import Box from "@mui/material/Box";
import { Sidebar } from "./sidebar/Sidebar";

export const Navbar = ({ mainContent }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <DesktopNavbar />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileNavbar handleDrawerToggle={handleDrawerToggle} />
      </Box>

      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        mainContent={mainContent} //content to be displayed in page is passed here
      />
    </Box>
  );
};
