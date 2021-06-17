function makeClones(i) {
    let Obj = {
        foo:1,
    }; 
    for (let a = 0; a < i; a++) {
        return Obj;
    }
    }


/*    
let cat = {
    name: 'Tom',
    age: 5,
    weight: 10,
    energy: 100,
    hunger: 1,
    speak() {
        for (let a = 0; a < 99; ++a) {
            this.hunger++
        if ((this.hunger < 10) && (this.weight > 1)) {
        console.log (this.name + " says: meow!!!");
        }
        else if ((this.hunger < 20) && (this.weight > 1)) {
        console.log (this.name + " says: Meow!!!");    
        }
        else if ((this.hunger < 40) && (this.weight > 1)) {
        console.log (this.name + " says: MEow!!!");    
        }
        else if ((this.hunger < 60) && (this.weight > 1)) {
        console.log (this.name + " says: MEOw!!!");    
        }
        else if ((this.hunger < 80) && (this.weight > 1)) {
        console.log (this.name + " says: MEOW!!!");    
        }
        else if ((this.hunger > 99) && (this.weight > 1)) {
        console.log (this.name + " Quite");
        }
        else if ((this.hunger > 99) && (this.weight < 1)) {
        console.log (this.name + " T_T");
        }
    }
    },
    head: {
    eyes: [
    {color: 'yellow'},
    {color: 'blue'}
    ],
    ears: makeClones({}, 2),
    color: "red",
    teeth: {
    amount: 30,
    condition: 'sharp'
    },
    },
    body: {
    back_color: 'red',
    belly_color: 'white',
    },
    limbs: makeClones({claws: true}, 4),
    tail: {
    color: 'red',
    stripes: true,
    }
    }
    cat.speak() // »> “Tom says: meow!!!”


function click() {
        alert ("Hello");
}  
document.getElementsByClassName('1d').onclick = function () {
    click();
}
*/


let cat = {
    color: "black",
    age:3,
    weight:10,
    body:{
        head:{
            color:"red"
        }
    },
};

let cat2 = deepClone(cat);
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


cat2.body.head.color = "gray";
cat2.name = {};
cat2.name.firstname = "Tom";
cat2.name.lastname = "Hopkins";
cat2.hi = function () {
    alert ("Hi "+this.name.firstname+" "+this.name.lastname);
}
console.log (1,cat);
console.log (2,cat2);
cat2.hi();

alert( "Из HEAD: " + document.body );