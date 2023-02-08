import React from "react";
import FirstTab from "./coponents/FirstTab";
import SecondTab from "./coponents/SecodTab";

const Tabs = (props: {
  activeTab: "tab1" | "tab2";
  setActiveTab: React.Dispatch<React.SetStateAction<"tab1" | "tab2">>;
}) => {
  console.log("Tabs re render");
  const { activeTab, setActiveTab } = props;
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          onClick={() => setActiveTab("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Tab 1
        </li>
        <li
          onClick={() => setActiveTab("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          Tab 2
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
