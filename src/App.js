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
  }

  state = {};

  fetchApi() {
    fetch("https://cors-anywhere.herokuapp.com/https://www.paribu.com/ticker")
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
          yollanan: 25000,
          wireBedeli: 100,
          transferBedeli: 10,
          coinbaseKomisyon: 0,
          paribuKomisyon: 0.15
        });
        fetch("https://api.pro.coinbase.com/products/BTC-USD/ticker")
          .then(res => res.json())
          .then(jsonData => {
            this.setState({
              coinbaseBtcBid: jsonData.bid,
              coinbaseBtcAsk: jsonData.ask
            });
          });
        fetch("https://api.pro.coinbase.com/products/ETH-USD/ticker")
          .then(res => res.json())
          .then(jsonData => {
            this.setState({
              coinbaseEthBid: jsonData.bid,
              coinbaseEthAsk: jsonData.ask
            });
          });
        fetch("https://api.pro.coinbase.com/products/LTC-USD/ticker")
          .then(res => res.json())
          .then(jsonData => {
            this.setState({
              coinbaseLtcBid: jsonData.bid,
              coinbaseLtcAsk: jsonData.ask
            });
          });
        fetch(
          "https://cors-anywhere.herokuapp.com/https://www.bitstamp.net/api/v2/ticker/xrpeur/"
        )
          .then(res => res.json())
          .then(jsonData => {
            this.setState({
              coinbaseXrpBid: jsonData.bid,
              coinbaseXrpAsk: jsonData.ask
            });
          });

        fetch("https://cors-anywhere.herokuapp.com/https://www.doviz.com").then(
          res => {
            res
              .text()
              .then(result => Parser(result))
              .then(
                result =>
                  result.props.children[1].props.children[10].props.children[1]
                    .props.children[1].props.children[1].props.children[3].props
                    .children[3].props.children[1].props.children[3].props
                    .children
              )
              .then(result => {
                this.setState({
                  guncelKur: result
                });
              });
          }
        );
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
      guncelKur: this.state.guncelKur
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
      guncelKur: this.state.guncelKur
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
              <b>Kur: {this.state.guncelKur}</b>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Btc")}
                  ratio="50"
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
                  ratio="10"
                  title="Reverse BTC"
                  type="Btc"
                  onIncrease={this.increaseReverse}
                />
              }
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Eth")}
                  ratio="5"
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
                  ratio="1"
                  title="Reverse ETH"
                  onIncrease={this.increaseReverse}
                  type="Eth"
                />
              }
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Ltc")}
                  ratio="1"
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
                  ratio="0.2"
                  title="Reverse LTC"
                  onIncrease={this.increaseReverse}
                  type="Ltc"
                />
              }
            </div>
          </div>
          <br />
          {/* <div className="row">
            <div className="col-xs-6">
              {
                <Main
                  attributes={this.getData("Xrp")}
                  title="XRP"
                  ratio="0.01"
                  passive
                  type="Xrp"
                  onIncrease={this.increase}
                />
              }
            </div>
            <div className="col-xs-6">
              {
                <ReverseMain
                  attributes={this.getDataReverse("Xrp")}
                  title="Reverse XRP"
                  ratio="0.002"
                  passive
                  onIncrease={this.increaseReverse}
                  type="Xrp"
                />
              }
            </div>
          </div> */}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
