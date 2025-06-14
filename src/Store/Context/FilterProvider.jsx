import React, { Children } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterContext, SetFilterContext } from "../../Context";

export default function FilterProvider({ children }) {
    const [searchParams, setSearchParams] = useSearchParams("product") || "";
    return (
        <FilterContext.Provider value={searchParams}>
            <SetFilterContext.Provider value={setSearchParams}>
                {children}
            </SetFilterContext.Provider>
        </FilterContext.Provider>
    );
}
