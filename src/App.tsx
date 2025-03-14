import { useCallback, useEffect, useState } from "@lynx-js/react";

import home from "./assets/icons/home.png";
import user from "./assets/icons/user.png";
import note from "./assets/icons/note.png";
import calendar from "./assets/icons/calendar.png";

import homeActive from "./assets/icons/active/home.png";
import userActive from "./assets/icons/active/user.png";
import noteActive from "./assets/icons/active/note.png";
import calendarActive from "./assets/icons/active/calendar.png";

import "./styles/App.css";
import HomePage from "./screens/HomePage.jsx";
import Tabs from "./components/Tabs.jsx";

export function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <view>
      <view className="Background" />
      <view className="App">
        <HomePage />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          <view>
            <image
              className="icon-image"
              src={activeTab === 0 ? homeActive : home}
            />
          </view>
          <view>
            <image
              className="icon-image"
              src={activeTab === 1 ? calendarActive : calendar}
            />
          </view>
          <view>
            <image
              className="icon-image"
              src={activeTab === 2 ? noteActive : note}
            />
          </view>
          <view>
            <image
              className="icon-image"
              src={activeTab === 3 ? userActive : user}
            />
          </view>
        </Tabs>
      </view>
    </view>
  );
}
