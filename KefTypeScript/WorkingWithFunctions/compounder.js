(function () {
    //Stand-alone funtion
    function displayResult(msg) {
        //result.innerHTML = msg;
    }
    //Anonymous function/method
    var compound = function (amt, rate, years) {
        var months = years * 12;
        var yrRate = (rate / 12) / 100;
        return amt * Math.pow(1 + yrRate, months);
    };
    var $ = function (id) { return document.getElementById(id); }; //this returns the element by id, returns DOM element
    //find an element by (id) and get DOM element, then CAST it ex. <HTMLButtonElement>
    var totalButton = $('totalButton'), amount = $('amount'), rate = $('rate'), years = $('years'), result = $('result');
    totalButton.addEventListener('click', function (e) {
        var amountValue = parseFloat(amount.value), rateValue = parseFloat(rate.value), yearsValue = parseFloat(years.value);
        displayResult('$' + compound(amountValue, rateValue, yearsValue).toFixed(2));
    });
    //optional parameters vs default
    function buildName(firstName, lastName) {
    }
    function buildNameDef(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
    }
});
//# sourceMappingURL=compounder.js.map