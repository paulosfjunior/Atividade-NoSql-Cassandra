export namespace oldIntrefaces {
    export interface Customer {
        id?: any;
        name: string
        address: string;
        email: string;
        pass: string;
        role: "admin" | "normal"
    }
    export interface Item {
        id?: any
        name: string;
        desc: string;
        price: string;
    }
    export interface Cart {
        payment?: string;
        customer: CustomerCart;
        items: Item[]
        enable: boolean
    }
    type CustomerCart = { id: Customer['id'], name: Customer['name'] }
    type CustomerLogged = { id: Customer['id'], name: Customer['name'], token: string }
}

    export interface Cliente {
        id?: number;
        usuario: string;
        nome: string;
        endereco: Endereco;
        email: string;
        cargo: string;
        hash: string;
        salt?: string;
        refresh_tolken?: string;
    }
    export type ClienteLogin = {usuario:Cliente['usuario'],senha:string}
    export interface Endereco {
        endereco: string;
        bairro: string;
        cidade: string;
        pais: string;
        cep: string
    }
    export interface Produto {
        id?: any;
        nome: string;
        descricao: string;
        preco: number;
        quantidade?:number;
    }
    export type itemCarrinho = { id?: Produto['id'], produto: Produto['descricao'], valor_unitario: Produto['preco'], quantidade: number, valor_total: Produto['preco'] }
    export type clientePedido = { id?: Cliente['id'], nome: Cliente['nome'] }
    export interface Pedido {
        id?: any;
        clente: clientePedido;
        data_pedido: Date;
        carrinho: itemCarrinho[];
        valorPedido: number;
        formaPagamento: string;
        status: string

    }
