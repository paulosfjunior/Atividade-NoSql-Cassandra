export interface Customer{
    name:string
    address:string;
    email:string;
    pass:string;
    role:"admin"|"normal"
}
export interface Item{
    name:string;
    desc:string;
    price:string;
}
export interface Cart{
    payment?:string;
    customer:Customer;
    items:Item[]
    enable:boolean
}