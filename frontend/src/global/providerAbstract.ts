import { Customer, Item, Cart } from "../interfaces";

export abstract class DefaultCustomerProvider{
    public abstract list(qtn?:number)
    public abstract insert(customer:Customer)
    public abstract edit(newcustomer:Customer,oldCustomer:Customer)
    public abstract remove(customer:Customer)
}
export abstract class DefaultItemProvider{
    public abstract list(qtn?:number)
    public abstract insert(customer:Item)
    public abstract edit(newcustomer:Item,oldCustomer:Item)
    public abstract remove(customer:Item)
}
export abstract class DefaultShopProvider{
    public abstract list(qtn?:number)
    public abstract insert(customer:Cart)
    public abstract edit(newcustomer:Cart,oldCustomer:Cart)
    public abstract remove(customer:Cart)
}
