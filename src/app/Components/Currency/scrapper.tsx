// import "./App.css";
// import CurrencyInput from "../Currency/CurrencyInput";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Container } from "@mui/material";

// function Scrapper() {
//   const [amount1, setAmount1] = useState(1);
//   const [amount2, setAmount2] = useState(1);
//   const [currency1, setCurrency1] = useState("USD");
//   const [currency2, setCurrency2] = useState("EUR");
//   const [rates, setRates] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://currencyscoop.p.rapidapi.com/latest", {
//         headers: {
//           "X-RapidAPI-Key":
//             "02054ac208mshcbb7c3c01bb9c73p19b1c2jsn824051df23ef",
//           "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
//         },
//       })
//       .then((response) => {
//         setRates(response.data.rates);
//       });
//   }, []);

//   useEffect(() => {
//     if (!!rates) {
//       const init = function () {
//         handleAmount1Change(1);
//       };
//       init();
//     }
//   }, [rates]);

//   function format(number) {
//     return number.toFixed(4);
//   }

//   function handleAmount1Change(amount1) {
//     setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
//     setAmount1(amount1);
//   }

//   function handleCurrency1Change(currency1) {
//     setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
//     setCurrency1(currency1);
//   }

//   function handleAmount2Change(amount2) {
//     setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
//     setAmount2(amount2);
//   }

//   function handleCurrency2Change(currency2) {
//     setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
//     setCurrency2(currency2);
//   }

//   return (
//     <Container>
//       <div>
//         <h1>Currency Converter</h1>
//         <CurrencyInput
//           onAmountChange={handleAmount1Change}
//           onCurrencyChange={handleCurrency1Change}
//           currencies={Object.keys(rates)}
//           amount={amount1}
//           currency={currency1}
//         />
//         <CurrencyInput
//           onAmountChange={handleAmount2Change}
//           onCurrencyChange={handleCurrency2Change}
//           currencies={Object.keys(rates)}
//           amount={amount2}
//           currency={currency2}
//         />
//       </div>
//     </Container>
//   );
// }

// export default Scrapper;

import { FormEvent, useEffect, useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { AiOutlineSwap } from "react-icons/ai";
// import GithubCorner from "react-github-corner";

import { CurrencyInput } from "./CurrencyInput";
import { useStyles } from "./currencyInputStyle";
import { Container } from "@mui/material";

export default function Scrapper() {
  const classes = useStyles();

  const [rates, setRates] = useState([]);
  const [date, setDate] = useState("");

  const [currency1, setCurrency1] = useState("TND");
  const [currency2, setCurrency2] = useState("USD");

  const [currentNames, setCurrentNames] = useState([]);

  const [amount1, setAmount1] = useState<number>();
  const [amount2, setAmount2] = useState<number>();

  const symbol1 = getSymbolFromCurrency(currency1);
  const symbol2 = getSymbolFromCurrency(currency2);

  const [invert, setInvert] = useState(false);

  const newDate = new Date(date).toDateString();

  function format(number: any) {
    return number.toFixed(2);
  }

  function handleCurrency1Change(currency1: string) {
    setCurrency1(currency1);
  }

  function handleCurrency2Change(currency2: string) {
    setCurrency2(currency2);
  }

  function convertCurrencies(event: FormEvent) {
    event.preventDefault();

    if (!invert) {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    } else {
      setAmount2(format((amount1 * rates[currency1]) / rates[currency2]));
    }
  }

  function invertCurrencies() {
    setInvert(!invert);
  }

  useEffect(() => {
    const x_rapidapi_host = "currencyscoop.p.rapidapi.com";
    const x_rapidapi_key = "02054ac208mshcbb7c3c01bb9c73p19b1c2jsn824051df23ef";

    fetch("https://currencyscoop.p.rapidapi.com/latest", {
      method: "GET",
      headers: {
        "x-rapidapi-host": x_rapidapi_host,
        "x-rapidapi-key": x_rapidapi_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRates(json.response.rates);
        setDate(json.response.date);
      });
  }, []);

  useEffect(() => {
    const x_rapidapi_host = "currencyscoop.p.rapidapi.com";
    const x_rapidapi_key = "02054ac208mshcbb7c3c01bb9c73p19b1c2jsn824051df23ef";

    fetch("https://currencyscoop.p.rapidapi.com/currencies", {
      method: "GET",
      headers: {
        "x-rapidapi-host": x_rapidapi_host,
        "x-rapidapi-key": x_rapidapi_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCurrentNames(json.response.fiats);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currency1, currency2]);

  return (
    <Container>
      <div className={classes.app}>
        {/* <GithubCorner
        href="https://github.com/jneris-dev/xchange"
        direction="left"
        bannerColor="#fff"
        octoColor="#264c37"
        size={60}
        target="_blank"
      /> */}
        <div className={classes.card}>
          <h1>Currency Converter</h1>
          <p>
            last updated: <span>{newDate}</span>
          </p>
          <form className="todoWrap" onSubmit={convertCurrencies}>
            <div className={classes.inputGroup}>
              <span className={classes.symbol}>
                {!invert ? symbol1 : symbol2}
              </span>
              <input
                type="number"
                className={classes.amount}
                onChange={(e) => setAmount1(Number(e.target.value))}
                required
                defaultValue={amount1}
                placeholder="Enter Amount"
                step="any"
              />
            </div>
            <div className={classes.currencies}>
              <CurrencyInput
                onCurrencyChange={
                  !invert ? handleCurrency1Change : handleCurrency2Change
                }
                currencies={Object.keys(rates)}
                currency={!invert ? currency1 : currency2}
                label={"From"}
                names={currentNames}
              />
              <div className={classes.invertCurrency}>
                <span onClick={invertCurrencies}>
                  <AiOutlineSwap size={30} color="#264c37" />
                </span>
              </div>
              <CurrencyInput
                onCurrencyChange={
                  !invert ? handleCurrency2Change : handleCurrency1Change
                }
                currencies={Object.keys(rates)}
                currency={!invert ? currency2 : currency1}
                label={"To"}
                names={currentNames}
              />
            </div>
            <button className={classes.convertButton} type="submit">
              Convert Now
            </button>
          </form>
          <p
            className={classes.result}
            style={amount2 && { visibility: "visible" }}
          >
            {!invert ? symbol2 : symbol1} {amount2}
          </p>
          <hr />
          <p>Result</p>
        </div>
      </div>
    </Container>
  );
}
