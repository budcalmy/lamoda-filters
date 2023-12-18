import { useEffect, useState } from "react";

import productsList from "../../../productsList.js";

import "./LiveSearch.css"

import searchImage from "./searchImage.png";

const filterProducts = (searchText, data) => {
  if (!searchText) {
    return data;
  }

  return data.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase());
  });
};

const LiveSearch = ({ handleGetProducts }) => {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const result = filterProducts(searchItem, productsList);
      handleGetProducts(result);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchItem, handleGetProducts]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchItem}
        autoFocus
        autoComplete="off"
        placeholder={"Поиск"}
        onChange={(e) => setSearchItem(e.target.value)}
        className="search-form_txt"
      />
      <div className="search-input-image-div">
        <img src={searchImage} alt="search" />
      </div>
    </div>
  );
};

export default LiveSearch;
