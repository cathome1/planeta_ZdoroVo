var balance = document.querySelector('.balance')
var shtrih = document.querySelector('.shtrih')
var number = document.querySelector('.shtrih_number')
var card = document.location.search
var new_balance = document.location.hash
balance.innerHTML = new_balance.slice(1)
number.innerHTML = card.slice(-5)
var element = document.getElementById("ean");
var options = {
	number: false,
	prefix: false,
}
new EAN13(element, card.slice(3), options);