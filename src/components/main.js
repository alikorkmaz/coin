import React, { Component } from "react";

class Main extends Component {
  state = {
    vis: false
  };

  handleClick = () => {
    this.setState({ vis: true });
  };

  render() {
    const gidenToplam =
      +this.props.attributes.yollanan - +this.props.attributes.wireBedeli;
    const coinbasedenKomisyonlu =
      gidenToplam -
      (gidenToplam * this.props.attributes.coinbaseKomisyon) / 100;
    const coinbasedenAlinan =
      coinbasedenKomisyonlu / this.props.attributes.coinbaseFiyat;
    const paribuKomisyonlu =
      coinbasedenAlinan -
      (coinbasedenAlinan * this.props.attributes.paribuKomisyon) / 100;
    const paribudanGelen = paribuKomisyonlu * this.props.attributes.paribuFiyat;
    const kur = paribudanGelen / this.props.attributes.yollanan;
    const className =
      kur > this.props.attributes.guncelKur ? "positive" : "negative";
    return (
      <React.Fragment>
        <div onClick={this.handleClick} className={className}>
          {this.props.title}
          <br />
          <div className={this.state.vis ? "vis" : "novis"}>
            Yollanan: ${this.props.attributes.yollanan}
            <br />
            Wire Bedeli: ${this.props.attributes.wireBedeli}
            <br />
            CB Komisyon: {this.props.attributes.coinbaseKomisyon}%
            <br />
            PA Komisyon: {this.props.attributes.paribuKomisyon}%
            <br />
            CB Fiyat: ${(+this.props.attributes.coinbaseFiyat).toFixed(4)}
            <br />
            PA Fiyat: ₺{(+this.props.attributes.paribuFiyat).toFixed(4)}
            <br />
            Giden : ${gidenToplam}
            <br />
            CB: {coinbasedenAlinan.toFixed(3)}
            <br />
            PA: ₺{paribudanGelen.toFixed(2)}
            <br />
          </div>
          Satım Kur: <b>${kur.toFixed(3)}</b>
          <div className={this.state.vis ? "vis" : "novis"}>
            <div className="row">
              <div className="col-xs-6">
                <button
                  onClick={() =>
                    this.props.onIncrease(
                      +this.props.ratio * -1,
                      this.props.type,
                      this.props.attributes.paribuFiyat
                    )
                  }
                  className="custom-btn btn btn-primary btn-xs"
                >
                  -{this.props.ratio}
                </button>
              </div>
              <div className="col-xs-6">
                <button
                  onClick={() =>
                    this.props.onIncrease(
                      this.props.ratio,
                      this.props.type,
                      this.props.attributes.paribuFiyat
                    )
                  }
                  className="custom-btn btn btn-primary btn-xs"
                >
                  +{this.props.ratio}
                </button>
              </div>
            </div>
          </div>
        </div>
        <br className={this.state.vis ? "vis" : "novis"} />
      </React.Fragment>
    );
  }
}

export default Main;
