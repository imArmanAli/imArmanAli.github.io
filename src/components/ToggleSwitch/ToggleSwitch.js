import React, { useState, useEffect, useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const styleContext = useContext(StyleContext);
  const { isDark } = styleContext;
  const [isChecked, setChecked] = useState(isDark);

  // Sync isChecked with isDark whenever isDark changes
  useEffect(() => {
    setChecked(isDark);
  }, [isDark]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
