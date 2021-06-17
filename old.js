
/*
let box = [];
let num;
for (num = 1; num <= 100; num++) 
{
    if (num%15==0){
        box.push("FooBar");
    }
    else if (num%5==0) {
        box.push ("Bar");
    }
    else if (num%3==0){
        box.push("Foo");
    }
    else {
        box.push (num);
    }
}
//alert (box);
function Func_box (a,b,c) {
   // for (; b < a; b++) {
   // }
    return box.slice(b,c);
};
alert (Func_box (box,0,3));
*/
/*let menu = {
    width: 200,
    height: 300,
    title: "My menu",}
console.log (1, menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu)
  console.log (2, menu);
*/


/*switch (true) {
    case (num % 15 == 0):
            console.log("FooBar");
            break;
    case (num%3==0):
        console.log("Foo");
        break;
    case (num % 5 == 0):
        console.log("Bar");
        break;
        default:
            console.log(num);
    }
    */



/* if (num%15==0){
        alert("FooBar");
    }
    else if (num%5==0) {
        alert ("Bar");
    }
    else if (num%3==0){
        alert("Foo");
    }
    else {
        alert (num);
    }
} */


/*        switch (true) {
        case (num%3==0):
            alert("Foo");
            break;
        case (num % 5 == 0):
            alert("Bar");
            break;
        case (num % 15 == 0):
            alert("FooBar");
            break;
            default:
                alert(num);
        }
*/       
//"****ГЛУБОКОЕ КОПИРОВАНИЕ ОБЪЕКТА****"
/*let cat2 = deepClone(cat);
function deepClone (obj) {
    let clObj = {};
    for (let i in obj) {
        if (obj[i] instanceof Object) {
            clObj[i] = deepClone(obj[i]);
            continue;
        }
        clObj[i] = obj[i];
    }
    return clObj;
}
*/