(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/redsoft/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3cec":function(t,e,a){t.exports=a.p+"img/tel.5f721347.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("f5df1");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("iMain")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("my-header"),r("div",{staticClass:"galery-wrapper"},[r("h1",{staticClass:"header-galery"},[t._v("Картины эпохи Возрождения")]),r("div",{staticClass:"product-wrapper"},[t._l(t.list,(function(e){return r("div",{key:e.id,staticClass:"product"},[r("img",{staticClass:"product__img",attrs:{src:e.image,alt:"Изображение товара",width:"280",height:"160"}}),r("div",{staticClass:"product__content"},[r("h2",{staticClass:"product__title"},[t._v(t._s(e.title))]),r("div",{staticClass:"product__price-wrapper"},[r("div",{staticClass:"product__price"},[r("p",{staticClass:"product__old-price"},[t._v(t._s(e.oldPrice))]),r("p",{staticClass:"product__new-price"},[t._v(t._s(e.newPrice))])]),e.busy?r("button",{staticClass:"product__button"},[t._v(" Loading...")]):e.inCart?r("button",{staticClass:"product__button product__button--in-cart"},[t._v(" В корзине ")]):r("button",{staticClass:"product__button",attrs:{type:"button"},on:{click:function(a){return t.addToCart(e.id)}}},[t._v(" Купить ")])])])])})),r("div",{staticClass:"product product-disable"},[r("img",{staticClass:"product__img",attrs:{src:a("dd3b"),alt:"Изображение товара",width:"280",height:"160"}}),t._m(0)])],2)]),r("my-footer")],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product__wrapper-description"},[a("h2",{staticClass:"product__title"},[t._v("«Урок анатомии» Рембрандт")]),a("p",{staticClass:"product__description"},[t._v("Продана на аукционе")])])}],o=(a("4de4"),a("c975"),a("d81d"),a("d3b7"),a("96cf"),a("1da1")),l=a("5530"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"wrapper-header"},[r("nav",{staticClass:"navigation"},[r("img",{attrs:{src:a("eed9"),alt:"Логотип"}}),t._m(0)]),t._m(1)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navigation__menu"},[a("li",{staticClass:"navigation__item"},[t._v("Каталог")]),a("li",{staticClass:"navigation__item"},[t._v("Доставка")]),a("li",{staticClass:"navigation__item"},[t._v("Оплата")]),a("li",{staticClass:"navigation__item"},[t._v("Контакты")]),a("li",{staticClass:"navigation__item"},[t._v("О галерее")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"search-form",attrs:{action:"",method:"get"}},[a("input",{staticClass:"search-form__input",attrs:{name:"search",placeholder:"Поиск по названию картины",type:"search"}}),a("button",{staticClass:"search-form__button",attrs:{type:"submit"}},[t._v("Поиск")])])}],d={name:"my-header"},f=d,_=a("2877"),v=Object(_["a"])(f,u,p,!1,null,"e2b7ea38",null),m=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-footer"},[r("footer",{staticClass:"main-footer"},[r("nav",{staticClass:"navigation"},[r("img",{attrs:{src:a("eed9"),alt:"Логотип",width:"48",height:"48"}}),t._m(0)]),r("img",{staticClass:"footer-images-tel",attrs:{src:a("3cec")}}),r("a",{staticClass:"footer-tel",attrs:{href:"tel:+74955555555"}},[t._v("+7 (495) 555-55-55")]),r("img",{staticClass:"footer-images-address",attrs:{src:a("9f80")}}),r("p",{staticClass:"footer-address"},[t._v("г. Москва, ул. Расплетина, 24")])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navigation__menu"},[a("li",{staticClass:"navigation__item"},[t._v("Каталог")]),a("li",{staticClass:"navigation__item"},[t._v("Доставка")]),a("li",{staticClass:"navigation__item"},[t._v("Оплата")]),a("li",{staticClass:"navigation__item"},[t._v("Контакты")]),a("li",{staticClass:"navigation__item"},[t._v("О галерее")])])}],b={name:"my-footer"},C=b,y=Object(_["a"])(C,h,g,!1,null,"b81fcf90",null),w=y.exports,O=a("bc3a"),j=a.n(O),x={data:function(){return{products:[],blocked:[],cart:[]}},components:{MyHeader:m,MyFooter:w},computed:{list:function(){var t=this;return this.products.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{busy:-1!==t.blocked.indexOf(e.id),inCart:-1!==t.cart.indexOf(e.id)})}))}},watch:{cart:function(t){localStorage.setItem("cart",JSON.stringify(t))}},mounted:function(){if(localStorage.getItem("cart"))try{this.cart=JSON.parse(localStorage.getItem("cart"))}catch(t){localStorage.removeItem("cart")}},methods:{addToCart:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.blocked.push(t),j.a.post("https://reqres.in/api/products/3",e.cart,{headers:{"Content-Type":"application/json"}}).then((function(){e.cart.push(t)}))["catch"]((function(t){console.log(t.response)}))["finally"]((function(){e.blocked=e.blocked.filter((function(e){return e!==t}))}));case 2:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;j.a.get("./static/products.json").then((function(e){t.products=e.data.products.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{busy:!1})})),console.log(t.products)}))["catch"]((function(e){t.errors.push(e)}))}},S=x,k=Object(_["a"])(S,i,c,!1,null,"72f092ec",null),M=k.exports,P={components:{iMain:M}},$=P,E=Object(_["a"])($,s,n,!1,null,"2789b194",null),T=E.exports,I=a("2f62");r["a"].use(I["a"]);var J=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=a("8c4f");r["a"].use(N["a"]);var R=[{path:"/",name:"iMain",component:M,props:!0}],q=new N["a"]({mode:"history",routes:R}),F=q;a("b107");r["a"].config.productionTip=!1,new r["a"]({store:J,router:F,render:function(t){return t(T)}}).$mount("#app")},"9f80":function(t,e,a){t.exports=a.p+"img/vector.6a9e11fe.svg"},b107:function(t,e,a){},dd3b:function(t,e,a){t.exports=a.p+"img/painting-lesson.ebbb38fa.jpg"},eed9:function(t,e,a){t.exports=a.p+"img/logo.88b1619c.svg"}});
//# sourceMappingURL=app.a063a887.js.map