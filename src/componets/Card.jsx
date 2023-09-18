import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import './Cart.css'

export function Card() {

    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}><CartIcon /></label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="Iphone" />
                        <div><strong>iPhone</strong></div>
                        <footer>
                            <small>Qty:1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button><ClearCartIcon /></button>
            </aside>
        </>
    )
}