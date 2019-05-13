import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider } from "./providerAbstract";
import { Cliente, ClienteLogin, Produto, Pedido} from '../interfaces';
import { TokenController } from '../helpers/utils';

export class CustomerProvider extends DefaultCustomerProvider {
    private lista: Cliente[] = [{'id':0, endereco:{endereco: "Rua Monte Alto nº39",bairro:"vila Nova",cep:"17300",cidade:"Tupã",pais:"Brasil"}, email: "cbjrcadu@gmail.com", nome: "Carlos Eduardo Benedetti", "hash": "", cargo: "admin",usuario:"kry",refresh_tolken:"01" }]
    updateList():void {
        this.list.next(this.lista)
    }
    insert(customer: Cliente) {
        this.lista.push(customer)
        this.list.next(this.lista)
    }
    edit(newCustomer: Cliente, oldCustomer: Cliente) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
        this.list.next(this.lista)
    }
    remove(customer: Cliente) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
        this.list.next(this.lista)
    }
    async tryLogin(login:ClienteLogin):Promise<Cliente> {
        debugger
        return this.lista.find(item => { return item.usuario == login.usuario})
    }
}

export class ItemProvider extends DefaultItemProvider {
    private lista: Produto[] = [{id:0, nome: "teste", descricao: "teste item", preco:3.56,quantidade:1 }]
    updateList():void {
        this.list.next(this.lista)
    }
    insert(customer: Produto) {
        this.lista.push(customer)
        this.list.next(this.lista)
    }
    edit(newCustomer: Produto, oldCustomer: Produto) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
        this.list.next(this.lista)
    }
    remove(customer: Produto) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
        this.list.next(this.lista)
    }
}

export class CartProvider extends DefaultCartProvider {
    private lista: Pedido[] = [
        {   id:0,
            data_pedido: new Date('01'),
            carrinho: [
                { id:1, produto: "Creme de barbear", quantidade:1, valor_unitario: 3.56, valor_total:3.56 },
                { id:2, produto: "Coca-Cola", quantidade:2, valor_unitario: 5.50, valor_total:11.00 }
            ],
            clente: {id: 1, nome: "Carlos Eduardo Benedetti", },
            formaPagamento:"Cartão",
            status:"Pago",
            valorPedido:(3.56+11)
        },
        {   id:1,
            data_pedido: new Date('0'),
            carrinho: [
                { id:3, produto: "Cerveja", quantidade:1, valor_unitario: 6.00, valor_total:6.00 },
                { id:4, produto: "Laranja Kg", quantidade:3, valor_unitario: 3.00, valor_total:9.00 }
            ],
            clente: {id: 1, nome: "Carlos Eduardo Benedetti", },
            formaPagamento:"Cartão",
            status:"Pago",
            valorPedido:(3.56+11)
        }
    ]
    updateList():void {
        this.list.next(this.lista)
    }
    insert(customer: Pedido) {
        this.lista.push(customer)
        this.list.next(this.lista)
    }
    
    edit(newCustomer: Pedido, oldCustomer: Pedido) {
        this.lista[this.lista.findIndex(item => { return item == oldCustomer })] = newCustomer
        this.list.next(this.lista)
    }
    remove(customer: Pedido) {
        this.lista = this.lista.filter(item => { if (!(item == customer)) { return item } })
        this.list.next(this.lista)
    }
    getCart(cart:Pedido):Pedido{
        return this.lista[this.lista.findIndex(car=> car == cart)]
    }
    getEnableCart():Pedido{
        return this.lista.find(row =>row.status == "não Pago")
    }
    newCart(){
        this.lista.push({id:3,status:"não Pago",carrinho:[],clente: TokenController.get(),data_pedido:new Date(),valorPedido:0,formaPagamento:null})
    }
    closeEnableCart(type){
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].formaPagamento = type
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].status = "Pago"
    }
    addItemToCart(item:Produto){
        this.lista[this.lista.findIndex((cart) => {return cart == this.getEnableCart()})].carrinho.push({"id":item.id,"produto":item.nome,"quantidade":item.quantidade,"valor_total":(item.preco*item.quantidade),"valor_unitario":item.preco})
    }
}