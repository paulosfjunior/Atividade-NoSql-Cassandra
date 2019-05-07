import { Component, Prop, EventEmitter, Event } from '@stencil/core';
import { Item } from '../../interfaces';

@Component({
  tag: 'app-cadastro-item',
  styleUrl: 'app-cadastro.css'
})
export class AppCadastroItem {
  @Prop({ mutable: true }) old: Item;
  @Prop({ mutable: true }) name: string;
  @Prop({ mutable: true }) desc: string;
  @Prop({ mutable: true }) price: string;
  @Prop({ mutable: true }) open: boolean = false;
  @Event() create: EventEmitter;


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
              <ion-input type="text" value={this.name} onInput={(e: any) => { this.name = e.target.value }} placeholder="Nome do Produto..."></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="text" value={this.desc} onInput={(e: any) => { this.desc = e.target.value }} placeholder="Descrição do Produto"></ion-input>
            </ion-item>
            <br></br>
            <br></br>
            <ion-item>
              <ion-input type="text" value={this.price} onInput={(e: any) => { this.price = e.target.value }} placeholder="Preço do Produto"></ion-input>
            </ion-item>
            <br></br>
            <br></br>
            <ion-button expand="full" onClick={() => { this.create.emit({new:{price:this.price,desc:this.desc,name:this.name},old:this.old});this.open = false }}>Cadastrar</ion-button>
          </div>
        </div>
      </div>
    ];
  }
}