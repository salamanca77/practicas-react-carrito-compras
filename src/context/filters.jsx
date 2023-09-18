import { createContext } from "react";
import { useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 30
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

