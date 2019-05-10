import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider, DefaultRequest } from "./providerAbstract";

export class ItemProvider extends DefaultItemProvider {
    list(){
        DefaultRequest()
    }
}
export class CartProvider extends DefaultCartProvider {}
export class CustomerProvider extends DefaultCustomerProvider {}

const { getToken } = require('./Auth');
const apiUrl = 'https://vistto-api.herokuapp.com';

export async function makeRequest(method, url, data) {
	const token = await getToken();
	const httpOptions = {
		headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
		credentials: 'include',
		method: method,
		body: JSON.stringify(data)
	}

	const res = await fetch(`${apiUrl}${url}`, httpOptions);
	const resBody = await res.json();
	if (!res.ok) throw resBody.message;
	return resBody;
};
