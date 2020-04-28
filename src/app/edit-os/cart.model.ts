export interface Cart{
    id?:number,
    idos?:number,
    status?:string
    item:[{PRECODEVENDA?:number,NOME?:string, CODVERIF?:number}],
    totalQtd:number,
    totalPrice:number,
    CODVERIF?:number
    

}