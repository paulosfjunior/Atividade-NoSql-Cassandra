import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider } from "./providerAbstract";
import { TokenController, DefaultRequestMethod } from '../helpers/utils';
import { ClienteLogin, Pedido, Produto, Cliente } from '../interfaces';

const { GET, POST, PUT, DELETE } = DefaultRequestMethod;

export class CustomerProvider extends DefaultCustomerProvider {
  async updateList() {
    const res = await this.request(GET, '/usuarios', {});
    this.list.next(res.resultado)
  }
  async insert(item:Cliente) {
    const res = await this.request(POST, '/usuarios', item);
    this.list.next(res.resultado)
  }
  async edit(itemEdit:Cliente) {
    const res = await this.request(PUT, '/usuarios', itemEdit);
    this.list.next(res.resultado)
  }
  async remove(item:Cliente) {
    const res = await this.request(DELETE, '/usuarios', item);
    this.list.next(res.resultado)
  }
  async tryLogin(login:ClienteLogin) {
    const res = await this.request(POST, '/usuarios/autenticar', login);
    return await res
  }
}

export class ItemProvider extends DefaultItemProvider {
  async updateList() {
    const res = await this.request(GET, '/produtos', {});
    this.list.next(res.resultado);

  }
  async insert(item:Produto) {
    const res = await this.request(POST, '/produtos', item);
    this.list.next(res.resultado)
  }
  async edit(itemEdit:Produto) {
    const res = await this.request(PUT, '/produtos', itemEdit);
    this.list.next(res.resultado)
  }
  async remove(item:Produto) {
    const res = await this.request(DELETE, '/produtos',item);
    this.list.next(res.resultado)
  }
}

export class CartProvider extends DefaultCartProvider {
  async updateList() {
    const res = await this.request(GET, '/pedidos', {});
    this.list.next(res.resultado)
  }
  async insert(item:Pedido) {
    const res = await this.request(POST, '/pedidos', item);
    this.list.next(res.resultado)
  }
  async edit(itemEdit:Pedido) {
    const res = await this.request(PUT, '/pedidos', itemEdit);
    this.list.next(res.resultado)
  }
  async remove(item:Pedido) {
    const res = await this.request(DELETE, '/pedidos', item);
    this.list.next(res.resultado)
  }
  getEnableCart() {
    return this.list.getValue().find(row =>row.status == "não Pago")
  }
  async newCart() {
    const loggedUser = TokenController.get()
    const newCart:Pedido = {id:3,status:"não Pago",carrinho:[],clente: loggedUser,data_pedido:new Date(),valorPedido:0,formaPagamento:null}
    this.insert(newCart);
  }
  async closeEnableCart() {
    let item = await this.getEnableCart()
    item.status = "Pago"
    await this.edit(item)
  }
  async addItemToCart(item:Produto) {
    let pedido = await this.getEnableCart()
    pedido.carrinho.push({"id":item.id,"produto":item.nome,"quantidade":item.quantidade,"valor_total":(item.preco*item.quantidade),"valor_unitario":item.preco})
    await this.edit(pedido)
  }
}