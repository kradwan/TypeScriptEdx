(function () {
    //Stand-alone funtion
    function displayResult(msg: string) {
        //result.innerHTML = msg;
    }

    //Anonymous function/method
    var compound = function (amt: number, rate: number, years: number): number {
        var months = years * 12;
        var yrRate: number = (rate / 12) / 100;
        return amt * Math.pow(1 + yrRate, months);
    }
    var $ = (id) => document.getElementById(id); //this returns the element by id, returns DOM element

    //find an element by (id) and get DOM element, then CAST it ex. <HTMLButtonElement>
    var totalButton: HTMLButtonElement = <HTMLButtonElement>$('totalButton'),
        amount: HTMLInputElement = <HTMLInputElement>$('amount'),
        rate: HTMLInputElement = <HTMLInputElement>$('rate'),
        years: HTMLInputElement = <HTMLInputElement>$('years'),
        result = $('result');

    totalButton.addEventListener('click', (e) => {
        var amountValue = parseFloat(amount.value),
            rateValue = parseFloat(rate.value),
            yearsValue = parseFloat(years.value);

        displayResult('$' + compound(amountValue, rateValue, yearsValue).toFixed(2));
    });

    //optional parameters vs default
    function buildName(firstName: string, lastName?: string) {
    }
    function buildNameDef(firstName: string, lastName = "Smith") {
    }

}
)