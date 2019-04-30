import { Component, Element } from '@stencil/core';
import "@ionic/core"

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Element() el;
  componentDidLoad() {
    // debugger
  }
  openModal(e) {
    console.log(e.detail.tag)
    this.el.querySelector(e.detail.tag).open = true
  }
  logOut(){

  }
  render() {
    return [
      <app-header name="NO-SQL HUB" isHome={true}></app-header>,
      <ion-content padding>

        <ion-button href="/buy/ionic" expand="block">nova Compra</ion-button>
        <ion-button onClick={()=>this.logOut()} expand="block">Sair</ion-button>
        <ion-button onClick={()=>this.logOut()} expand="block">Sair</ion-button>
        <app-fab onOpenModal={(e) => { this.openModal(e) }}></app-fab>
        <app-cadastro-item></app-cadastro-item>
        <app-cadastro-customer></app-cadastro-customer>

      </ion-content>
    ];
  }
}
