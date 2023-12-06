import React from "react";
import HomePage from "../Pages/home";
import TablePage from "../Pages/table";

const CustomeContent = ({ backgroundColor, selectedMenuItem }) => {
  // const contentList = {
  //   home: "Content for Home",
  //   table: "Content for Table",
  // };
  return (
    <div style={{ backgroundColor, height: "100%" }}>
      {selectedMenuItem === "home" && <HomePage />}
      {selectedMenuItem === "table" && <TablePage />}
    </div>
  );
};

export default CustomeContent;
