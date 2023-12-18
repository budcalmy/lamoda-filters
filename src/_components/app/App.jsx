import Header from "../header/header";
import OrderLine from "../orderLine/orderLine";
import Filters from "../filters/Filters";
import ProductsGrid from "../products/ProductsGrid";
import LiveSearch from "../orderLine/live-search/LiveSearch.jsx";
import productsList from "../../productsList.js";

import "./App.css";
import { useCallback, useState } from "react";


export default function App() {

  const [filters, setFilters] = useState({ colors: [], types: [], order: "", priceRange: [0, 10000] });
  const [afterSearchProductsList, setAfterSearchProductsList] = useState(productsList);

  const handleAfterSearchProducts = useCallback((data) => {
    setAfterSearchProductsList(() => {
      return data;
    })
  }, [setAfterSearchProductsList])

  const handleColorsTypes = useCallback((data) => {
    setFilters((prev) => {
      return {
        colors: data.colors,
        types: data.types,
        order: prev.order,
        priceRange: data.priceRange
      };
    });
  }, [setFilters]);

  const handleOrder = useCallback((data) => {
    setFilters((prev) => {
      return {
        colors: prev.colors,
        types: prev.types,
        order: data.order,
        priceRange: prev.priceRange
      };
    });
  }, [setFilters]);

  
  return (
    <section className="main-app-section">
      <Header></Header>
      <div className="orderLine_liveSearch-container">
        <OrderLine handleFilters={handleOrder}></OrderLine>
        <LiveSearch handleGetProducts={handleAfterSearchProducts}></LiveSearch>
      </div>
      <section className="filters_content">
        <Filters handleFilters={handleColorsTypes}></Filters>
        {filters !== null ? (
          <ProductsGrid filters={filters} resultProducts={afterSearchProductsList}></ProductsGrid>
        ) : null}
      </section>
    </section>
  );
}
