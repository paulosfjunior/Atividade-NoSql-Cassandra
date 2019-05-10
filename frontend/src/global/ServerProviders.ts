import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider, DefaultRequest, DefaultRequestMethod } from "./providerAbstract";

const { GET, POST, PUT, DELETE } = DefaultRequestMethod;

export class CustomerProvider extends DefaultCustomerProvider {
	async list(){
	    const res = await DefaultRequest(GET, '/usuarios/', {});
	}
    async insert(item) {
		const res = await DefaultRequest(POST, '/usuarios/', item);    		
    }
    async edit(itemEdit) {
		const res = await DefaultRequest(PUT, '/usuarios/', itemEdit);
    }
    async remove() {
		const res = await DefaultRequest(DELETE, '/usuarios/', {});
    }
    async tryLogin(email, pass) {
    	const res = await DefaultRequest(POST, '/usuarios/autenticar', { email, pass });
    }
}
export class ItemProvider extends DefaultItemProvider {
    async list(){
        const res = await DefaultRequest(GET, '/produtos/', {});
    }
    async insert(item) {
		const res = await DefaultRequest(POST, '/produtos/', item);    		
    }
    async edit(itemEdit) {
		const res = await DefaultRequest(PUT, '/produtos/', itemEdit);
    }
    async remove() {
		const res = await DefaultRequest(DELETE, '/produtos/', {});
    }
}
export class CartProvider extends DefaultCartProvider {
	async list(){
	    const res = await DefaultRequest(GET, '/pedidos/', {});
	}
    async insert(item) {
		const res = await DefaultRequest(POST, '/pedidos/', item);    		
    }
    async edit(itemEdit) {
		const res = await DefaultRequest(PUT, '/pedidos/', itemEdit);
    }
    async remove() {
		const res = await DefaultRequest(DELETE, '/pedidos/', {});
    }
    async getCart() {

    }
    async getEnableCart() {

    }
    async newCart() {

    }
    async closeEnableCart() {

    }
    async addItemToCart() {

    }
}