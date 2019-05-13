import { DefaultCustomerProvider, DefaultItemProvider, DefaultCartProvider } from "./providerAbstract";
import { DefaultRequestMethod, ClienteController, TokenController } from '../helpers/utils';
import { ClienteLogin, Pedido, Produto, Cliente, tryLoginReturn } from '../interfaces';

const { GET, POST, PUT, DELETE } = DefaultRequestMethod;

export class CustomerProvider extends DefaultCustomerProvider {
  async updateList() {
    const res = await this.request(GET, '/usuarios', {});
    console.log("res: "+res)
    this.list.next(res.resultado)
  }
  async insert(item:Cliente) {
    const res = await this.request(POST, '/usuarios', item);
    this.list.next(res.resultado)
  }
  async edit(itemEdit:Cliente) {
    const res = await this.request(PUT, '/usuarios/'+itemEdit.id, itemEdit);
    this.list.next(res.resultado)
  }
  async remove(item:Cliente) {
    const res = await this.request(DELETE, '/usuarios/'+item.id, item);
    this.list.next(res.resultado)
  }
  async tryLogin(login:ClienteLogin) {
    const res = await this.request(POST, '/usuarios/autenticar', login);
    const tokenDecode = this.parseJwt(res.token)
    const newCliente:Cliente = {
      id:tokenDecode.id,
      nome:tokenDecode.nome,
      cargo:tokenDecode.cargo,
      email:tokenDecode.email,
      endereco:tokenDecode.endereco,
      refresh_tolken:tokenDecode.refreshToken,
      usuario:tokenDecode.usuario
    }
    ClienteController.set(newCliente)
    TokenController.set(res.token)

    return await res
  }
  parseJwt (token):tryLoginReturn {
    var base64Url = token.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(base64);
};
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
    const res = await this.request(PUT, '/produtos/'+itemEdit.id, itemEdit);
    this.list.next(res.resultado)
  }
  async remove(item:Produto) {
    const res = await this.request(DELETE, '/produtos/'+item.id,item);
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
    const loggedUser = ClienteController.get()
    const newCart:Pedido = {status:"não Pago",carrinho:[],cliente: loggedUser,data_pedido:new Date(),valorPedido:0,formaPagamento:null}
    this.insert(newCart);
  }
  async closeEnableCart(type) {
    let item = await this.getEnableCart()
    item.status = "Pago"
    item.formaPagamento = type;
    await this.edit(item)
  }
  async addItemToCart(item:Produto) {
    let pedido = await this.getEnableCart()
    pedido.carrinho.push({"id":item.id,"produto":item.nome,"quantidade":item.quantidade,"valor_total":(item.preco*item.quantidade),"valor_unitario":item.preco})
    await this.edit(pedido)
  }
}