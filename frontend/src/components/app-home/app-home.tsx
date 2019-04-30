import { Component, Element } from '@stencil/core';
import "@ionic/core"

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
@Element() el;
componentDidLoad(){
  // debugger
}
openModal(e){
  console.log(e.detail.tag)
this.el.querySelector(e.detail.tag).open = true
}
  render() {
    return [
      <app-header name="NO-SQL HUB" isHome={true}></app-header>,
      <ion-content padding>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
        <app-fab onOpenModal={(e)=>{this.openModal(e)}}></app-fab>
        <app-cadastro-item></app-cadastro-item>
        <app-cadastro-customer></app-cadastro-customer>
      </ion-content>
    ];
  }
}
