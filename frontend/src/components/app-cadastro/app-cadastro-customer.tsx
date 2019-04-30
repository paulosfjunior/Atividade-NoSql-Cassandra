import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-cadastro-customer',
  styleUrl: 'app-cadastro.css'
})
export class AppCadastroCustomer {
  @Prop({ mutable: true }) name: string;
  @Prop({ mutable: true }) placeholders = { name: null, };
  @Prop({ mutable: true }) address: string;
  @Prop({ mutable: true }) email: string;
  @Prop({ mutable: true }) pass: string;
  @Prop({ mutable: true }) open: boolean = false;

  componentDidLoad() { }
  render() {
    return [
      <div style={{ "display": this.open ? "block" : "none" }} id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span onClick={() => { this.open = false }} class="close">&times;</span>
            <h2>Cadastro de Cliente</h2>
          </div>
          <div class="modal-body">
            <ion-item-group>
              <ion-item>
                <ion-input type="text" value={this.name} placeholder="nome do Cliente..."></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="text" value={this.address} placeholder="Endereço do Cliente..."></ion-input>
              </ion-item>
              <ion-item>
                <ion-input type="text" value={this.email} placeholder="Email do Cliente..."></ion-input>
                <ion-input type="text" value={this.pass} placeholder="Senha do Cliente..."></ion-input>
              </ion-item>
              <br></br>
              <br></br>
            </ion-item-group>
            <ion-button expand="full">Cadastrar</ion-button>
          </div>
        </div>
      </div>
    ];
  }
}
