/* 1
Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

все изз-за местоположения инкримента
/*


/* 2
 Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

a =4
x =5
/*


/*  Объявить две целочисленные переменные a и b и задать им 
произвольные начальные значения. Затем написать скрипт, который работает 
по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
*/

$a = -2;
$b = -5;
if ($a >=0 && $b >= 0) 
    alert ( 'Разность чисел равна: ') ($a - $b);
 elseif ($a < 0 && $b < 0) 
    alert ('Произведение чисел равно: ') ($a * $b);
 elseif (($a >= 0 && $b < 0) || ($a < 0 && $b >= 0)) 
    alert ('Сумма чисел равна: ') ($a + $b);



// *4
/*   Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.
*/

$a = 5;
switch ($a) {
    case 1:
        alert ("1");
    case 2:
        alert ("2");
    case 3:
        alert ("3");
    case 4:
        alert ("4");
    case 5:
        alert ("5");
    case 6:
        alert ("6");
    case 7:
        alert ("7");
    case 8:
        alert ("8");
    case 9:
        alert ("9");
    case 10:
        alert ("10");
    case 11:
        alert ("11");
    case 12:
        alert ("12");
    case 13:
        alert ("13");         
    case 14:
        alert ("14");
    case 15:
        alert ("15");        
    break;
}



// *5
/*  Реализовать основные 4 арифметические операции в виде функций 
с двумя параметрами. Обязательно использовать оператор return.
*/

function sum($arg1, $arg2) {
return $arg1 + $arg2;
}

function subtraction($arg1, $arg2) {
return $arg1 - $arg2;
}

function multiply($arg1, $arg2) {
return $arg1 * $arg2;
}

/*
function divide($arg1, $arg2) {
if ($arg2 === 0) {
    echo "invalid arg2 value (=0)";
    break;
}
return $arg1 / $arg2;
}
*/
function divide($arg1, $arg2) {
return ($arg2 === 0) ? "invalid arg2 value (=0)" : $arg1 / $arg2;
}

// *6
/* 4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation), 
где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции 
из пункта 3) и вернуть полученное значение (использовать switch).
*/

function mathOperation($arg1, $arg2, $operation) {
switch ($operation) {
    case "sum": 
        return $arg1 + $arg2;
    case "subtraction":
        return $arg1 - $arg2;
    case "multiply":
        return $arg1 * $arg2; 
    case "divide":
        if ($arg2 === 0) {
            alert ("invalid arg2 value (=0)");
            break;
        }
        return $arg1 / $arg2;
    }
}
alert (mathOperation(10, 0, divide));
