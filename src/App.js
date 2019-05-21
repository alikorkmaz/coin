import React, { Component } from "react";
import Main from "./components/main";
import ReverseMain from "./components/reverseMain";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchApi();
    this.increase = this.increase.bind(this);
    this.increaseReverse = this.increaseReverse.bind(this);
  }

  state = {
    yollanan: 25000,
    wireBedeli: 100,
    transferBedeli: 10,
    coinbaseKomisyon: 0.1,
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
          paribuxxXrpAsk: jsonData.XRP.ask,
          paribuxxXlmBid: jsonData.XLM.bid,
          paribuxxXlmAsk: jsonData.XLM.ask,
          paribuxxBchBid: jsonData.BCH.bid,
          paribuxxBchAsk: jsonData.BCH.ask,

          paribuxxEosBid: jsonData.EOS.bid,
          paribuxxEosAsk: jsonData.EOS.ask,
          paribuxxEtcBid: jsonData.ETC.bid,
          paribuxxEtcAsk: jsonData.ETC.ask
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
          paribuxXrpAsk: jsonData.filter(x => x.pair === "XRPTRY")[0].ask,
          paribuxXlmBid: jsonData.filter(x => x.pair === "XLMTRY")[0].bid,
          paribuxXlmAsk: jsonData.filter(x => x.pair === "XLMTRY")[0].ask
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
          paribuXrpAsk: jsonData.XRP_TL.lowestAsk,
          paribuXlmBid: jsonData.XLM_TL.highestBid,
          paribuXlmAsk: jsonData.XLM_TL.lowestAsk,
          paribuBchBid: jsonData.BCH_TL.highestBid,
          paribuBchAsk: jsonData.BCH_TL.lowestAsk,
          paribuEosBid: jsonData.EOS_TL.highestBid,
          paribuEosAsk: jsonData.EOS_TL.lowestAsk,
          paribuBatBid: jsonData.BAT_TL.highestBid,
          paribuBatAsk: jsonData.BAT_TL.lowestAsk
        });
      });

    fetch("https://coin-serv.herokuapp.com/kur")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({ kur: jsonData.kur });
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
    fetch("https://api.pro.coinbase.com/products/BCH-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseBchBid: jsonData.bid,
          coinbaseBchAsk: jsonData.ask,
          coinbasexBchBid: jsonData.bid,
          coinbasexBchAsk: jsonData.ask,
          coinbasexxBchBid: jsonData.bid,
          coinbasexxBchAsk: jsonData.ask
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
    fetch("https://api.pro.coinbase.com/products/XLM-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseXlmBid: jsonData.bid,
          coinbaseXlmAsk: jsonData.ask,
          coinbasexXlmBid: jsonData.bid,
          coinbasexXlmAsk: jsonData.ask,
          coinbasexxXlmBid: jsonData.bid,
          coinbasexxXlmAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/EOS-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseEosBid: jsonData.bid,
          coinbaseEosAsk: jsonData.ask,
          coinbasexEosBid: jsonData.bid,
          coinbasexEosAsk: jsonData.ask,
          coinbasexxEosBid: jsonData.bid,
          coinbasexxEosAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/ETC-USD/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseEtcBid: jsonData.bid,
          coinbaseEtcAsk: jsonData.ask,
          coinbasexEtcBid: jsonData.bid,
          coinbasexEtcAsk: jsonData.ask,
          coinbasexxEtcBid: jsonData.bid,
          coinbasexxEtcAsk: jsonData.ask
        });
      });
    fetch("https://api.pro.coinbase.com/products/BAT-USDC/ticker")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          coinbaseBatBid: jsonData.bid,
          coinbaseBatAsk: jsonData.ask
        });
      });
  }

  getData(type) {
    return {
      yollanan: this.state.yollanan,
      wireBedeli: this.state.wireBedeli,
      coinbaseKomisyon: this.state.coinbaseKomisyon,
      paribuKomisyon: this.state.paribuKomisyon,
      paribuFiyat: this.state["paribu" + type + "Bid"],
      coinbaseFiyat: this.state["coinbase" + type + "Ask"],
      guncelKur: this.state.kur
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
      guncelKur: this.state.kur
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
          <div className="row">
            <div className="col-xs-12">
              <b>Kur: {this.state.kur}</b>
            </div>
          </div>
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

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Xlm")}
                  ratio="0.002"
                  title="XLM"
                  type="Xlm"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Xlm")}
                  ratio="0.0004"
                  title="rXLM"
                  onIncrease={this.increaseReverse}
                  type="Xlm"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xXlm")}
                  ratio="0.002"
                  title="XLM - BTCTURK"
                  type="xXlm"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xXlm")}
                  ratio="0.0004"
                  title="rXLM - BTCTURK"
                  onIncrease={this.increaseReverse}
                  type="xXlm"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxXlm")}
                  ratio="0.002"
                  title="XLM - KOINEKS"
                  type="xxXlm"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxXlm")}
                  ratio="0.0004"
                  title="rXLM - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxXlm"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Bch")}
                  ratio="5"
                  title="BCH"
                  type="Bch"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Bch")}
                  ratio="1"
                  title="rBCH"
                  onIncrease={this.increaseReverse}
                  type="Bch"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxBch")}
                  ratio="5"
                  title="BCH - KOINEKS"
                  type="xxBch"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxBch")}
                  ratio="1"
                  title="rBCH - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxBch"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Eos")}
                  ratio="0.2"
                  title="EOS"
                  type="Eos"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Eos")}
                  ratio="0.04"
                  title="rEOS"
                  onIncrease={this.increaseReverse}
                  type="Eos"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxEos")}
                  ratio="0.2"
                  title="EOS - KOINEKS"
                  type="xxEos"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxEos")}
                  ratio="0.04"
                  title="rEOS - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxEos"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("xxEtc")}
                  ratio="0.2"
                  title="ETC - KOINEKS"
                  type="xxEtc"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("xxEtc")}
                  ratio="0.04"
                  title="rETC - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="xxEtc"
                />
              }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Bat")}
                  ratio="0.1"
                  title="BAT - PARIBU"
                  type="Bat"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Bat")}
                  ratio="0.02"
                  title="rBAT - KOINEKS"
                  onIncrease={this.increaseReverse}
                  type="Bat"
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
