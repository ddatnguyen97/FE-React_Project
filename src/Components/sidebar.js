import React from "react";
import { Layout } from "antd";
import { useState } from "react";
import { Menu } from "antd";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { BiTable } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";

const { Sider } = Layout;

const CustomeSidebar = ({ onSelectedMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (item) => {
    onSelectedMenu(item.key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={!isOpen}>
      <div
        className={`sidebar ${isOpen ? "active" : ""}`}
        style={{ height: "100%" }}
      >
        <div
          className="sd-top"
          style={{
            height: 60,
            display: "flex",
            color: "#FFFFFF",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Sidebar</p>
          <button
            className="btn btn-primary"
            onClick={toggleSidebar}
            style={{
              width: 30,
              height: 30,
            }}
          >
            {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
          </button>
        </div>
        <div className="sd-body">
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={["home"]}
            onClick={handleMenuClick}
          >
            <Menu.Item key="home" icon={<GoHomeFill />}>
              Home
            </Menu.Item>
            <Menu.Item key="table" icon={<BiTable />}>
              Table
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Sider>
  );
};

export default CustomeSidebar;
