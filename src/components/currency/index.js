import React from "react";

export const CurrencyTable = ({ name, value }) => {
  return (
    <div className="table-row">
      <p>{name}</p>
      <p>{value.toFixed(2)}</p>
    </div>
  );
};
