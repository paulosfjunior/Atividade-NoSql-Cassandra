export interface Customer{
    name:string
    address:string;
    email:string;
    pass:string;
}
export interface Item{
    name:string;
    desc:string;
    price:string;

}
export interface Client{
    customer:Customer;
    items:Item[]
    
}