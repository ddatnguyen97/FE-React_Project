import "./App.css";
import React from "react";
import Header from "./Components/header";
import SideBar from "./Components/sidebar";
import Content from "./Components/content";
import { useState } from "react";
// import Layout from "antd/es/layout/layout";
import { Layout } from "antd";

function App() {
  const [contentColor, setContentColor] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");

  const handleContentColor = (newColor) => {
    setContentColor(newColor);
  };

  const handleSelectedMenu = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar
        style={{
          height: "100%",
          textAlign: "center",
          lineHeight: "120px",
        }}
        onSelectedMenu={handleSelectedMenu}
      >
        Sider
      </SideBar>

      <Layout>
        <Header onColorChange={handleContentColor}></Header>
        <Content
          backgroundColor={contentColor}
          selectedMenuItem={selectedMenuItem}
        >
          {/* {selectedMenuItem === "home" && "Content for Home"}
          {selectedMenuItem === "table" && "Content for Table"} */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
