export function Productos({products}){
    
    console.log(products);
    return(
        <div>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            {product.title}
                        </div>-${product.price}
                        <div>
                            {product.category}
                        </div>  
                    </li>                    
                ))}
            </ul>
        </div>
    )   
}


