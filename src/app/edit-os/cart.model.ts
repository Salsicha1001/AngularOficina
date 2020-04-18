export interface Cart{
    id?:number,
    item:[{PRICE?:number}],
    totalQtd:number,
    totalPrice:number
}