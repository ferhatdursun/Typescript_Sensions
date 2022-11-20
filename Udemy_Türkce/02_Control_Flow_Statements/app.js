var x = 15;
var y = 30;
x > y ? console.log(x) : console.log(y);
//? Switch-Case
var day = 2;
switch (day) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Sali");
        break;
    case 3:
        console.log("Carsamba");
        break;
    case 4:
        console.log("Persembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("8. gün");
        break;
}
//? For
for (var i = 0; i < 3; i++) {
    console.log("I degerim", i);
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log("arr: of;", i);
}
for (var i in arr) { //! in ile index degerlerini alabiliyoruz!!!
    console.log("index: i;", i);
}
var myName = "Ferhat Dursun";
for (var _a = 0, myName_1 = myName; _a < myName_1.length; _a++) {
    var item = myName_1[_a];
    console.log("myName_item;", item);
}
//? While Döngüsü
var counter = 0;
while (counter < 5) {
    console.log("counter;", counter);
    counter++;
    if (counter == 3) {
        break;
    }
}
do {
    console.log("do while;", counter);
    counter++;
} while (counter < 5);
