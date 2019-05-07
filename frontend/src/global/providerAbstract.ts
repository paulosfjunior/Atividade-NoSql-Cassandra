import { Customer, Item, Cart } from "../interfaces";

export abstract class DefaultCustomerProvider{
    public abstract list(qtn?:number):Customer[]
    public abstract insert(customer:Customer):void
    public abstract edit(newcustomer:Customer,oldCustomer:Customer):void
    public abstract remove(customer:Customer):void
    public abstract tryLogin(email:string, pass:string):Customer
}
export abstract class DefaultItemProvider{
    public abstract list(qtn?:number):Item[]
    public abstract insert(customer:Item)
    public abstract edit(newcustomer:Item,oldCustomer:Item)
    public abstract remove(customer:Item)
}
export abstract class DefaultCartProvider{
    public abstract list(qtn?:number):Cart[]
    public abstract insert(customer:Cart)
    public abstract edit(newcustomer:Cart,oldCustomer:Cart)
    public abstract remove(customer:Cart)
}
