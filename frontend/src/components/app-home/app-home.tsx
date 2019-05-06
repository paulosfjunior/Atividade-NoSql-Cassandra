import { Component, Element, State } from '@stencil/core';
import "@ionic/core"
import { ItemProvider, CartProvider } from '../../global/defaultProvider';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Element() el;
  @State() cartsProvider = new CartProvider();
  @State() itemsProvider = new ItemProvider()
  componentDidLoad() { }

  
  render() {
    return [
      <app-header name="MERCADINHO DE TUDO" isHome={true}></app-header>,
      <ion-content padding>
        <app-fab></app-fab>
        <ion-list>
          {this.cartsProvider.list().map(row=>{
            return [
              <ion-card> 
                <ion-card-title>{row.customer.name}</ion-card-title>
                {row.items.map(cartItem =>{
                  return <div><br></br><ion-item>{cartItem.name}<div class="cartItemPrice">{cartItem.price}</div></ion-item></div>
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
