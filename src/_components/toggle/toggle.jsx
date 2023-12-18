import React from "react";
import styles from "./toggle.scss";

const Toggle = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <label className="switch">
      <input
        type="checkbox"
        className="switch__input"
        id="toggler"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className="switch__slider"></span>
    </label>
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
);

export default Toggle;
