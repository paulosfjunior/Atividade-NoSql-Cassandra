import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/cadastro/customer" component="app-cadastro-customer" />
          <ion-route url="/cadastro/item" component="app-cadastro-item" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
