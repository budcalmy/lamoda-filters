import React, { useCallback, useState, useMemo } from "react";
import "./orderLine.css";

const OrderLine = ({ handleFilters }) => {
  const [orderType, setOrderType] = useState(
    localStorage.getItem("orderType") === null ||
      localStorage.getItem("orderType").length === 0
      ? ""
      : localStorage.getItem("orderType")
  );

  const handleSetOrderType = useCallback((e) => {
    Array.from(e.target.parentNode.children).forEach((child) => {
      if (Array.from(child.classList).includes("enabled")) {
        child.classList.remove("enabled");
      }
    });

    setOrderType((prev) => {
      if (prev === e.target.id) {
        e.target.classList.remove("enabled");
        localStorage.setItem("orderType", []);
        return "";
      }
      e.target.classList.add("enabled");
      localStorage.setItem("orderType", e.target.id);
      return e.target.id;
    });
  }, []);

  useMemo(() => {
    handleFilters({
      order: orderType,
    });
  }, [orderType, handleFilters]);

  return (
    <section className="search-bar-section">
      <div
        className={
          orderType === "lower" ? "lower-price enabled" : "lower-price"
        }
        onClick={handleSetOrderType}
        id="lower"
      >
        <p>Сначала дешевые</p>
      </div>
      <div
        className={
          orderType === "higher" ? "higher-price enabled" : "higher-price"
        }
        onClick={handleSetOrderType}
        id="higher"
      >
        <p>Сначала дорогие</p>
      </div>
      <div
        className={orderType === "rating" ? "rating enabled" : "rating"}
        onClick={handleSetOrderType}
        id="rating"
      >
        <p>Сначала популярные</p>
      </div>
    </section>
  );
};

export default React.memo(OrderLine);
