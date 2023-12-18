import React from "react";
import "./Product.css"

const spanStyle = {
    fontWeight: "bold",
}

const Product = ({imageSrc, name, info, color, category, price, rate}) => {

    return (
        <div className="product-block">
            <div className="image-part">
                <img src={imageSrc} alt="image-product" />
            </div>
            <div className="info-part">
                <p className="name">{name}</p>
                <p className="info">{info}</p>
                <p className="color"><span style={spanStyle}>Цвет:</span> {color}</p>
                <p className="category"><span style={spanStyle}>Категория:</span> {category}</p>
                <p className="price"><span style={spanStyle}>Цена:</span> {price}</p>
                <p className="rate"><span style={spanStyle}>Рейтинг:</span> {rate}</p>
            </div>
        </div>
    )
}

export default Product;