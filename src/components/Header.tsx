import { useCallback, useEffect, useState } from "@lynx-js/react";

import lynxLogo from "../assets/lynx-logo.png";
import notification from "../assets/icons/notification.png";
import menu from "../assets/icons/menu.png";
const Header = () => {
  const [name, setName] = useState("John Doe");
  const handleNotification = () => {
    setName("Jane Doe");
  };
  return (
    <view className="App-header">
      <view className="Header">
        <view className="Profile-container">
          <image className="Profile-image" src={lynxLogo} />
        </view>
        <view>
          <text className="Header-span">Welcome Back,</text>
          <text className="Header-name">{name}</text>
        </view>
      </view>
      <view className="Nav-btns">
        <view bindtap={handleNotification}>
          <image className="Nav-btn" src={notification} />
        </view>
        <view>
          <image className="Nav-btn" src={menu} />
        </view>
      </view>
    </view>
  );
};

export default Header;
