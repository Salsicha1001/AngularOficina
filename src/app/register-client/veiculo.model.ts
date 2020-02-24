import { Client } from './client.model';
export interface Veiculo{
    Modelo:string
    Ano:number
    Marca:any
    KM:number
    Cor:string,
    Placa:any
    id?:any
    user:Client[] |string[]  
}