import { Veiculo } from './veiculo.model';
export interface Client{
    Name:string
    Cpf:number
    Dates:any
    Tell:number
    Email:string,
    people:string,
    id?:any,
    Carro?:Veiculo[]| string[]
}
