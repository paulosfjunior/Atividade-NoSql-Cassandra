import "@ionic/core"
import { Component, State } from "@stencil/core";
import { CustomerProvider } from "../../global/MockProvider";

@Component({
    tag: 'app-Login',
    styleUrl: 'app-login.css'
})
export class AppLogin {
    @State() email: string
    @State() pass: string
    provider: CustomerProvider = new CustomerProvider()
    constructor() {

    }
    render() {
        return [
            <app-header name="MERCADINHO DE TUDO" isHome={true}></app-header>,
            <ion-content padding>
                <ion-card>
                    <ion-item>
                        <ion-label>Login</ion-label>
                        <ion-input onInput={(e: any) => { this.email = e.target.value }} type="text"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Senha</ion-label>
                        <ion-input onInput={(e: any) => { this.pass = e.target.value }} type="text"></ion-input>
                    </ion-item>
                </ion-card>
                <ion-button onClick={() => this.logIn()} expand="block">Entrar</ion-button>

                <app-fab></app-fab>

            </ion-content>
        ]
    }
    async logIn() {
        let item = await this.provider.tryLogin({"senha":this.pass,"usuario":this.email})
        await item ? (() => {
            localStorage.setItem("loggedUser", JSON.stringify(item));
            window.location.reload()
        })() : null

    }
}