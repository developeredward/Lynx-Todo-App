import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./styles/App.css";
import Header from "./components/Header.jsx";

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <Header />
      </view>
    </view>
  );
}
