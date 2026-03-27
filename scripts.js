const inputValue = document.querySelector(".input_value");  /* ok*/

function clickConverter() {
    const cambioBrlDolar = 0.1909271;         /*ok*/
    const cambioBrlEuro = 0.1657688;         /*ok*/
    const cambioDolarEuro = 1.1519;         /*ok*/
    const bitcoinToday = 0.0000029;         /*ok*/

    if (inputCurrency.value == inputCurrencyConverted.value) {

        if (inputCurrency.value == "real") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
        }

        if (inputCurrency.value == "dolar") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
        }

        if (inputCurrency.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
        }

        if (inputCurrency.value == "bitcoin") {
            document.querySelector(".input_value_1").value = `BTC ${inputValue.value / 1}`;
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / 1}`;
        }

    }

    if (inputCurrency.value == "real") {

        if (inputCurrencyConverted.value == "dolar") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value * cambioBrlDolar);
        }

        if (inputCurrencyConverted.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value * cambioBrlEuro);
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value * bitcoinToday}`;
        }
    }

    if (inputCurrency.value == "dolar") {

        if (inputCurrencyConverted.value == "real") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / cambioBrlDolar);
        }

        if (inputCurrencyConverted.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / cambioDolarEuro);
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / cambioBrlDolar * bitcoinToday}`;
        }
    }

    if (inputCurrency.value == "euro") {

        if (inputCurrencyConverted.value == "real") {
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / cambioBrlEuro);
        }

        if (inputCurrencyConverted.value == "dolar") {
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / cambioDolarEuro);
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / cambioBrlEuro * bitcoinToday}`;
        }
    }

}



const converterButton = document.querySelector(".converter-button");    /*ok*/
converterButton.addEventListener("click", clickConverter);   /*ok*/

const inputCurrency = document.querySelector(".currency");    /*ok*/
const inputCurrencyConverted = document.querySelector(".currency-converted");    /*ok*/














