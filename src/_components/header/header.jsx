import React from "react";
import "../header/header.css";

import logoImage from "./blamoda.svg";
import whiteLogoImage from "./blamoda-white.svg";
import moonImage from "../toggle/moon.png";
import sunImage from "../toggle/sun.png";
// import busketIcon from "./basket.png";

import { ThemeContext, themes } from "../../_contexts/ThemeContext";
import Toggle from "../toggle/toggle";

const Header = (props) => {
  return (
    <section className="main-header-section">
      <div className="dark-theme-toggle">
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
          {(theme) => {
            if (theme.theme === "light")
              return <img src={moonImage} alt="moonImage" />;
            else return <img src={sunImage} alt="sunImage" className="sun"/>;
          }}
        </ThemeContext.Consumer>
      </div>

      <div className="logo-image">
        <ThemeContext.Consumer>
          {(theme) => {
            if (theme.theme === "light")
              return <img src={logoImage} alt="logoImage" />;
            else return <img src={whiteLogoImage} alt="whiteLogoImage" />;
          }}
        </ThemeContext.Consumer>
      </div>

      {/* <div className="btn-plus-basket">
        <div className="login-button">
          <p>Войти</p>
        </div>

        <div className="basket">
          <img src={busketIcon} alt="busketIcon" />
          <p>Корзина</p>
        </div>
      </div> */}
    </section>
  );
};

export default React.memo(Header);
