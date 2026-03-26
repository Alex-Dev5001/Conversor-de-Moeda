const inputValue = document.querySelector(".input_value");  /* ok*/

function clickConverter() {
    const dolarToday = 5;         /*ok*/
    const valueConverted = inputValue.value / dolarToday;    /*ok*/
    document.querySelector(".input_value_brazil").value = `R$ ${inputValue.value}`;   /*ok*/
    document.querySelector(".input_value_eua").value = `US$ ${valueConverted}`;   /*ok*/
}

const converterButton = document.querySelector(".converter-button");    /*ok*/
converterButton.addEventListener("click", clickConverter);   /*ok*/














