import { useCallback, useState } from "react";
import handleRangeInput from "./handleRangeInput"

export default function usePriceInput(defaultValue = [0, 10000]) {
    const [value, setValue] = useState(defaultValue);
    const handler = useCallback(setValue(handleRangeInput), []);

    return [value, handler, setValue]
}