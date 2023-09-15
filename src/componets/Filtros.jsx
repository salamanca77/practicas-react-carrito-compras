import { useState } from "react"

export function Filtros({parSetFilters}){

    const [minPrice, setMinPrice] = useState(0)

    const hadleChangePrice = (e)=>{
        setMinPrice(e.target.value)
    
        parSetFilters((prevState)=>({...prevState, minPrice:e.target.value}))
    }
    
    const hadleChangeCategory = (e)=>{
        parSetFilters((prevState)=>({...prevState, category: e.target.value}))
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