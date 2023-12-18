import React, {useEffect, useState} from "react";
import "./ProductsGrid.css";
import productsList from "../../productsList.js";
import Product from "./Product";

const ProductsGrid = ({ filters, resultProducts }) => {

  const [PRODUCTS, setProducts] = useState(resultProducts);

  useEffect(() => {
    setProducts(() => {
      return resultProducts;
    })
  }, [resultProducts])

  if (filters.order) {
    switch (filters.order) {
      case "lower":
        PRODUCTS.sort((first, second) => {
          return first.price - second.price;
        });
        break;
      case "higher":
        PRODUCTS.sort((first, second) => {
          return second.price - first.price;
        });
        break;
      case "rating":
        PRODUCTS.sort((first, second) => {
          return second.rate - first.rate;
        });
        break;
      case "":
        PRODUCTS.sort(() => {
          return 0.5 - Math.random();
        });
        break;
      default:
        break;
    }
  }

  return (
    <section className="products-section">
      {PRODUCTS.map((pr) => {
        if (filters.priceRange[0] <= pr.price && pr.price <= filters.priceRange[1]) {
          if (filters.colors.length === 0 && filters.types.length > 0) {
            if (filters.types.includes(pr.category)) {
              return (
                <Product
                  key={pr.info}
                  name={pr.name}
                  info={pr.info}
                  imageSrc={pr.imageSrc}
                  price={pr.price}
                  color={pr.color}
                  category={pr.category}
                  rate={pr.rate}
                ></Product>
              );
            }
          } else if (filters.colors.length > 0 && filters.types.length === 0) {
            if (filters.colors.includes(pr.color)) {
              return (
                <Product
                key={pr.info}
                  name={pr.name}
                  info={pr.info}
                  imageSrc={pr.imageSrc}
                  price={pr.price}
                  color={pr.color}
                  category={pr.category}
                  rate={pr.rate}
                ></Product>
              );
            }
          } else if (filters.colors.length > 0 && filters.types.length > 0) {
            if (
              filters.colors.includes(pr.color) &&
              filters.types.includes(pr.category)
            ) {
              return (
                <Product
                key={pr.info}
                  name={pr.name}
                  info={pr.info}
                  imageSrc={pr.imageSrc}
                  price={pr.price}
                  color={pr.color}
                  category={pr.category}
                  rate={pr.rate}
                ></Product>
              );
            }
          } else {
            return (
              <Product
              key={pr.info}
                name={pr.name}
                info={pr.info}
                imageSrc={pr.imageSrc}
                price={pr.price}
                color={pr.color}
                category={pr.category}
                rate={pr.rate}
              ></Product>
            );
          }
        }
      })}
    </section>
  );
};

export default React.memo(ProductsGrid);
