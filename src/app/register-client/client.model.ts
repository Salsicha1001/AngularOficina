

export interface Client{
    NAME:string
    CPF:number
    DATE:any
    TELL:number
    EMAIL:string,
    PEOPLE:string,
    CEP?:{numero?:number,complemento?:string}
    id?:any,
}

