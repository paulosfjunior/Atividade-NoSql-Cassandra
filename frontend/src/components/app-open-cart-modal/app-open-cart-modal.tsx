import { Component, Prop, Element, Event,EventEmitter, Listen } from "@stencil/core";
import { CartProvider } from "../../global/defaultProvider";

@Component({
    tag: "app-open-cart-modal",
    styleUrl: "app-open-cart-modal.css"
})
export class appOpenCartModal {
    @Prop({ mutable: true }) open
    @Prop({ mutable: true }) cartProvider: CartProvider = null
    @Element() el: HTMLElement;
    @Event() close:EventEmitter
    componentDidLoad() {
        this.el.querySelector("span").onclick = () => { this.close.emit() }
    }
    endCart(){
        this.cartProvider.closeEnableCart();
        this.close.emit()
    }
    @Listen("close")
    onCloseHandler(){
        this.open = false
    }
    render() {
        return [<div style={{ "display": this.open ? "block" : "none" }} id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                {this.cartProvider.getEnableCart() ? [this.cartProvider.getEnableCart()].map(cart => {
                    return [
                        <div>
                            <h1>{(()=>{console.log(cart.items);return cart.customer.name})()}</h1>
                            
                            {cart.items.length?cart.items.map(cartItem => {
                                return <ion-item>{cartItem.name}<div class="cartItemPrice">{cartItem.price}</div></ion-item>
                            })
                            :<h4 class ="emptyCart">Carrinho vazio</h4>}
                            {this.cartProvider.getEnableCart().items.length?<ion-button color="danger" onClick={()=>{this.endCart()}}>Finalizar Compra</ion-button>:""}
                            
                        </div>
                    ]
                }) : ""}
            </div>

        </div>]
    }
}