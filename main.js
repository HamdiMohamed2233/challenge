function calculate(){
    var amount = document.getElementById("amount")
    var termInYears = document.getElementById("years")
    var months = document.getElementById("months")
    var rate = document.getElementById("rate")

    var loanAmount = parseFloat(amount.value);
    var years = parseFloat(termInYears.value) * 12;
    var interest = parseFloat(rate.value) / 100 / 12;
    var termInMonths = parseFloat(months.value);

    var monthlyPayments = ((loanAmount / termInMonths) + interest).toFixed(2);
    var totalInterestPaid = (loanAmount * (interest * 0.01)) / termInMonths + years;
    var totalPrincipalPaid = loanAmount;
    monthlyPayments = monthlyPayments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById("monthly-payment").innerHTML = monthlyPayments;
    document.getElementById("ttlInterest").innerHTML = (totalInterestPaid);
    document.getElementById("ttlPrincipal").innerHTML = totalPrincipalPaid;
}

document.getElementById("submit").addEventListener("click", calculate);


