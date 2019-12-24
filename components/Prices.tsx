import { useState, SyntheticEvent } from "react";

import { Currency } from "../utils/enums.utils";

interface IntrinsicAttributes {
  bpi: any;
}

const Prices: React.FC<IntrinsicAttributes> = ({ bpi }) => {
  const [currency, setCurrency] = useState(Currency.USD);

  function handleChange(e: React.FormEvent<HTMLSelectElement>) {
    e.preventDefault();
    const element = e.target as HTMLSelectElement;

    if (
      element.value === Currency.USD ||
      element.value === Currency.EUR ||
      element.value === Currency.GBP
    ) {
      setCurrency(element.value);
    }
  }

  return (
    <div className="columns">
      <div className="column is-full">
        <div className="box">
          <div className="columns">
            <div className="column is-full">
              <div className="control">
                <div className="select is-small">
                  <select
                    name="currency"
                    id="currency"
                    defaultValue={currency}
                    onChange={handleChange}
                  >
                    <option value={Currency.USD}>{Currency.USD}</option>
                    <option value={Currency.EUR}>{Currency.EUR}</option>
                    <option value={Currency.GBP}>{Currency.GBP}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-full">
              <ul>
                <li>
                  Bitcoin rate for {bpi.bpi[currency].description}:{" "}
                  <span className="tag is-info">{bpi.bpi[currency].code}</span>{" "}
                  <strong>{bpi.bpi[currency].rate}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
