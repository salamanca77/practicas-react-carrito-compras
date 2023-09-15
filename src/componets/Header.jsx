import {Filtros} from './Filtros'

export function Header({parSetFilters}){
    return(
        <header>
            <h1>Reac shop</h1>
            <Filtros parSetFilters={parSetFilters}/>
        </header> 
    )
}