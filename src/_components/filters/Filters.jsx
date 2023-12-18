import React, { useCallback, useMemo, useState } from "react";
import constants from "../../constants.js";
import CustomCheckbox from "./custom_checkbox/CustomCheckbox.jsx";
import PriceSlider from "../filters/price_slider/priceSlider";

import "./Filters.css";

const Filters = ({ handleFilters }) => {

  const [enabledColors, setEnabledColors] = useState(
    localStorage.getItem("enabledColors") === null ||
      localStorage.getItem("enabledColors").length === 0
      ? []
      : localStorage.getItem("enabledColors").split(",")
  );

  const [enabledTypes, setEnabledTypes] = useState(
    localStorage.getItem("enabledTypes") === null ||
      localStorage.getItem("enabledTypes").length === 0
      ? []
      : localStorage.getItem("enabledTypes").split(",")
  );
  
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const sendFilters = useMemo(() => {
    handleFilters({
      colors: enabledColors,
      types: enabledTypes,
      priceRange: priceRange,
    });
  }, [enabledColors, enabledTypes, priceRange, handleFilters]);

  const handleSetColors = useCallback((id) => {
    setEnabledColors((prev) => {
      if (!prev.includes(id)) {
        localStorage.setItem("enabledColors", prev.concat([id]));
        return prev.concat([id]);
      }
      prev = prev.filter((el) => el !== id);
      localStorage.setItem("enabledColors", prev);
      return prev;
    });

  }, []);

  const handleSetTypes = useCallback((id) => {
    setEnabledTypes((prev) => {
      if (!prev.includes(id)) {
        localStorage.setItem("enabledTypes", prev.concat([id]));
        return prev.concat([id]);
      }
      prev = prev.filter((el) => el !== id);
      localStorage.setItem("enabledTypes", prev);
      return prev;
    });  
  }, []);

  const handleSetPriceRange = useCallback((price) => {
    setPriceRange(() => {
      return price;
    })
  }, [])


  return (
    <section className="filters-section">
      <div className="colors-block">
        <div className="color-header">
          <p>По цвету</p>
        </div>
        <div className="colors-filters">
          {constants.colors.map((color) => {
            return (
              <div className="filter-div-color" key={color + "_div"}>
                <CustomCheckbox
                  key={color}
                  id={color}
                  onClick={handleSetColors}
                  isChecked={enabledColors.includes(color) ? true : false}
                ></CustomCheckbox>
                <p key={color + "_p"}>{color}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="types-block">
        <div className="types-header">
          <p>По типу</p>
        </div>
        <div className="types-filters">
          {constants.types.map((type) => {
            return (
              <div className="filter-div-type" key={type + "_div"}>
                <CustomCheckbox
                  key={type}
                  id={type}
                  onClick={handleSetTypes}
                  isChecked={enabledTypes.includes(type) ? true : false}
                ></CustomCheckbox>
                <p key={type + "_p"}>{type}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="price-block">
        <PriceSlider handleSetPriceRange={handleSetPriceRange}></PriceSlider>
      </div>
    </section>
  );
};

export default React.memo(Filters);
