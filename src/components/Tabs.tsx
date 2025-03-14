import { useState } from "@lynx-js/react";
import "../styles/Tabs.css";
interface TabsProps {
  children: React.ReactElement[];
  activeTab?: number;
  setActiveTab?: (index: number) => void;
}
const Tabs: React.FC<TabsProps> = ({
  children,
  activeTab,
  setActiveTab = () => {},
}) => {
  //   const [activeTab, setActiveTab] = useState(0);

  return (
    <view className="tabs-container">
      {/* First 4 children in the main tabs view */}
      <view class="tabs">
        {Array.isArray(children) &&
          children.slice(0, 3).map((child, index) => (
            <view
              key={index}
              bindtap={() => setActiveTab(index)}
              style={{
                backgroundColor:
                  activeTab === index ? "#000000" : "transparent",
              }}
              className="tab"
            >
              {child}
            </view>
          ))}
      </view>

      {Array.isArray(children) && children.length > 3 && (
        <view class="last-tab">
          <view
            bindtap={() => setActiveTab(3)}
            style={{
              backgroundColor: activeTab === 3 ? "#000000" : "transparent",
            }}
            className="tab"
          >
            {children[3]}
          </view>
        </view>
      )}
    </view>
  );
};

export default Tabs;
