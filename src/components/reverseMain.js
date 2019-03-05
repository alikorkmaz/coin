import React, { Component } from "react";

class ReverseMain extends Component {
  state = {
    vis: false
  };

  handleClick = () => {
    this.setState({ vis: true });
  };

  render() {
    const gidenToplam =
      +this.props.attributes.yollanan - +this.props.attributes.wireBedeli;
    const paribudanKomisyonlu =
      gidenToplam - (gidenToplam * this.props.attributes.paribuKomisyon) / 100;
    const paribudanAlinan =
      paribudanKomisyonlu / this.props.attributes.paribuFiyat;
    const coinbaseKomisyonlu =
      paribudanAlinan -
      (paribudanAlinan * this.props.attributes.coinbaseKomisyon) / 100;
    const coinbasedenGelen =
      coinbaseKomisyonlu * this.props.attributes.coinbaseFiyat;
    const kur = this.props.attributes.yollanan / coinbasedenGelen;
    const className =
      kur < this.props.attributes.guncelKur ? "positive" : "negative";
    return (
      <React.Fragment>
        <div onClick={this.handleClick} className={className}>
          {this.props.title}
          <div className={this.state.vis ? "vis" : "novis"}>
            <br />
            Yollanan: ₺{this.props.attributes.yollanan}
            <br />
            Transfer Bedeli: ₺{this.props.attributes.wireBedeli}
            <br />
            CB Komisyon: {this.props.attributes.coinbaseKomisyon}%
            <br />
            PA Komisyon: {this.props.attributes.paribuKomisyon}%
            <br />
            CB Fiyat: ${(+this.props.attributes.coinbaseFiyat).toFixed(3)}
            <br />
            PA Fiyat: ₺{(+this.props.attributes.paribuFiyat).toFixed(3)}
            <br />
            Giden: ₺{gidenToplam}
            <br />
            CB: {paribudanAlinan.toFixed(3)}
            <br />
            PA: ₺{coinbasedenGelen.toFixed(2)}
            <br />
          </div>
          Alım Kur: <b>${kur.toFixed(3)}</b>
          <div className={this.state.vis ? "vis" : "novis"}>
            <div className="row">
              <div className="col-xs-6">
                <button
                  onClick={() =>
                    this.props.onIncrease(
                      +this.props.ratio * -1,
                      this.props.type,
                      this.props.attributes.coinbaseFiyat
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
                      this.props.attributes.coinbaseFiyat
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

export default ReverseMain;
