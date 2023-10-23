// import { Container } from "@mui/material";
// import PropTypes from "prop-types";
// import { useStyles } from "./currencyInputStyle";

// function CurrencyInput(props) {
//   const classes = useStyles();

//   return (
//     <Container>
//       <div className={classes.group}>
//         <input
//           className={classes.input}
//           type="text"
//           value={props.amount}
//           onChange={(ev) => props.onAmountChange(ev.target.value)}
//         />
//         <select
//           className={classes.select}
//           value={props.currency}
//           onChange={(ev) => props.onCurrencyChange(ev.target.value)}
//         >
//           {props.currencies.map((currency) => (
//             <option value={currency}>{currency}</option>
//           ))}
//         </select>
//       </div>
//     </Container>
//   );
// }

// CurrencyInput.propTypes = {
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
//   currencies: PropTypes.array,
//   onAmountChange: PropTypes.func,
//   onCurrencyChange: PropTypes.func,
// };

// export default CurrencyInput;

import React from "react";

import { useStyles } from "./currencyInputStyle";

import "currency-flags/dist/currency-flags.min.css";

interface CurrencyProps {
  onCurrencyChange: (value: string) => void;
  currencies: Array<string>;
  currency: string;
  label: string;
  names: Array<string>;
}

export function CurrencyInput({
  onCurrencyChange,
  currencies,
  currency,
  label,
  names,
  ...props
}: CurrencyProps) {
  const lowCurrency = currency.toLowerCase();

  const currenciesCodes = Object.keys(names);
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <label className={classes.wrap}>{label}</label>
      <div className={classes.group}>
        <div
          className={`currency-flag currency-flag-${lowCurrency}`}
          style={{
            width: "60px",
            height: "35px",
            borderRadius: "2px",
          }}
        ></div>
        <select
          style={{
            width: "100%",
            border: 0,
            fontSize: "1.2rem",
            overflow: "hidden",
          }}
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currenciesCodes.map((currency) => (
            <option value={currency} key={currency}>
              {names[currency].currency_code} - {names[currency].currency_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
