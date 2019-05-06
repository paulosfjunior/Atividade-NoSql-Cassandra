import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { Customer } from '../../interfaces';


@Component({
    tag: 'app-cadastro-customer',
    styleUrl: 'app-cadastro.css'
})
export class AppCadastroCustomer {
    @Prop({ mutable: true }) old: Customer;
    @Prop({ mutable: true }) name: string;
    @Prop({ mutable: true }) placeholders = { name: null, };
    @Prop({ mutable: true }) address: string;
    @Prop({ mutable: true }) email: string;
    @Prop({ mutable: true }) pass: string;
    @Prop({ mutable: true }) open: boolean = false;
    @Prop({ mutable: true }) rule: "admin" | "normal"

    @Event() create: EventEmitter;
    constructor() {
    }
    ComponentDidLoad() {
        console.log("aaaa")
    }
    render() {
        return [
            <div style={{ "display": this.open ? "block" : "none" }} id="myModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <span onClick={() => { this.open = false }} class="close">&times;</span>
                        <h2>{this.old ? "Editar" : "Cadastro"} de Cliente</h2>
                    </div>
                    <div class="modal-body">
                        <ion-item-group>
                            <ion-item>
                                <ion-input type="text" value={this.name} onInput={(e: any) => { this.name = e.target.value }} placeholder="nome do Cliente..."></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input type="text" value={this.address} onInput={(e: any) => { this.address = e.target.value }} placeholder="Endereço do Cliente..."></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input type="text" value={this.email} onInput={(e: any) => { this.email = e.target.value }} placeholder="Email do Cliente..."></ion-input>
                                <ion-input type="text" value={this.pass} onInput={(e: any) => { this.pass = e.target.value }} placeholder="Senha do Cliente..."></ion-input>
                            </ion-item>
                            <ion-list>
                                <ion-radio-group>
                                    <ion-list-header>
                                        <ion-label>Cargo</ion-label>
                                    </ion-list-header>

                                    <ion-item>
                                        <ion-label>Administrador</ion-label>
                                        <ion-radio onClick={(e: any) => { this.rule = e.target.value }} slot="start" value="admin"></ion-radio>
                                    </ion-item>

                                    <ion-item>
                                        <ion-label>Normal</ion-label>
                                        <ion-radio onClick={(e: any) => { this.rule = e.target.value }} slot="start" value="normal"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                            <br></br>
                            <br></br>
                        </ion-item-group>
                        <ion-button onClick={() => { this.create.emit({ new: { address: this.address, email: this.email, name: this.name, pass: this.pass, rule: this.rule }, old: this.old }); this.open = false }} expand="full">{this.old ? "Editar" : "Cadastrar"}</ion-button>
                    </div>
                </div>

            </div>
        ];
    }

}
