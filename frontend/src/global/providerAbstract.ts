import { Customer, Item, Cart } from "../interfaces";

export abstract class DefaultCustomerProvider {
    public abstract list(qtn?: number): Customer[];
    public abstract insert(customer: Customer): void;
    public abstract edit(newcustomer: Customer, oldCustomer: Customer): void;
    public abstract remove(customer: Customer): void;
    public abstract tryLogin(email: string, pass: string): Customer;
    public request(method: DefaultRequestMethod, address: string, body: Object) {
        DefaultRequest(method, address, body)
    }
}
export abstract class DefaultItemProvider {
    public abstract list(qtn?: number): Item[];
    public abstract insert(customer: Item): void;
    public abstract edit(newcustomer: Item, oldCustomer: Item): void;
    public abstract remove(customer: Item): void;
    public request(method: DefaultRequestMethod, address: string, body: Object) {
        DefaultRequest(method, address, body)
    }
}
export abstract class DefaultCartProvider {
    public abstract list(qtn?: number): Cart[];
    public abstract insert(customer: Cart): void;
    public abstract edit(newcustomer: Cart, oldCustomer: Cart): void;
    public abstract remove(customer: Cart): void;
    public abstract getCart(cart: Cart): Cart;
    public abstract getEnableCart(): Cart;
    public abstract newCart(): void;
    public abstract closeEnableCart(type: string): void;
    public abstract addItemToCart(item: Item): void;
    public request(method: DefaultRequestMethod, address: string, body: Object) {
        DefaultRequest(method, address, body)
    }
}

const apiUrl = '';

export async function DefaultRequest(method: DefaultRequestMethod, address: string, body: Object ) {
    const token = TokenController.get();
    const res = await fetch(`${apiUrl}${address}`, {
        headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
        credentials: 'include',
        method: method,
        body: JSON.stringify(body)
    });
    const resBody = await res.json();
}

export class TokenController {    
    static TokenKey: string =  "session_token";
    static get():string{
        return localStorage.getItem(this.TokenKey)
    }
    static set(newToken:string){
        localStorage.setItem(this.TokenKey,newToken)
    }
    static remove(){
        localStorage.getItem(this.TokenKey)
    }
}

export enum DefaultRequestMethod {
    GET="GET",
    POST="POST",
    PUT="PUT",
    DELETE="DELETE"
}
