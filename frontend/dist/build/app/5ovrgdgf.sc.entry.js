const t=window.App.h;import{a as e}from"./chunk-fc32b4f0.js";class n{constructor(){this.provider=new e}render(){return[t("app-header",{name:"MERCADINHO DE TUDO",isHome:!0}),t("ion-content",{padding:!0},t("ion-card",null,t("ion-item",null,t("ion-label",null,"Login"),t("ion-input",{onInput:t=>{this.email=t.target.value},type:"text"})),t("ion-item",null,t("ion-label",null,"Senha"),t("ion-input",{onInput:t=>{this.pass=t.target.value},type:"text"}))),t("ion-button",{onClick:()=>this.logIn(),expand:"block"},"Entrar"),t("app-fab",null))]}async logIn(){let t=await this.provider.tryLogin({senha:this.pass,usuario:this.email});await t&&(localStorage.setItem("loggedUser",JSON.stringify(t)),window.location.reload())}static get is(){return"app-Login"}static get properties(){return{email:{state:!0},pass:{state:!0}}}static get style(){return""}}export{n as AppLogin};