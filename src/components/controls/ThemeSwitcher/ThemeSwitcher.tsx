import { useState, useEffect } from "react";
import IconSVG from "../../controls/IconSVG/IconSVG";

const ThemeSwitcher = () => {
  const [darkmode, setDarkmode] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }

    localStorage.setItem("darkmode", darkmode.toString());
  }, [darkmode]);

  const handleDarkmodeChange = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <div className="theme-switcher">
      {!darkmode ? (
        <button className="theme-changer" onClick={handleDarkmodeChange}>
          <IconSVG name={"moon"} />
          <span className="theme-changer-text">Dark Mode</span>
        </button>
      ) : (
        <button className="theme-changer" onClick={handleDarkmodeChange}>
          <IconSVG name={"sun"} />
          <span className="theme-changer-text">Light</span>
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
