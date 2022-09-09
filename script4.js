function num2Obj(num){
	if (isNaN(num)){
	  console.log('Ошибка: параметр не является числом');
	} else if(num>999 || num<0){
		console.log('Ошибка: допустимый диапазон 0-999');
	  var obj={};
	  return obj;
	} else {
		var digits=['единицы','десятки','сотни'];
	  var obj={};
	  var i=0;
	  for(var i=0; num!=0; i++){
	  	obj[digits[i]]=num%10;
	  	num=(num-num%10)/10;
		}
		}	
		return obj;
	}
console.log(num2Obj(245));
console.log(num2Obj(45));
console.log(num2Obj(5));

// 2 задание
var basket_price = 0;
Basket = [{name:'Тыква', price:60}, {name:'Капуста', price:35}];
Basket.push({name:'Яблоко', price:50});
function countBasketPrice(x) {
    for (i=0; i<Basket.length; i++) { 
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}
document.write('<h2>В корзине:</h2>');
for (i=0;i<Basket.length;i++){document.write(Basket[i].name + ' — ' + Basket[i].price +' руб</br>');}
document.write('</br><b>Стоимость заказа: '+countBasketPrice(Basket)+'</b>');