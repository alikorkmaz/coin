(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(35)},20:function(e,t,a){},22:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),r=a(12),n=a.n(r),o=(a(20),a(8)),c=a(2),l=a(3),p=a(5),u=a(4),b=a(6),h=a(1),m=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=+this.props.attributes.yollanan-+this.props.attributes.wireBedeli,a=(t-t*this.props.attributes.coinbaseKomisyon/100)/this.props.attributes.coinbaseFiyat,i=(a-a*this.props.attributes.paribuKomisyon/100)*this.props.attributes.paribuFiyat,r=i/this.props.attributes.yollanan;return s.a.createElement("div",{className:this.props.attributes.guncelKur<r&&!this.props.passive?"positive":"negative"},s.a.createElement("b",null,this.props.title),s.a.createElement("br",null),"Yollanan: $",this.props.attributes.yollanan,s.a.createElement("br",null),"Wire Bedeli: $",this.props.attributes.wireBedeli,s.a.createElement("br",null),"CB Komisyon: ",this.props.attributes.coinbaseKomisyon,"%",s.a.createElement("br",null),"PA Komisyon: ",this.props.attributes.paribuKomisyon,"%",s.a.createElement("br",null),"CB Fiyat: $",(+this.props.attributes.coinbaseFiyat).toFixed(3),s.a.createElement("br",null),"PA Fiyat: \u20ba",(+this.props.attributes.paribuFiyat).toFixed(3),s.a.createElement("br",null),"Giden : $",t,s.a.createElement("br",null),"CB: ",a.toFixed(3),s.a.createElement("br",null),"PA: \u20ba",i.toFixed(2),s.a.createElement("br",null),"Sat\u0131m Kur: $",r.toFixed(3),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-6"},s.a.createElement("button",{onClick:function(){return e.props.onIncrease(e.props.ratio,e.props.type,e.props.attributes.paribuFiyat)},className:"custom-btn btn btn-primary btn-xs"},"+",this.props.ratio)),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement("button",{onClick:function(){return e.props.onIncrease(-1*+e.props.ratio,e.props.type,e.props.attributes.paribuFiyat)},className:"custom-btn btn btn-primary btn-xs"},"-",this.props.ratio))))}}]),t}(i.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=+this.props.attributes.yollanan-+this.props.attributes.wireBedeli,a=(t-t*this.props.attributes.paribuKomisyon/100)/this.props.attributes.paribuFiyat,i=(a-a*this.props.attributes.coinbaseKomisyon/100)*this.props.attributes.coinbaseFiyat,r=this.props.attributes.yollanan/i;return s.a.createElement("div",{className:this.props.attributes.guncelKur>r&&!this.props.passive?"positive":"negative"},s.a.createElement("b",null,this.props.title),s.a.createElement("br",null),"Yollanan: \u20ba",this.props.attributes.yollanan,s.a.createElement("br",null),"Transfer Bedeli: \u20ba",this.props.attributes.wireBedeli,s.a.createElement("br",null),"CB Komisyon: ",this.props.attributes.coinbaseKomisyon,"%",s.a.createElement("br",null),"PA Komisyon: ",this.props.attributes.paribuKomisyon,"%",s.a.createElement("br",null),"CB Fiyat: $",(+this.props.attributes.coinbaseFiyat).toFixed(3),s.a.createElement("br",null),"PA Fiyat: \u20ba",(+this.props.attributes.paribuFiyat).toFixed(3),s.a.createElement("br",null),"Giden: \u20ba",t,s.a.createElement("br",null),"CB: ",a.toFixed(3),s.a.createElement("br",null),"PA: \u20ba",i.toFixed(2),s.a.createElement("br",null),"Al\u0131m Kur: $",r.toFixed(3),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-6"},s.a.createElement("button",{onClick:function(){return e.props.onIncrease(e.props.ratio,e.props.type,e.props.attributes.coinbaseFiyat)},className:"custom-btn btn btn-primary btn-xs"},"+",this.props.ratio)),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement("button",{onClick:function(){return e.props.onIncrease(-1*+e.props.ratio,e.props.type,e.props.attributes.coinbaseFiyat)},className:"custom-btn btn btn-primary btn-xs"},"-",this.props.ratio))))}}]),t}(i.Component),y=(a(22),a(13)),E=a.n(y),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={},a.fetchApi(),a.increase=a.increase.bind(Object(h.a)(Object(h.a)(a))),a.increaseReverse=a.increaseReverse.bind(Object(h.a)(Object(h.a)(a))),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"fetchApi",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://www.paribu.com/ticker").then(function(e){return e.json()}).then(function(t){e.setState({paribuBtcBid:t.BTC_TL.highestBid,paribuBtcAsk:t.BTC_TL.lowestAsk,paribuEthBid:t.ETH_TL.highestBid,paribuEthAsk:t.ETH_TL.lowestAsk,paribuLtcBid:t.LTC_TL.highestBid,paribuLtcAsk:t.LTC_TL.lowestAsk,paribuXrpBid:t.XRP_TL.highestBid,paribuXrpAsk:t.XRP_TL.lowestAsk,yollanan:25e3,wireBedeli:100,transferBedeli:10,coinbaseKomisyon:0,paribuKomisyon:.15}),fetch("https://api.pro.coinbase.com/products/BTC-USD/ticker").then(function(e){return e.json()}).then(function(t){e.setState({coinbaseBtcBid:t.bid,coinbaseBtcAsk:t.ask})}),fetch("https://api.pro.coinbase.com/products/ETH-USD/ticker").then(function(e){return e.json()}).then(function(t){e.setState({coinbaseEthBid:t.bid,coinbaseEthAsk:t.ask})}),fetch("https://api.pro.coinbase.com/products/LTC-USD/ticker").then(function(e){return e.json()}).then(function(t){e.setState({coinbaseLtcBid:t.bid,coinbaseLtcAsk:t.ask})});var a=new Headers({"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"});fetch("https://cors-anywhere.herokuapp.com/https://www.doviz.com",{method:"GET",headers:a}).then(function(t){t.text().then(function(e){return E()(e)}).then(function(e){return e.props.children[1].props.children[10].props.children[1].props.children[1].props.children[1].props.children[3].props.children[3].props.children[1].props.children[3].props.children}).then(function(t){e.setState({guncelKur:t})})})})}},{key:"getGuncelKur",value:function(){return"undefined"!==typeof this.state.guncelKur?+this.state.guncelKur.replace(",","."):NaN}},{key:"getData",value:function(e){return{yollanan:this.state.yollanan,wireBedeli:this.state.wireBedeli,coinbaseKomisyon:this.state.coinbaseKomisyon,paribuKomisyon:this.state.paribuKomisyon,paribuFiyat:this.state["paribu"+e+"Bid"],coinbaseFiyat:this.state["coinbase"+e+"Ask"],guncelKur:this.getGuncelKur()}}},{key:"getDataReverse",value:function(e){return{yollanan:this.state.yollanan,wireBedeli:this.state.transferBedeli,coinbaseKomisyon:this.state.coinbaseKomisyon,paribuKomisyon:this.state.paribuKomisyon,paribuFiyat:this.state["paribu"+e+"Ask"],coinbaseFiyat:this.state["coinbase"+e+"Bid"],guncelKur:this.getGuncelKur()}}},{key:"increase",value:function(e,t,a){var i=+a+ +e;this.setState(Object(o.a)({},"paribu"+t+"Bid",i))}},{key:"increaseReverse",value:function(e,t,a){var i=+a+ +e;this.setState(Object(o.a)({},"coinbase"+t+"Bid",i))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12"},s.a.createElement("b",null,"Kur: ",this.state.guncelKur))),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(m,{attributes:this.getData("Btc"),ratio:"50",title:"BTC",type:"Btc",onIncrease:this.increase})),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(d,{attributes:this.getDataReverse("Btc"),ratio:"10",title:"Reverse BTC",type:"Btc",onIncrease:this.increaseReverse}))),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(m,{attributes:this.getData("Eth"),ratio:"5",title:"ETH",type:"Eth",onIncrease:this.increase})),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(d,{attributes:this.getDataReverse("Eth"),ratio:"1",title:"Reverse ETH",onIncrease:this.increaseReverse,type:"Eth"}))),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(m,{attributes:this.getData("Ltc"),ratio:"1",title:"LTC",type:"Ltc",onIncrease:this.increase})),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement(d,{attributes:this.getDataReverse("Ltc"),ratio:"0.2",title:"Reverse LTC",onIncrease:this.increaseReverse,type:"Ltc"}))),s.a.createElement("br",null)),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.50537522.chunk.js.map