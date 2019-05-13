import { Cliente } from '../interfaces';

// export var API_LINK = "http://10.64.212.20:8080/"
export var API_LINK = "http://localhost:8080/"
export var CLIENT_ID = "00000001"

export async function DefaultRequest(method: DefaultRequestMethod, address: string, body: Object) {
    try {
        const token = TokenController.get();
        const res = await fetch(`${API_LINK}${address}`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
            credentials: 'include',
            method: method,
            body: JSON.stringify(body)
        });
        return await res.json();
    } catch (err) {
        throw err;
    }
}

export class TokenController {
    static TokenKey: string = "loggedUser";
    static get(): Cliente {
        return JSON.parse(localStorage.getItem(this.TokenKey))
    }
    static set(newToken: string) {
        localStorage.setItem(this.TokenKey, newToken)
    }
    static remove() {
        localStorage.getItem(this.TokenKey)
    }
}

export enum DefaultRequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
