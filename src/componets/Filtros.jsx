import { useState } from "react"
import { useFiltrado } from "../hooks/useFiltrado"

export function Filtros(){

    const {filtrando, setFilters} = useFiltrado 

     const [minPrice, setMinPrice] = useState(0)

    const hadleChangePrice = (e)=>{
        setMinPrice(e.target.value)
    
        setFilters((prevState)=>({...prevState, minPrice:e.target.value}))
    }
    
    const hadleChangeCategory = (e)=>{
        setFilters((prevState)=>({...prevState, category: e.target.value}))
    }

    return(
        <section>
            <div>
                <label htmlFor="price">Precio a partir de</label>
                <input id="price" type="range" min='0' max='1000' onChange={hadleChangePrice} />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category"></label>
                <select name="" id="category" onChange={hadleChangeCategory}>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                    <option value="all">Todas</option>
                </select>
            </div>
        </section>
    )

}