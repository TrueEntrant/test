import React from "react";

export default class Calculator extends React.Component {
  state = { amount: "", result: 0 };
  onChange = e => {
    const amount = e.target.value;
    const eur = Math.round((amount * this.props.rate * 100) / 100).toFixed(2);
    const dol = Math.round(((amount / this.props.rate) * 100) / 100).toFixed(2);

    const result = this.props.name === "Euro" ? eur : dol;
    this.setState({ amount, result });
  };
  render() {
    return (
      <div>
        <div className="table-row">
          <div className="table-col">
            <label>Input a {this.props.name} amounts</label>
            <input
              placeholder="0"
              type="number"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>
          <div className="table-col">
            <p>Result in {this.props.result}</p>
            <p className="resul-val">{this.state.result}</p>
          </div>
        </div>
      </div>
    );
  }
}
