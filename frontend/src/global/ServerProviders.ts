import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider, DefaultRequestMethod } from "./providerAbstract";

const { GET, POST, PUT, DELETE } = DefaultRequestMethod;

export class CustomerProvider extends DefaultCustomerProvider {
	async list() {
	    const res = await this.request(GET, '/usuarios', {});
        return res.resultado.map(customer => {
            return {
                name: customer.nome,
                address: customer.endereco,
                email: customer.email,
                pass: null,
                role: customer.cargo,
            }
        });
	}
    async insert(item) {
		const res = await this.request(POST, '/usuarios', item); 		
    }
    async edit(itemEdit) {
		const res = await this.request(PUT, '/usuarios', itemEdit);
    }
    async remove() {
		const res = await this.request(DELETE, '/usuarios', {});
    }
    async tryLogin(email, pass) {
    	const res = await this.request(POST, '/usuarios/autenticar', { email, pass });
    }
}

export class ItemProvider extends DefaultItemProvider {
    async list() {
        const res = await this.request(GET, '/produtos', {});
    }
    async insert(item) {
		const res = await this.request(POST, '/produtos', item);    		
    }
    async edit(itemEdit) {
		const res = await this.request(PUT, '/produtos', itemEdit);
    }
    async remove() {
		const res = await this.request(DELETE, '/produtos', {});
    }
}

export class CartProvider extends DefaultCartProvider {
	async list() {
	    const res = await this.request(GET, '/pedidos', {});
	}
    async insert(item) {
		const res = await this.request(POST, '/pedidos', item);    		
    }
    async edit(itemEdit) {
		const res = await this.request(PUT, '/pedidos', itemEdit);
    }
    async remove() {
		const res = await this.request(DELETE, '/pedidos', {});
    }
    async getCart() {
        const res = await this.request(GET, '/pedidos/meus', {});
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