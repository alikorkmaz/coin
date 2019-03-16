import React, { Component } from "react";
import Main from "./components/main";
import ReverseMain from "./components/reverseMain";
import "./App.css";
import Parser from "html-react-parser";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchApi();
    this.increase = this.increase.bind(this);
    this.increaseReverse = this.increaseReverse.bind(this);
    // this.parseKur = this.parseKur.bind(this);
  }

  state = {
    yollanan: 25000,
    wireBedeli: 100,
    transferBedeli: 10,
    coinbaseKomisyon: 0,
    paribuKomisyon: 0.15
  };

  fetchApi() {
    fetch("https://coin-serv.herokuapp.com/koineks")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          paribuxxBtcBid: jsonData.BTC.bid,
          paribuxxBtcAsk: jsonData.BTC.ask,
          paribuxxEthBid: jsonData.ETH.bid,
          paribuxxEthAsk: jsonData.ETH.ask,
          paribuxxLtcBid: jsonData.LTC.bid,
          paribuxxLtcAsk: jsonData.LTC.ask,
          paribuxxXrpBid: jsonData.XRP.bid,
          paribuxxXrpAsk: jsonData.XRP.ask
        });
      });

    fetch("https://coin-serv.herokuapp.com/btcturk")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          paribuxBtcBid: jsonData.filter(x => x.pair === "BTCTRY")[0].bid,
          paribuxBtcAsk: jsonData.filter(x => x.pair === "BTCTRY")[0].ask,
          paribuxEthBid: jsonData.filter(x => x.pair === "ETHTRY")[0].bid,
          paribuxEthAsk: jsonData.filter(x => x.pair === "ETHTRY")[0].ask,
          paribuxLtcBid: jsonData.filter(x => x.pair === "LTCTRY")[0].bid,
          paribuxLtcAsk: jsonData.filter(x => x.pair === "LTCTRY")[0].ask,
          paribuxXrpBid: jsonData.filter(x => x.pair === "XRPTRY")[0].bid,
          paribuxXrpAsk: jsonData.filter(x => x.pair === "XRPTRY")[0].ask
        });
      });

    fetch("https://coin-serv.herokuapp.com/paribu")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          paribuBtcBid: jsonData.BTC_TL.highestBid,
          paribuBtcAsk: jsonData.BTC_TL.lowestAsk,
          paribuEthBid: jsonData.ETH_TL.highestBid,
          paribuEthAsk: jsonData.ETH_TL.lowestAsk,
          paribuLtcBid: jsonData.LTC_TL.highestBid,
          paribuLtcAsk: jsonData.LTC_TL.lowestAsk,
          paribuXrpBid: jsonData.XRP_TL.highestBid,
          paribuXrpAsk: jsonData.XRP_TL.lowestAsk
        });
        // let headers = new Headers({
        //   "User-Agent":
        //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"
        // });
        // fetch("https://cors-anywhere.herokuapp.com/https://www.doviz.com", {
        //   method: "GET",
        //   headers: headers
        // })
        //   .then(res => res.text())
        //   .then(result => Parser(result))
        //   .then(result => result.props.children[1].props.children)
        //   .then(result => result.map(item => this.parseKur(item)));
      });

    fetch("https://api.pro.coinbase.com/products/BTC-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseBtcBid: jsonData.bid,
          coinbaseBtcAsk: jsonData.ask,
          coinbasexBtcBid: jsonData.bid,
          coinbasexBtcAsk: jsonData.ask,
          coinbasexxBtcBid: jsonData.bid,
          coinbasexxBtcAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/ETH-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseEthBid: jsonData.bid,
          coinbaseEthAsk: jsonData.ask,
          coinbasexEthBid: jsonData.bid,
          coinbasexEthAsk: jsonData.ask,
          coinbasexxEthBid: jsonData.bid,
          coinbasexxEthAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/LTC-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseLtcBid: jsonData.bid,
          coinbaseLtcAsk: jsonData.ask,
          coinbasexLtcBid: jsonData.bid,
          coinbasexLtcAsk: jsonData.ask,
          coinbasexxLtcBid: jsonData.bid,
          coinbasexxLtcAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/XRP-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseXrpBid: jsonData.bid,
          coinbaseXrpAsk: jsonData.ask,
          coinbasexXrpBid: jsonData.bid,
          coinbasexXrpAsk: jsonData.ask,
          coinbasexxXrpBid: jsonData.bid,
          coinbasexxXrpAsk: jsonData.ask
        });
      });
  }

  getGuncelKur() {
    let gk;
    if (typeof this.state.guncelKur !== "undefined")
      gk = +this.state.guncelKur.replace(",", ".");
    else gk = NaN;
    return gk;
  }

  parseKur(html) {
    // if (this.state.guncelKur !== null && this.state.guncelKur !== undefined) {
    //   console.log(this.state.guncelKur);
    //   return;
    // } else if (
    //   html &&
    //   html.href === "//m.doviz.com/kur/serbest-piyasa/amerikan-dolari"
    // ) {
    //   console.log(html);
    //   this.setState({
    //     guncelKur: "5.38"
    //   });
    //   return;
    // } else if (
    //   html.hasOwnProperty("props") &&
    //   html.props.hasOwnProperty("children")
    // ) {
    //   console.log(html);
    //   this.parseKur(html.props.children);
    // }
  }

  getData(type) {
    return {
      yollanan: this.state.yollanan,
      wireBedeli: this.state.wireBedeli,
      coinbaseKomisyon: this.state.coinbaseKomisyon,
      paribuKomisyon: this.state.paribuKomisyon,
      paribuFiyat: this.state["paribu" + type + "Bid"],
      coinbaseFiyat: this.state["coinbase" + type + "Ask"],
      guncelKur: this.getGuncelKur()
    };
  }

  getDataReverse(type) {
    return {
      yollanan: this.state.yollanan,
      wireBedeli: this.state.transferBedeli,
      coinbaseKomisyon: this.state.coinbaseKomisyon,
      paribuKomisyon: this.state.paribuKomisyon,
      paribuFiyat: this.state["paribu" + type + "Ask"],
      coinbaseFiyat: this.state["coinbase" + type + "Bid"],
      guncelKur: this.getGuncelKur()
    };
  }

  increase(ratio, type, oldVal) {
    let newVal = +oldVal + +ratio;

    this.setState({
      ["paribu" + type + "Bid"]: newVal
    });
  }

  increaseReverse(ratio, type, oldVal) {
    let newVal = +oldVal + +ratio;

    this.setState({
      ["coinbase" + type + "Bid"]: newVal
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <div className="row">
            <div className="col-xs-12">
              <b>Kur: {this.state.guncelKur}</b>
            </div>
          </div> */}
          <br />
          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Btc")}
                  ratio="10"
                  title="BTC"
                  type="Btc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Btc")}
                  ratio="2"
                  title="rBTC"
                  type="Btc"
                  onIncrease={this.increaseReverse}
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xBtc")}
                  ratio="10"
                  title="BTC - BTCTURK"
                  type="xBtc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xBtc")}
                  ratio="2"
                  title="rBTC - BTCTURK"
                  type="xBtc"
                  onIncrease={this.increaseReverse}
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxBtc")}
                  ratio="10"
                  title="BTC - KOINEKS"
                  type="xxBtc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxBtc")}
                  ratio="2"
                  title="rBTC - KOINEKS"
                  type="xxBtc"
                  onIncrease={this.increaseReverse}
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Eth")}
                  ratio="1"
                  title="ETH"
                  type="Eth"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Eth")}
                  ratio="0.2"
                  title="rETH"
                  onIncrease={this.increaseReverse}
                  type="Eth"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xEth")}
                  ratio="1"
                  title="ETH - BTCTURK"
                  type="xEth"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xEth")}
                  ratio="0.2"
                  title="rETH - BTCTURK"
                  onIncrease={this.increaseReverse}
                  type="xEth"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxEth")}
                  ratio="1"
                  title="ETH - KOINEKS"
                  type="xxEth"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxEth")}
                  ratio="0.2"
                  title="rETH - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxEth"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Xrp")}
                  ratio="0.01"
                  title="XRP"
                  type="Xrp"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Xrp")}
                  ratio="0.002"
                  title="rXRP"
                  onIncrease={this.increaseReverse}
                  type="Xrp"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xXrp")}
                  ratio="0.01"
                  title="XRP - BTCTURK"
                  type="xXrp"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xXrp")}
                  ratio="0.002"
                  title="rXRP - BTCTURK"
                  onIncrease={this.increaseReverse}
                  type="xXrp"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxXrp")}
                  ratio="0.01"
                  title="XRP - KOINEKS"
                  type="xxXrp"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxXrp")}
                  ratio="0.002"
                  title="rXRP - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxXrp"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Ltc")}
                  ratio="0.2"
                  title="LTC"
                  type="Ltc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Ltc")}
                  ratio="0.04"
                  title="rLTC"
                  onIncrease={this.increaseReverse}
                  type="Ltc"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xLtc")}
                  ratio="0.2"
                  title="LTC - BTCTURK"
                  type="xLtc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xLtc")}
                  ratio="0.04"
                  title="rLTC - BTCTURK"
                  onIncrease={this.increaseReverse}
                  type="xLtc"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxLtc")}
                  ratio="0.2"
                  title="LTC - KOINEKS"
                  type="xxLtc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxLtc")}
                  ratio="0.04"
                  title="rLTC - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxLtc"
                />
              }
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
