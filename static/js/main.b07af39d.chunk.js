(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),l=(a(14),a(1)),s=a(2),c=a(4),u=a(3),b=a(5),m=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=+this.props.attributes.yollanan-+this.props.attributes.wireBedeli,e=(t-t*this.props.attributes.coinbaseKomisyon/100)/this.props.attributes.coinbaseFiyat,a=(e-e*this.props.attributes.paribuKomisyon/100)*this.props.attributes.paribuFiyat,n=a/this.props.attributes.yollanan;return o.a.createElement("div",null,o.a.createElement("b",null,this.props.title),o.a.createElement("br",null),"Yollanan: $",this.props.attributes.yollanan,o.a.createElement("br",null),"Wire Bedeli: $",this.props.attributes.wireBedeli,o.a.createElement("br",null),"Coinbase Komisyon: ",this.props.attributes.coinbaseKomisyon,"%",o.a.createElement("br",null),"Paribu Komisyon: ",this.props.attributes.paribuKomisyon,"%",o.a.createElement("br",null),"Coinbase Fiyat: $",this.props.attributes.coinbaseFiyat,o.a.createElement("br",null),"Paribu Fiyat: \u20ba",this.props.attributes.paribuFiyat,o.a.createElement("br",null),o.a.createElement("br",null),"Giden Toplam: $",t,o.a.createElement("br",null),"Coinbaseden Alinan: ",e.toFixed(3),o.a.createElement("br",null),"Paribudan Gelen: \u20ba",a.toFixed(2),o.a.createElement("br",null),"Kur: $",n.toFixed(3),o.a.createElement("hr",null))}}]),e}(n.Component);a(16);function p(){localStorage.setItem("yollanan",25e3),localStorage.setItem("wireBedeli",100),localStorage.setItem("coinbaseKomisyon",0),localStorage.setItem("paribuKomisyon",.15)}function h(){fetch("https://cors-anywhere.herokuapp.com/https://www.paribu.com/ticker").then(function(t){return t.json()}).then(function(t){console.log(t),localStorage.setItem("paribuBtcBid",t.BTC_TL.highestBid),localStorage.setItem("paribuBtcAsk",t.BTC_TL.lowestAsk),localStorage.setItem("paribuEthBid",t.ETH_TL.highestBid),localStorage.setItem("paribuEthAsk",t.ETH_TL.lowestAsk),localStorage.setItem("paribuLtcBid",t.LTC_TL.highestBid),localStorage.setItem("paribuLtcAsk",t.LTC_TL.lowestAsk)}),fetch("https://api.pro.coinbase.com/products/BTC-USD/ticker").then(function(t){return t.json()}).then(function(t){localStorage.setItem("coinbaseBtcBid",t.bid),localStorage.setItem("coinbaseBtcAsk",t.ask)}),fetch("https://api.pro.coinbase.com/products/ETH-USD/ticker").then(function(t){return t.json()}).then(function(t){localStorage.setItem("coinbaseEthBid",t.bid),localStorage.setItem("coinbaseEthAsk",t.ask)}),fetch("https://api.pro.coinbase.com/products/LTC-USD/ticker").then(function(t){return t.json()}).then(function(t){localStorage.setItem("coinbaseLtcBid",t.bid),localStorage.setItem("coinbaseLtcAsk",t.ask)})}function d(t){return{yollanan:localStorage.getItem("yollanan"),wireBedeli:localStorage.getItem("wireBedeli"),coinbaseKomisyon:localStorage.getItem("coinbaseKomisyon"),paribuKomisyon:localStorage.getItem("paribuKomisyon"),paribuFiyat:localStorage.getItem("paribu"+t+"Bid"),coinbaseFiyat:localStorage.getItem("coinbase"+t+"Ask")}}var E=function(t){function e(t){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).call(this,t))}return Object(b.a)(e,t),Object(s.a)(e,[{key:"clear",value:function(){localStorage.clear()}},{key:"setAll",value:function(){p(),h()}},{key:"setParam",value:function(){p()}},{key:"setApi",value:function(){h()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.clear},"CLEAR"),o.a.createElement("button",{onClick:this.setAll},"SET_ALL"),o.a.createElement("button",{onClick:this.setApi},"SET_API"),o.a.createElement("button",{onClick:this.setParam},"SET_PARAM"),o.a.createElement("br",null),o.a.createElement(m,{attributes:d("Btc"),title:"Btc"}),o.a.createElement(m,{attributes:d("Eth"),title:"Eth"}),o.a.createElement(m,{attributes:d("Ltc"),title:"Ltc"}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.b07af39d.chunk.js.map