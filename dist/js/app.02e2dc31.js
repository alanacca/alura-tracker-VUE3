(function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=o[0]))}return e}var a={},r={app:0},n=[];function c(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=a,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(o,a,function(t){return e[t]}.bind(null,a));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},3830:function(e,t,o){"use strict";o("b986")},"3afd":function(e,t,o){},aa0f:function(e,t,o){"use strict";o("f85a")},b986:function(e,t,o){},b9d7:function(e,t,o){"use strict";o("fc59")},be0f:function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const r={class:"column is-one-quarter"},n={class:"column is-three-quarter conteudo"},c={class:"lista"},i=Object(a["f"])("span",null,"Você não está muito produtivo hoje!! =(",-1);function s(e,t,o,s,l,u){const d=Object(a["o"])("BarraLateral"),f=Object(a["o"])("FormularioTarefa"),b=Object(a["o"])("Tarefa"),m=Object(a["o"])("Box");return Object(a["j"])(),Object(a["e"])("main",{class:Object(a["i"])(["columns is-gapless is-multiline",{"modo-escuro":e.escuroAtivo}])},[Object(a["f"])("div",r,[Object(a["g"])(d,{onAoTemaAlterado:e.trocarTema},null,8,["onAoTemaAlterado"])]),Object(a["f"])("div",n,[Object(a["g"])(f,{onAoSalvarTarefa:e.salvarTarefa},null,8,["onAoSalvarTarefa"]),Object(a["f"])("div",c,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["m"])(e.tarefas,(e,t)=>(Object(a["j"])(),Object(a["c"])(b,{key:t,tarefa:e},null,8,["tarefa"]))),128)),e.listaVazia?(Object(a["j"])(),Object(a["c"])(m,{key:0},{default:Object(a["r"])(()=>[i]),_:1})):Object(a["d"])("",!0)])])],2)}o("14d9");var l=o("cf05"),u=o.n(l);const d=e=>(Object(a["l"])("data-v-684f7f93"),e=e(),Object(a["k"])(),e),f=d(()=>Object(a["f"])("h1",null,[Object(a["f"])("img",{src:u.a,alt:""})],-1));function b(e,t,o,r,n,c){return Object(a["j"])(),Object(a["e"])("header",null,[f,Object(a["f"])("button",{class:"button",onClick:t[0]||(t[0]=(...t)=>e.alterarTema&&e.alterarTema(...t))},Object(a["p"])(e.textoBotao),1)])}var m=Object(a["h"])({name:"BarraLateral",emits:["aoTemaAlterado"],data(){return{escuroAtivo:!1}},computed:{textoBotao(){return this.escuroAtivo?"Desativar modo escuro":"Ativar modo escuro"}},methods:{alterarTema(){this.escuroAtivo=!this.escuroAtivo,this.$emit("aoTemaAlterado",this.escuroAtivo)}}}),p=(o("aa0f"),o("6b0d")),j=o.n(p);const O=j()(m,[["render",b],["__scopeId","data-v-684f7f93"]]);var v=O;const h={class:"box formulario"},g={class:"columns"},T={class:"column is-8",role:"form","aria-label":"Formulário para criação de uma nova tarefa"},y={class:"column"};function S(e,t,o,r,n,c){const i=Object(a["o"])("Temporizador");return Object(a["j"])(),Object(a["e"])("div",h,[Object(a["f"])("div",g,[Object(a["f"])("div",T,[Object(a["s"])(Object(a["f"])("input",{type:"text",class:"input",placeholder:"Qual tarefa você deseja iniciar?","onUpdate:modelValue":t[0]||(t[0]=t=>e.descricao=t)},null,512),[[a["q"],e.descricao]])]),Object(a["f"])("div",y,[Object(a["g"])(i,{onAoTemporizadorFinalizado:e.finalizarTarefa},null,8,["onAoTemporizadorFinalizado"])])])])}const x={class:"is-flex is-align-items-center is-justify-content-space-between"};function A(e,t,o,r,n,c){const i=Object(a["o"])("Cronometro"),s=Object(a["o"])("Botao");return Object(a["j"])(),Object(a["e"])("div",x,[Object(a["g"])(i,{tempoEmSegundos:e.tempoEmSegundos},null,8,["tempoEmSegundos"]),Object(a["g"])(s,{onClicado:e.iniciar,icone:"fas fa-play",texto:"play",desabilitado:e.cronometroRodando},null,8,["onClicado","desabilitado"]),Object(a["g"])(s,{onClicado:e.finalizar,icone:"fas fa-stop",texto:"stop",desabilitado:!e.cronometroRodando},null,8,["onClicado","desabilitado"])])}const z={class:"display"};function B(e,t,o,r,n,c){return Object(a["j"])(),Object(a["e"])("section",null,[Object(a["f"])("strong",z,Object(a["p"])(e.tempoDecorrido),1)])}var w=Object(a["h"])({nome:"Cronometro",props:{tempoEmSegundos:{type:Number,default:0}},computed:{tempoDecorrido(){return new Date(1e3*this.tempoEmSegundos).toISOString().substr(11,8)}}});o("b9d7");const E=j()(w,[["render",B]]);var _=E;const C=["disabled"],k={class:"icon"};function F(e,t,o,r,n,c){return Object(a["j"])(),Object(a["e"])("button",{class:"button",onClick:t[0]||(t[0]=(...t)=>e.clicado&&e.clicado(...t)),disabled:e.desabilitado},[Object(a["f"])("span",k,[Object(a["f"])("i",{class:Object(a["i"])(e.icone)},null,2)]),Object(a["f"])("span",null,Object(a["p"])(e.texto),1)],8,C)}var P=Object(a["h"])({name:"Botao",emits:["clicado"],props:{desabilitado:{type:Boolean},icone:{type:String,required:!0},texto:{type:String,required:!0}},methods:{clicado(){this.$emit("clicado")}}});const q=j()(P,[["render",F]]);var I=q,R=Object(a["h"])({name:"Temporizador",emits:["aoTemporizadorFinalizado"],components:{Cronometro:_,Botao:I},data(){return{tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{iniciar(){this.cronometroRodando=!0,this.cronometro=setInterval(()=>{this.tempoEmSegundos+=1},1e3)},finalizar(){this.cronometroRodando=!1,clearInterval(this.cronometro),this.$emit("aoTemporizadorFinalizado",this.tempoEmSegundos),this.tempoEmSegundos=0}}});const $=j()(R,[["render",A]]);var D=$,M=Object(a["h"])({name:"FormulárioTarefa",emits:["aoSalvarTarefa"],data(){return{descricao:""}},components:{Temporizador:D},methods:{finalizarTarefa(e){this.$emit("aoSalvarTarefa",{duracaoEmSegundos:e,descricao:this.descricao}),this.descricao=""}}});o("d649");const V=j()(M,[["render",S]]);var L=V;const J={class:"columns"},N={class:"column is-7"},Q={class:"column"};function U(e,t,o,r,n,c){const i=Object(a["o"])("Cronometro"),s=Object(a["o"])("Box");return Object(a["j"])(),Object(a["c"])(s,null,{default:Object(a["r"])(()=>[Object(a["f"])("div",J,[Object(a["f"])("div",N,Object(a["p"])(e.tarefa.descricao||"Tarefa sem descrição"),1),Object(a["f"])("div",Q,[Object(a["g"])(i,{tempoEmSegundos:e.tarefa.duracaoEmSegundos},null,8,["tempoEmSegundos"])])])]),_:1})}const G={class:"box has-text-weight-bold"};function H(e,t,o,r,n,c){return Object(a["j"])(),Object(a["e"])("div",G,[Object(a["n"])(e.$slots,"default",{},void 0,!0)])}var K=Object(a["h"])({name:"Box"});o("d19a");const W=j()(K,[["render",H],["__scopeId","data-v-1128b882"]]);var X=W,Y=Object(a["h"])({name:"Tarefa",props:{tarefa:{type:Object,required:!0}},components:{Cronometro:_,Box:X}});const Z=j()(Y,[["render",U]]);var ee=Z,te=Object(a["h"])({name:"App",components:{BarraLateral:v,FormularioTarefa:L,Tarefa:ee,Box:X},data(){return{tarefas:[],escuroAtivo:!1}},computed:{listaVazia(){return 0===this.tarefas.length}},methods:{salvarTarefa(e){this.tarefas.push(e)},trocarTema(e){this.escuroAtivo=e}}});o("3830");const oe=j()(te,[["render",s]]);var ae=oe;o("15f5");Object(a["b"])(ae).mount("#app")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d19a:function(e,t,o){"use strict";o("be0f")},d649:function(e,t,o){"use strict";o("3afd")},f85a:function(e,t,o){},fc59:function(e,t,o){}});
//# sourceMappingURL=app.02e2dc31.js.map