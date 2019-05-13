import { Component, Element, State } from '@stencil/core';
import "@ionic/core"
import { ItemProvider, CartProvider } from '../../global/MockProvider';
import { Pedido, Produto } from '../../interfaces';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Element() el;
  @State() cartsProvider = new CartProvider();
  @State() itemsProvider = new ItemProvider();
  @State() cartList:Pedido[] = [];
  @State() itemList:Produto[] = []
  componentDidLoad() { 
    this.cartsProvider.updateList()
    this.itemsProvider.updateList()
  }
  constructor(){
    this.itemsProvider.getList().subscribe(list=>{
      this.itemList = list
    })
    this.cartsProvider.getList().subscribe(list=>{
      this.cartList = list
    })
  }
  


  render() {
    return [
      <app-header name="MERCADINHO DE TUDO" isHome={true}></app-header>,
      <ion-content padding>
        <app-fab></app-fab>
        <ion-list>
          {this.cartList.map(row => {
            return [
              <ion-card>
                <ion-card-title>{row.clente.nome}</ion-card-title>
                {row.carrinho.map(cartItem => {
                  return <div><br></br><ion-item>{cartItem.produto}<div class="cartItemPrice">{cartItem.valor_unitario}</div></ion-item></div>
                })}

              </ion-card>
            ]
          }
          )}
        </ion-list>
      </ion-content>
    ];
  }
}
