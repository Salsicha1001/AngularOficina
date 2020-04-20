export interface Cart{
    id?:number,
    idos?:number
    item:[{PRECODEVENDA?:number,NOME?:string}],
    totalQtd:number,
    totalPrice:number,
    CODVERIF?:number

}