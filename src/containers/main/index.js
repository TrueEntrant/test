import React from "react";
import logo from "../../logo.svg";
import { CurrencyTable } from "../../components/currency";
import Calculator from "../../components/calculator";

export default class Main extends React.Component {
  state = {};

  componentWillMount() {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(res => res.json())
      .then(data =>
        setTimeout(() => {
          localStorage.setItem("data", JSON.stringify(data));
          this.setState({ data });
        }, 1000)
      )
      .catch(err => this.setState({ data: localStorage.getItem("data") }));
    if (!navigator.onLine) {
      this.setState({ data: localStorage.getItem("data") });
    }
  }

  renderHeader = () => {
    const { data } = this.state;
    console.log(data);

    return (
      <div className="App-header">
        <h2>Base currency: {data.base}</h2>
        <h3>Latest update: {data.date}</h3>
      </div>
    );
  };

  renderTable = () => {
    return (
      <div>
        <div className="table-row">
          <h4>Currency</h4>
          <h4>Amount in base</h4>
        </div>
        {Object.entries(this.state.data.rates).map(([key, value]) => {
          const flag = key === "USD" || key === "UAH";
          return flag && <CurrencyTable key={key} name={key} value={value} />;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {!this.state.data ? (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <div>
              {this.renderHeader()}
              {this.renderTable()}
            </div>
            <div className="calc-root">
              <Calculator result="Dollar" name="Euro" rate={this.state.data.rates.USD} />
              <Calculator name="Dollar" result="Euro" rate={this.state.data.rates.USD} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
