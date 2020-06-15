export interface Cart{
    id?:number,
    idos?:number,
    status?:string
    item:[{PRECODEVENDA?:number,NOME?:string, CODVERIF?:number, GANHOFUN?:number, GANHODONO?:number}],
    totalQtd:number,
    totalPrice:number,
    CODVERIF?:number,
    GANHOFUN?:number
    LUCRO?:number
    

}