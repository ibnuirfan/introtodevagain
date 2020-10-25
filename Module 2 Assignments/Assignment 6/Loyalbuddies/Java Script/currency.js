function currency() {
    // selecting the currency to operate in
    let select = document.getElementById("currency-select").value;
    // searches the DOM
    let list = document.getElementsByClassName("price");
    let currencyformat = document.getElementsByClassName("currencyformat");


    if (select == "SGD") {
        for (let i = 0; i < list.length; i++) {
            currencyformat[i].innerHTML = "Price : SGD";
            // base price (SGD)
            let sgd = price[i];
            list[i].innerHTML = sgd;
        }
    }
    if (select == "USD") {
        let usd;
        for (let i = 0; i < list.length; i++) {
            currencyformat[i].innerHTML = "Price : USD";
            // base price (SGD) * USD rate
            let usd = price[i] * 0.74;
            list[i].innerHTML = usd;
        }
    }
    if (select == "GBP") {
        let gbp;
        for (let i = 0; i < list.length; i++) {
            currencyformat[i].innerHTML = "Price : Pound";
            // base price (SGD) * GBP rate
            let gbp = price[i] * 0.57;
            list[i].innerHTML = "£ " + gbp.toFixed(2);
        }
    }
    if (select == "CAD") {
        let cad;
        for (let i = 0; i < list.length; i++) {
            currencyformat[i].innerHTML = "Price : CAD";
            // base price (SGD) * CAD rate
            let jpy = price[i] * 0.97;
            list[i].innerHTML = "C$ " + cad.toFixed(2);
        }
    }
    if (select == "EUR") {
        let eur;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : EURO";
            // base price (SGD) * EUR rate
            let rm = price[i] * 0.63;
            list[i].innerHTML = "€ " + eur.toFixed(2);
        }
    }
    if (select == "AUD") {
        let aud;
        for (let i = 0; i < list.length; i++) {
            currencyformat[i].innerHTML = "Price : AUD";
            //  base price (SGD) * AUD rate
            let bht = price[i] * 1.04;
            list[i].innerHTML = "AU$ " + aud.toFixed(2);
        }
    }
}