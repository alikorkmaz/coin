(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),r=a(7),s=a.n(r),o=(a(14),a(1)),l=a(2),c=a(4),u=a(3),b=a(5),p=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=+this.props.attributes.yollanan-+this.props.attributes.wireBedeli,e=(t-t*this.props.attributes.coinbaseKomisyon/100)/this.props.attributes.coinbaseFiyat,a=(e-e*this.props.attributes.paribuKomisyon/100)*this.props.attributes.paribuFiyat,i=a/this.props.attributes.yollanan;return n.a.createElement("div",null,n.a.createElement("b",null,this.props.title),n.a.createElement("br",null),"Yollanan: $",this.props.attributes.yollanan,n.a.createElement("br",null),"Wire Bedeli: $",this.props.attributes.wireBedeli,n.a.createElement("br",null),"Coinbase Komisyon: ",this.props.attributes.coinbaseKomisyon,"%",n.a.createElement("br",null),"Paribu Komisyon: ",this.props.attributes.paribuKomisyon,"%",n.a.createElement("br",null),"CoinbaseAsk Fiyat: $",this.props.attributes.coinbaseFiyat,n.a.createElement("br",null),"ParibuBid Fiyat: \u20ba",this.props.attributes.paribuFiyat,n.a.createElement("br",null),n.a.createElement("br",null),"Giden Toplam: $",t,n.a.createElement("br",null),"Coinbaseden Alinan: ",e.toFixed(3),n.a.createElement("br",null),"Paribudan Gelen: \u20ba",a.toFixed(2),n.a.createElement("br",null),"Kur: $",i.toFixed(3),n.a.createElement("hr",null))}}]),e}(i.Component),h=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=+this.props.attributes.yollanan-+this.props.attributes.wireBedeli,e=(t-t*this.props.attributes.paribuKomisyon/100)/this.props.attributes.paribuFiyat,a=(e-e*this.props.attributes.coinbaseKomisyon/100)*this.props.attributes.coinbaseFiyat,i=this.props.attributes.yollanan/a;return n.a.createElement("div",null,n.a.createElement("b",null,this.props.title),n.a.createElement("br",null),"Yollanan: \u20ba",this.props.attributes.yollanan,n.a.createElement("br",null),"Transfer Bedeli: \u20ba",this.props.attributes.wireBedeli,n.a.createElement("br",null),"Coinbase Komisyon: ",this.props.attributes.coinbaseKomisyon,"%",n.a.createElement("br",null),"Paribu Komisyon: ",this.props.attributes.paribuKomisyon,"%",n.a.createElement("br",null),"CoinbaseBid Fiyat: $",this.props.attributes.coinbaseFiyat,n.a.createElement("br",null),"ParibuAsk Fiyat: \u20ba",this.props.attributes.paribuFiyat,n.a.createElement("br",null),n.a.createElement("br",null),"Giden Toplam: \u20ba",t,n.a.createElement("br",null),"Coinbaseden Alinan: ",e.toFixed(3),n.a.createElement("br",null),"Paribudan Gelen: \u20ba",a.toFixed(2),n.a.createElement("br",null),"Kur: $",i.toFixed(3),n.a.createElement("hr",null))}}]),e}(i.Component),m=(a(16),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={},a.fetchApi(),a}return Object(b.a)(e,t),Object(l.a)(e,[{key:"fetchApi",value:function(){var t=this;fetch("https://www.paribu.com/ticker").then(function(t){return t.json()}).then(function(e){console.log(e),t.setState({paribuBtcBid:e.BTC_TL.highestBid,paribuBtcAsk:e.BTC_TL.lowestAsk,paribuEthBid:e.ETH_TL.highestBid,paribuEthAsk:e.ETH_TL.lowestAsk,paribuLtcBid:e.LTC_TL.highestBid,paribuLtcAsk:e.LTC_TL.lowestAsk,yollanan:25e3,wireBedeli:100,transferBedeli:10,coinbaseKomisyon:0,paribuKomisyon:.15}),fetch("https://api.pro.coinbase.com/products/BTC-USD/ticker").then(function(t){return t.json()}).then(function(e){t.setState({coinbaseBtcBid:e.bid,coinbaseBtcAsk:e.ask})}),fetch("https://api.pro.coinbase.com/products/ETH-USD/ticker").then(function(t){return t.json()}).then(function(e){t.setState({coinbaseEthBid:e.bid,coinbaseEthAsk:e.ask})}),fetch("https://api.pro.coinbase.com/products/LTC-USD/ticker").then(function(t){return t.json()}).then(function(e){t.setState({coinbaseLtcBid:e.bid,coinbaseLtcAsk:e.ask})})})}},{key:"getData",value:function(t){return{yollanan:this.state.yollanan,wireBedeli:this.state.wireBedeli,coinbaseKomisyon:this.state.coinbaseKomisyon,paribuKomisyon:this.state.paribuKomisyon,paribuFiyat:this.state["paribu"+t+"Bid"],coinbaseFiyat:this.state["coinbase"+t+"Ask"]}}},{key:"getDataReverse",value:function(t){return{yollanan:this.state.yollanan,wireBedeli:this.state.transferBedeli,coinbaseKomisyon:this.state.coinbaseKomisyon,paribuKomisyon:this.state.paribuKomisyon,paribuFiyat:this.state["paribu"+t+"Ask"],coinbaseFiyat:this.state["coinbase"+t+"Bid"]}}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,{attributes:this.getData("Btc"),title:"Btc"}),n.a.createElement(p,{attributes:this.getData("Eth"),title:"Eth"}),n.a.createElement(p,{attributes:this.getData("Ltc"),title:"Ltc"}),n.a.createElement("hr",null),n.a.createElement("hr",null),n.a.createElement(h,{attributes:this.getData("Btc"),title:"ReverseBtc"}),n.a.createElement(h,{attributes:this.getData("Eth"),title:"ReverseEth"}),n.a.createElement(h,{attributes:this.getData("Ltc"),title:"ReverseLtc"}))}}]),e}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.13b92741.chunk.js.map