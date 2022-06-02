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
        <Avatar className="head-img" src="https://joeschmoe.io/api/v1/random" />
      </Popover>
    </div>
  );
}

export default Head;
