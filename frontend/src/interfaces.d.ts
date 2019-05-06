export interface Customer{
    name:string
    address:string;
    email:string;
    pass:string;
    rule:"admin"|"normal"
}
export interface Item{
    name:string;
    desc:string;
    price:string;
}
export interface Cart{
    customer:Customer;
    items:Item[]
    enable:boolean
}