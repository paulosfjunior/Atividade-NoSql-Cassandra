import { Component, Prop, Element, Event, EventEmitter, Listen } from "@stencil/core";
import { CartProvider } from "../../global/defaultProvider";

@Component({
    tag: "app-open-cart-modal",
    styleUrl: "app-open-cart-modal.css"
})
export class appOpenCartModal {
    @Prop({ mutable: true }) open
    @Prop({ mutable: true }) cartProvider: CartProvider = null
    @Element() el: HTMLElement;
    @Event() close: EventEmitter
    componentDidLoad() {
        this.el.querySelector("span").onclick = () => { this.close.emit() }
    }
    endCart(type) {
        this.cartProvider.closeEnableCart(type);
        this.close.emit()
    }
    @Listen("close")
    onCloseHandler() {
        this.open = false
    }
    render() {
        return [<div style={{ "display": this.open ? "block" : "none" }} id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                {this.cartProvider.getEnableCart() ? [this.cartProvider.getEnableCart()].map(cart => {
                    return [
                        <div>
                            <h1>{(() => { console.log(cart.items); return cart.customer.name })()}</h1>

                            {cart.items.length ? cart.items.map(cartItem => {
                                return <ion-item>{cartItem.name}<div class="cartItemPrice">{cartItem.price}</div></ion-item>
                            })
                                : <h4 class="emptyCart">Carrinho vazio</h4>}
                            {this.cartProvider.getEnableCart().items.length ?<div>
                                <div class="dropdown">
                                    <ion-button id="endCart">Finalizar Compra</ion-button>
                                    <div class="dropdown-content">
                                    <ion-button expand="full" class="Credito" color="danger" onClick={(e:any) => { this.endCart(e.target.getAttribute("class")) }}>Credito</ion-button>
                                    <ion-button expand="full" class="Debito" color="danger" onClick={(e:any) => { this.endCart(e.target.getAttribute("class")) }}>Debito</ion-button>
                                    <ion-button expand="full" class="A vista" color="danger" onClick={(e:any) => { this.endCart(e.target.getAttribute("class")) }}>A Vista</ion-button>
                                    <ion-button expand="full" class="Boleto Bancario" color="danger" onClick={(e:any) => { this.endCart(e.target.getAttribute("class")) }}>Boleto Bancario</ion-button>
                                    
                                    </div>
                                </div>
                                </div>
                            
                            : ""}

                        </div>
                    ]
                }) : ""}
            </div>

        </div>]
    }
}