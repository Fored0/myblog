import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  DatabaseOutlined,
  EditOutlined,
  BulbOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuItems = [
  {
    key: "/home",
    icon: <HomeOutlined />,
    label: "home",
    // children:'',
  },
  {
    key: "/blogList",
    icon: <DatabaseOutlined />,
    label: "blogList",
  },
  {
    key: "/release",
    icon: <BulbOutlined />,
    label: "release",
  },
  {
    key: "/user",
    icon: <UserOutlined />,
    label: "user",
  },
  {
    key: "/write",
    icon: <EditOutlined />,
    label: "write",
  },
];

function Menus() {
  const navigate = useNavigate();
  const currentRender = (e: any) => {
    navigate(`${e.key}`);
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      // openKeys={openKeys}
      // onOpenChange={onOpenChange}
      // style={{ width: 256 }}
      items={MenuItems}
      onClick={(e) => {
        currentRender(e);
      }}
    />
  );
}

export default Menus;
