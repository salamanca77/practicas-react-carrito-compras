import { Header } from "./componets/Header"
import { Productos } from "./componets/Productos"
import { useFiltrado } from "./hooks/useFiltrado"
import { products as inicioProductos } from "./datos/db.json"
import { useState } from "react"
  
function App() {

  const [products] = useState(inicioProductos)
  
  const {filtrando} = useFiltrado()

  const filtrados = filtrando(products)

  return (
    <>
      <Header />
      <Productos products={filtrados} />
    </>
  )
}

export default App













