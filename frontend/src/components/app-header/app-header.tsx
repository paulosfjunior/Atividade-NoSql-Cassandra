import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css'
})
export class AppHeader {

  @Prop() name: string;
  @Prop({ mutable: true }) isHome: boolean;

  render() {
    console.log(this.isHome)
    return [
      <ion-header>
        <ion-toolbar color="primary">
          {!this.isHome ?
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/" />
            </ion-buttons> : ''
          }
          <ion-title>{this.name}</ion-title>
        </ion-toolbar>
      </ion-header>,

    ];
  }
}
