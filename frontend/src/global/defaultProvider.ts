import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider } from "./providerAbstract";
import { Customer, Item, Cart } from "../interfaces";

export class CustomerProvider extends DefaultCustomerProvider {
    private lista: Customer[] = [{ address: "Rua Monte Alto nº39", email: "cbjrcadu@gmail.com", name: "Carlos Eduardo Benedetti", pass: "01", rule: "admin" }]
    list(): Customer[] {
        return this.lista
    }
    insert(customer: Customer) {
        this.lista.push(customer)
    }
    edit(newCustomer: Customer, oldCustomer: Customer) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
    }
    remove(customer: Customer) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
    }
    tryLogin(email: string, pass: string):Customer {
        return this.lista.find(item => { return item.email == email && item.pass == pass })
    };
};
export class ItemProvider extends DefaultItemProvider {
    private lista: Item[] = [{ name: "teste", desc: "teste item", price: "3.56" }]
    list(): Item[] {
        console.log(this.lista)
        return this.lista
    }
    insert(customer: Item) {
        this.lista.push(customer)
    }
    edit(newCustomer: Item, oldCustomer: Item) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
    }
    remove(customer: Item) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
    }
}
export class CartProvider extends DefaultCartProvider {
    private lista: Cart[] = [
        {   enable:false,
            items: [
                { name: "Creme de barbear", desc: "teste item", price: "3.56" },
                { name: "Coca-Cola", desc: "teste item", price: "5.50" }
            ],
            customer: { address: "Rua Monte Alto nº39", email: "cbjrcadu@gmail.com", name: "Carlos Eduardo Benedetti", pass: "01", rule: "admin" }
        },
        {
            enable:false,
            items: [
                { name: "Cerveja", desc: "teste item", price: "6.00" },
                { name: "Laranja Kg", desc: "teste item", price: "3.00" }
            ],
            customer: { address: "Rua Monte Alto nº39", email: "cbjrcadu@gmail.com", name: "Carlos Eduardo Benedetti", pass: "01", rule: "admin" }
        }
    ]
    list(): Cart[] {
        return this.lista
    }
    insert(customer: Cart) {
        this.lista.push(customer)
    }
    
    edit(newCustomer: Cart, oldCustomer: Cart) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
    }
    remove(customer: Cart) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
    }
    getCart(cart:Cart):Cart{
        return this.lista[this.lista.findIndex(car=> car == cart)]
    }
    getEnableCart():Cart{
        return this.lista.find(row =>row.enable)
    }
    newCart(){
        this.lista.push({enable:true,items:[],customer:JSON.parse(localStorage.getItem("loggedUser"))})
    }
    closeEnableCart(type){
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].payment = type
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].enable = false
    }
    addItemToCart(item:Item){
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].items.push(item)
    }
}