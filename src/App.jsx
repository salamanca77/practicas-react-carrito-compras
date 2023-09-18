import { Header } from "./componets/Header"
import { Productos } from "./componets/Productos"
import { useFiltrado } from "./hooks/useFiltrado"
import { products as inicioProductos } from "./datos/db.json"
import { useState } from "react"
import { Card } from "./componets/Card"  
import { CardProvider } from "./context/card"

function App() {

  const [products] = useState(inicioProductos)
  
  const {filtrando} = useFiltrado()

  const filtrados = filtrando(products)

  return(
    <CardProvider>
       <Card />
      <Header />
      <Productos products={filtrados} />
    </CardProvider>
  )
}

export default App













