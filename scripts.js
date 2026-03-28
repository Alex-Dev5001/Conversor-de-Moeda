const inputValue = document.querySelector(".input_value");  /* ok*/

function clickConverter() {
    const cambioBrlDolar = 0.1909271;
    const cambioBrlEuro = 0.1657688;
    const cambioDolarEuro = 1.1519;
    const bitcoinToday = 345477;

    if (inputCurrency.value == inputCurrencyConverted.value) {

        if (inputCurrency.value == "real") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".img-1").src = "img/brasil 2.png";
            document.querySelector(".img-2").src = "img/brasil 2.png";
            document.querySelector(".paragrafo_4").innerHTML = "Real";
            document.querySelector(".paragrafo_5").innerHTML = "Real";
        }

        if (inputCurrency.value == "dolar") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".img-1").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".img-2").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".paragrafo_4").innerHTML = "Dólar";
            document.querySelector(".paragrafo_5").innerHTML = "Dólar";
        }

        if (inputCurrency.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".img-1").src = "img/euro.png";
            document.querySelector(".img-2").src = "img/euro.png";
            document.querySelector(".paragrafo_4").innerHTML = "Euro";
            document.querySelector(".paragrafo_5").innerHTML = "Euro";
        }

        if (inputCurrency.value == "bitcoin") {
            document.querySelector(".input_value_1").value = `BTC ${inputValue.value / 1}`;
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / 1}`;
            document.querySelector(".img-1").src = "img/bitcoin.png";
            document.querySelector(".img-2").src = "img/bitcoin.png";
            document.querySelector(".paragrafo_4").innerHTML = "Bitcoin";
            document.querySelector(".paragrafo_5").innerHTML = "Bitcoin";
        }

    }

    if (inputCurrency.value == "real") {

        if (inputCurrencyConverted.value == "dolar") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value * cambioBrlDolar);
            document.querySelector(".img-1").src = "img/brasil 2.png";
            document.querySelector(".img-2").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".paragrafo_4").innerHTML = "Real";
            document.querySelector(".paragrafo_5").innerHTML = "Dólar";
        }

        if (inputCurrencyConverted.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value * cambioBrlEuro);
            document.querySelector(".img-1").src = "img/brasil 2.png";
            document.querySelector(".img-2").src = "img/euro.png";
            document.querySelector(".paragrafo_4").innerHTML = "Real";
            document.querySelector(".paragrafo_5").innerHTML = "Euro";
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / bitcoinToday}`;
            document.querySelector(".img-1").src = "img/brasil 2.png";
            document.querySelector(".img-2").src = "img/bitcoin.png";
            document.querySelector(".paragrafo_4").innerHTML = "Real";
            document.querySelector(".paragrafo_5").innerHTML = "Bitcoin";
        }
    }

    if (inputCurrency.value == "dolar") {

        if (inputCurrencyConverted.value == "real") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / cambioBrlDolar);
            document.querySelector(".img-1").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".img-2").src = "img/brasil 2.png";
            document.querySelector(".paragrafo_4").innerHTML = "Dólar";
            document.querySelector(".paragrafo_5").innerHTML = "Real";
        }

        if (inputCurrencyConverted.value == "euro") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / cambioDolarEuro);
            document.querySelector(".img-1").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".img-2").src = "img/euro.png";
            document.querySelector(".paragrafo_4").innerHTML = "Dólar";
            document.querySelector(".paragrafo_5").innerHTML = "Euro";
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / cambioBrlDolar / bitcoinToday}`;
            document.querySelector(".img-1").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".img-2").src = "img/bitcoin.png";
            document.querySelector(".paragrafo_4").innerHTML = "Dólar";
            document.querySelector(".paragrafo_5").innerHTML = "Bitcoin";
        }
    }

    if (inputCurrency.value == "euro") {

        if (inputCurrencyConverted.value == "real") {
            document.querySelector(".input_value_1").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue.value / cambioBrlEuro);
            document.querySelector(".img-1").src = "img/euro.png";
            document.querySelector(".img-2").src = "img/brasil 2.png";
            document.querySelector(".paragrafo_4").innerHTML = "Euro";
            document.querySelector(".paragrafo_5").innerHTML = "Real";
        }

        if (inputCurrencyConverted.value == "dolar") {
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" }).format(inputValue.value * cambioDolarEuro);
            document.querySelector(".img-1").src = "img/euro.png";
            document.querySelector(".img-2").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".paragrafo_4").innerHTML = "Euro";
            document.querySelector(".paragrafo_5").innerHTML = "Dólar";
        }

        if (inputCurrencyConverted.value == "bitcoin") {
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" }).format(inputValue.value / 1);
            document.querySelector(".input_value_2").value = `BTC ${inputValue.value / cambioBrlEuro / bitcoinToday}`;
            document.querySelector(".img-1").src = "img/euro.png";
            document.querySelector(".img-2").src = "img/bitcoin.png";
            document.querySelector(".paragrafo_4").innerHTML = "Euro";
            document.querySelector(".paragrafo_5").innerHTML = "Bitcoin";
        }
    }

    if (inputCurrency.value == "bitcoin") {

        if (inputCurrencyConverted.value == "real") {
            document.querySelector(".input_value_1").value = `BTC ${inputValue.value * 1}`;
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("pt-BR", { style: "currency", currency: "BRL" })
                .format(inputValue.value * bitcoinToday);
            document.querySelector(".img-1").src = "img/bitcoin.png";
            document.querySelector(".img-2").src = "img/brasil 2.png";
            document.querySelector(".paragrafo_4").innerHTML = "Bitcoin";
            document.querySelector(".paragrafo_5").innerHTML = "Real";
        }

        if (inputCurrencyConverted.value == "dolar") {
            document.querySelector(".input_value_1").value = `BTC ${inputValue.value * 1}`;
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("en-US", { style: "currency", currency: "USD" })
                .format(inputValue.value * bitcoinToday * cambioBrlDolar);
            document.querySelector(".img-1").src = "img/bitcoin.png";
            document.querySelector(".img-2").src = "img/estados-unidos (1) 1.png";
            document.querySelector(".paragrafo_4").innerHTML = "Bitcoin";
            document.querySelector(".paragrafo_5").innerHTML = "Dólar";
        }

        if (inputCurrencyConverted.value == "euro") {
            document.querySelector(".input_value_1").value = `BTC ${inputValue.value * 1}`;
            document.querySelector(".input_value_2").value = Intl.NumberFormat
                ("fr-FR", { style: "currency", currency: "EUR" })
                .format(inputValue.value * bitcoinToday * cambioBrlEuro);
            document.querySelector(".img-1").src = "img/bitcoin.png";
            document.querySelector(".img-2").src = "img/euro.png";
            document.querySelector(".paragrafo_4").innerHTML = "Bitcoin";
            document.querySelector(".paragrafo_5").innerHTML = "Euro";
        }
    }

}

const boxMain = document.querySelector("main");
let alturaJanela = window.screen.height;
console.log(alturaJanela);
let larguraJanela = window.screen.width;
console.log(larguraJanela);

if (alturaJanela > 700 && larguraJanela < 380) {
    boxMain.style.backgroundColor = "blue"
    boxMain.style.width = "80vw"
    boxMain.style.margin = "auto"
    boxMain.style.height = "67vh"
}

const converterButton = document.querySelector(".converter-button");
converterButton.addEventListener("click", clickConverter);
const inputCurrency = document.querySelector(".currency");
const inputCurrencyConverted = document.querySelector(".currency-converted");












