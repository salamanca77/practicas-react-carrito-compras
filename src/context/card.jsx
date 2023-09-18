import { createContext, useState } from "react";

export const ContextCard = createContext()

export const CardProvider = ({ children }) => {

    const [card, setCard] = useState([])

    const addToCard = (products) => {

        const productCardindex = card.findIndex((item) => item.id === products.id)

        if (productCardindex >= 0) {
            const newCard = structuredClone(card)
            newCard[productCardindex].quantity += 1
            return setCard(newCard)
        }

        setCard(prevState => ([...prevState, { products, quantity: 1 }]))
    }

    const clearCard = () => {
        setCard([])
    }

    return (
        <ContextCard.Provider value={{
            card,addToCard, clearCard
        }}>
            {children}
        </ContextCard.Provider>
    )
}
