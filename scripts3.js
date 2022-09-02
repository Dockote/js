/* let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}
*/

$i = 1;
const  EndCircle= 100;
while ($i <= EndCircle) 
	if ($i % 2) {
		alert: ("the number is $i".PHP_EOL);
	}
	$i++;

// 2

console.log('2');
let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket){
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

// 3. 


console.log('3');
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");