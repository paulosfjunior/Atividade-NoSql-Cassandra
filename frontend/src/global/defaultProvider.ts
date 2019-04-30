

import { API_LINK, Product, CLIENT_ID } from '../helpers/utils';

export class DefaultProvider {
    constructor() {
    }
    async list(): Promise<Array<Product>> {
        try {
            const result = await fetch(`${API_LINK}list`, { headers: { "Content-Type": "application/json"},  method: 'post', body: JSON.stringify({clientId:CLIENT_ID})})
            let results = (await result.json()).result
            return results.map(item =>{
                return {name: item,clientId:CLIENT_ID}
            })
        }
        catch{
            console.warn("fail catch list")
            return [{ name: "teste1", clientId: CLIENT_ID },{ name: "teste2", clientId: CLIENT_ID }]
        }


    }
    async insert(product: Product): Promise<boolean> {
        try {
            const result = await fetch(API_LINK, { headers: { "Content-Type": "application/json"}, method: 'PUT', body: JSON.stringify(product) })
            return (result.status == 201) ? true : false
        }
        catch (erro) {
            return false
        }
    }
    async edit(produto: { newName: string; oldName: any; clientId: string; }): Promise<boolean> {
        try {
            const result = await fetch(API_LINK, { headers: { "Content-Type": "application/json"}, method: 'POST', body: JSON.stringify(produto) })
            return (result.status == 201) ? true : false
        }
        catch (erro) {
            return false
        }
    }
    async remove(product: Product): Promise<boolean> {
        try {
            const result = await fetch(API_LINK, {headers: { "Content-Type": "application/json"},  method: 'DELETE', body: JSON.stringify(product) })
            return (result.status == 201) ? true : false
        }
        catch (erro) {
            return false
        }
    }
}