const e=window.App.h;import{b as t}from"./chunk-fc32b4f0.js";class i{constructor(){this.open=!1}render(){return[e("div",{style:{display:this.open?"block":"none"},id:"myModal",class:"modal"},e("div",{class:"modal-content"},e("div",{class:"modal-header"},e("span",{onClick:()=>{this.open=!1},class:"close"},"×"),e("h2",null,"Cadastro de Produto")),e("div",{class:"modal-body"},e("ion-item",null,e("ion-input",{type:"text",value:this.name,onInput:e=>{this.name=e.target.value},placeholder:"Nome do Produto..."})),e("ion-item",null,e("ion-input",{type:"text",value:this.desc,onInput:e=>{this.desc=e.target.value},placeholder:"Descrição do Produto"})),e("br",null),e("br",null),e("ion-item",null,e("input",{type:"number",value:this.price,onInput:e=>{this.price=e.target.value},placeholder:"Preço do Produto"})),e("br",null),e("br",null),e("ion-button",{expand:"full",onClick:()=>{this.create.emit({new:{preco:this.price,descricao:this.desc,nome:this.name},old:this.old}),this.open=!1}},"Cadastrar"))))]}static get is(){return"app-cadastro-item"}static get properties(){return{desc:{type:String,attr:"desc",mutable:!0},name:{type:String,attr:"name",mutable:!0},old:{type:"Any",attr:"old",mutable:!0},open:{type:Boolean,attr:"open",mutable:!0},price:{type:Number,attr:"price",mutable:!0}}}static get events(){return[{name:"create",method:"create",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"body{font-family:Arial,Helvetica,sans-serif}.modal{display:none;position:fixed;z-index:10;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);-webkit-animation-name:fadeIn;-webkit-animation-duration:.4s;animation-name:fadeIn;animation-duration:.4s}.right{position:absolute;right:0}.modal-content{position:fixed;margin:5%;background-color:#fefefe;width:90%;-webkit-animation-name:slideIn;-webkit-animation-duration:.4s;animation-name:slideIn;animation-duration:.4s}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:var(--ion-color-primary-shade,#3171e0);color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 16px}.modal-footer{background-color:var(--ion-color-primary-shade,#3171e0);color:#fff}\@-webkit-keyframes slideIn{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}\@keyframes slideIn{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"}}class o{constructor(){this.provider=new t,this.update=0,this.provider.getList().subscribe(e=>{this.lista=e})}componentDidLoad(){this.provider.updateList()}openModalCreate(){this.el.querySelector("#cad").open=!0}render(){return[e("div",null,e("app-header",{name:"Cadastro de Itens",isHome:!1}),e("ion-button",{expand:"full",onClick:()=>{this.openModalCreate()}},"Novo Item"),e("ion-list",null,this.lista.map(t=>e("ion-card",null,e("ion-card-header",null,e("ion-card-title",null,e("ion-row",null,t.nome,e("div",{class:"right"},e("ion-button",{onClick:()=>{this.provider.remove(t),this.update++}},e("ion-icon",{name:"trash"})),e("ion-button",{onClick:()=>{this.openEditModal(t),this.update++}},e("ion-icon",{name:"create"}))))),e("ion-card-subtitle",null,t.preco))))),e("app-cadastro-item",{id:"cad",onCreate:e=>{this.provider.insert(e.detail.new),this.update++}}),e("app-cadastro-item",{id:"edit",onCreate:e=>{this.provider.edit(e.detail.new,e.detail.old),this.update++}}))]}openEditModal(e){this.el.querySelector("#edit").open=!0,this.el.querySelector("#edit").name=e.name,this.el.querySelector("#edit").desc=e.desc,this.el.querySelector("#edit").price=e.price,this.el.querySelector("#edit").old=e}static get is(){return"app-item"}static get properties(){return{el:{elementRef:!0},lista:{state:!0},provider:{state:!0},update:{state:!0}}}static get style(){return"body{font-family:Arial,Helvetica,sans-serif}.modal{display:none;position:fixed;z-index:10;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);-webkit-animation-name:fadeIn;-webkit-animation-duration:.4s;animation-name:fadeIn;animation-duration:.4s}.right{position:absolute;right:0}.modal-content{position:fixed;margin:5%;background-color:#fefefe;width:90%;-webkit-animation-name:slideIn;-webkit-animation-duration:.4s;animation-name:slideIn;animation-duration:.4s}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{background-color:var(--ion-color-primary-shade,#3171e0);color:#fff}.modal-body,.modal-footer,.modal-header{padding:2px 16px}.modal-footer{background-color:var(--ion-color-primary-shade,#3171e0);color:#fff}\@-webkit-keyframes slideIn{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}\@keyframes slideIn{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"}}export{i as AppCadastroItem,o as AppItem};