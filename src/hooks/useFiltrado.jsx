  import { useContext} from "react"
import { FiltersContext } from "../context/filters" 

export const useFiltrado = ()=>{

    const {filters, setFilters} = useContext(FiltersContext)  
  
    const filtrando = (products) => {
      return products.filter((product) => {
        return product.price > filters.minPrice && 
        (filters.category == 'all' || 
        product.category == filters.category
        )
       })
    }
    return{filtrando,filters, setFilters}
  }