import "./priceSlider.css"
import React, { useCallback, useEffect, useState } from "react"
import handleRangeInput from "./handleRangeInput"

const PriceSlider = ({handleSetPriceRange}) => {

    const [priceValues, setPriceValues] = useState([0, 10000]);

    const handler = useCallback(() => {
        setPriceValues(handleRangeInput)
    }, [])

    useEffect(() => {
        setTimeout(handleSetPriceRange(priceValues.map((val) => Number(val))), 2000)

        const Debounce = setTimeout(() => {
            handleSetPriceRange(priceValues.map(val => Number(val)));
        }, 300);

        return () => clearTimeout(Debounce);
    }, [priceValues, handleSetPriceRange])


    return (
        <div className="slider-block-wrapper">
            <p className="price-splider-header">Цена:</p>
            <div className="price-input">
                <div className="field">
                    <span>от</span>
                    <input type="number"  className="input-min" defaultValue={0} onChange={handler}/>
                </div>
                <div className="field">
                    <span>до</span>
                    <input type="number"  className="input-max" defaultValue={10000} onChange={handler}/>
                </div>
            </div>
            <div className="slider">
                <div className="progress"></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min={0} max={10000} defaultValue={0} onChange={handler}/>
                <input type="range" className="range-max" min={0} max={10000} defaultValue={10000} onChange={handler}/>
            </div>
        </div>
    )
}

export default React.memo(PriceSlider);