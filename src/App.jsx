import { Header } from "./componets/Header"
import { Productos } from "./componets/Productos"
import { products as inicioProductos } from "./datos/db.json"
import { useState } from "react"


const useFiltrado = ()=>{
  
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 30
  })
  
  
  const filtrando = (products) => {
    return products.filter((product) => {
      return product.price > filters.minPrice && 
      (filters.category == 'all' || 
      product.category == filters.category
      )
     })
  }
  return{filtrando, setFilters}
}

function App() {

  const [products] = useState(inicioProductos)
  
  const {filtrando, setFilters} = useFiltrado()

  const filtrados = filtrando(products)

  return (
    <>
      <Header parSetFilters={setFilters} />
      <Productos products={filtrados} />
    </>
  )
}

export default App













