import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'app-cadastro-item',
  styleUrl: 'app-cadastro.css'
})
export class AppCadastroItem {
  @Prop({ mutable: true }) name: string;
  @Prop({ mutable: true }) desc: string;
  @Prop({ mutable: true }) price: string;
  @Prop({ mutable: true }) open: boolean = false;
  @Event() CreateUser: EventEmitter;


  render() {
    return [
      <div style={{ "display": this.open ? "block" : "none" }} id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span onClick={() => { this.open = false }} class="close">&times;</span>
            <h2>Cadastro de Produto</h2>
          </div>
          <div class="modal-body">
            <ion-item>
              <ion-input type="text" value={this.name} placeholder="Nome do Produto..."></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="text" value={this.desc} placeholder="Descrição do Produto"></ion-input>
            </ion-item>
            <br></br>
            <br></br>
            <ion-item>
              <ion-input type="text" value={this.price} placeholder="Preço do Produto"></ion-input>
            </ion-item>
            <br></br>
            <br></br>
            <ion-button expand="full" onClick={() => { this.CreateUser.emit() }}>Cadastrar</ion-button>
          </div>
        </div>
      </div>
    ];
  }
}