import {AddToCartIcon} from './Icons'
import { useCard } from '../hooks/useCard';

export function Productos({products}){
    const {addToCard, card} = useCard()     
    // console.log(card);

    // console.log(products);


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
                        <div>
                            <button ><AddToCartIcon /></button>    
                        </div>  
                    </li>                    
                ))}
            </ul>
        </div>
    )   
}


