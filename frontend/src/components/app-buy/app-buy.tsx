import { Component, State, Element } from "@stencil/core";
import { ItemProvider, CartProvider } from "../../global/defaultProvider";

@Component({
    tag: 'app-buy',
    styleUrl: 'app-buy.css'
})
export class appbuyComponent {
    @State()itemsProvider = new ItemProvider();
    @State()cartProvider = new CartProvider()
    @State() update = 0
    @Element() el:HTMLElement;
    render() {
        return [<div>
            <app-header name="Nova Compra" isCart={true} isHome={false}></app-header>
            <ion-header>

                <ion-toolbar>
                    <ion-title>Selecione os item que deseja comprar</ion-title>
                </ion-toolbar>
                {this.cartProvider.getEnableCart()? 
                <ion-button onClick={()=>{this.showModal(true);this.update++}}><ion-icon name="cart"></ion-icon>ver Carrinho</ion-button>
                :
                <ion-button onClick={()=>{this.cartProvider.newCart();this.update++}}><ion-icon name="cart"></ion-icon>Novo Carrinho</ion-button>}

            </ion-header>
                {this.cartProvider.getEnableCart()? 
            <ion-list>
                {
                    this.itemsProvider.list().map(item => {
                        return <ion-item >
                            <ion-row>{item.name}<button onClick={()=>{this.cartProvider.addItemToCart(item);this.update++}} class="cartItemPrice B">{item.price}</button></ion-row>
                            

                        </ion-item>
                    })
                }
            </ion-list>:""}
            <app-open-cart-modal onClose={()=>{this.update++}} cartProvider={this.cartProvider}></app-open-cart-modal>

        </div>
        ]
    }
    showModal(type: boolean) {
        if(type){
            this.el.querySelector("app-open-cart-modal").open = true
        }
    }
}