import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet

const StartLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StartLayout;
