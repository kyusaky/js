// обращение к значению массива 
// console.log(arrOne[0])
"using srong";
let my_array = [];
for (let i = 1 ; i <= 1000; i++) {
    my_array.push(i);
}
console.log(my_array);
let value = +prompt("Введите индекс числа:");
let indexOf = my_array.indexOf(value)
alert(indexOf)


