App.loadBundle("4ov18dlx",["exports","./chunk-d9f92f9c.js"],function(e,t){var i=window.App.h,r=function(){function e(){var e=this;this.cartsProvider=new t.CartProvider,this.itemsProvider=new t.ItemProvider,this.cartList=[],this.itemList=[],this.itemsProvider.getList().subscribe(function(t){e.itemList=t}),this.cartsProvider.getList().subscribe(function(t){e.cartList=t})}return e.prototype.componentDidLoad=function(){this.cartsProvider.updateList(),this.itemsProvider.updateList()},e.prototype.render=function(){return[i("app-header",{name:"MERCADINHO DE TUDO",isHome:!0}),i("ion-content",{padding:!0},i("app-fab",null),i("ion-list",null,this.cartList.map(function(e){return[i("ion-card",null,i("ion-card-title",null,e.clente.nome),e.carrinho.map(function(e){return i("div",null,i("br",null),i("ion-item",null,e.produto,i("div",{class:"cartItemPrice"},e.valor_unitario)))}))]})))]},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cartList:{state:!0},cartsProvider:{state:!0},el:{elementRef:!0},itemList:{state:!0},itemsProvider:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.AppHome=r,Object.defineProperty(e,"__esModule",{value:!0})});