import { useContext } from "react";
import {ContextCard} from '../context/card'

export const useCard = ()=>{
    const context = useContext(ContextCard)
    console.log(context);
    if(context === undefined){
        throw new Error("useCard debe se usado con CardProvider")
    }

    return context
}