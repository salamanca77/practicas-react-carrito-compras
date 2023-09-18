import { useState } from "react"
import { useFiltrado } from "../hooks/useFiltrado"

export function Filtros(){

    const {filters, setFilters} = useFiltrado() 
    
    // console.log(filters);
    const hadleChangePrice = (e)=>{
    
        setFilters((prevState)=>({...prevState, minPrice:e.target.value}))
    }
    
    const hadleChangeCategory = (e)=>{
        setFilters((prevState)=>({...prevState, category: e.target.value}))
    }

    return(
        <section>
            <div>
                <label htmlFor="price">Precio a partir de</label>
                <input id="price" value={filters.minPrice} type="range" min='0' max='1000' onChange={hadleChangePrice} />
                <span>${filters.minPrice}</span>
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