import React, { useState, useEffect } from "react";

function User() {
  const [userInfo, setUserInfo] = useState<any>();
  useEffect(() => {
    const localUserInfo = localStorage.getItem("userInfo");
    if (localUserInfo) {
      setUserInfo(JSON.parse(localUserInfo));
    }
  }, []);
  console.log(userInfo);
  return (
    <div>
      <div>{userInfo && userInfo.name}</div>
    </div>
  );
}

export default User;
