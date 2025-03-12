import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./styles/App.css";
import HomePage from "./screens/HomePage.jsx";

export function App() {
  return (
    <view>
      <view className="Background" />
      <view className="App">
        <HomePage />
      </view>
    </view>
  );
}
