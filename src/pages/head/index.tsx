import React, { useState } from "react";
import { Avatar, Popover } from "antd";
import UserContent from "./components/userContent";
import "./index.css";

function Head() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisibleChange = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <span className="head-title" >我的博客</span>
      <Popover
        className="head-popover"
        content={<UserContent />}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Avatar className="head-img" src="https://img0.baidu.com/it/u=1694074520,2517635995&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
      </Popover>
    </div>
  );
}

export default Head;
