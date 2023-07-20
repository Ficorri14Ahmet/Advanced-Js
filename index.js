function connect() {
    alert("JS U LIDH")
  }


  let numberOfBagels = 5;
function eatBagel(bagels) {
  bagels -= 1;
  if (bagels === 0) {
    console.log('Oh nO, Out Of bagels!');
  } else {
    console.log(`Yummy. There are ${bagels} left!`);
  }
}
eatBagel(numberOfBagels);
eatBagel(numberOfBagels);
console.log(numberOfBagels);



function a(c){
     if(c===2){
        console.log("Funksioni u ekzekutua per heren e pare")
        
    }
    else if(c===4){
        console.log("Funksioni u ekzekutua per her te dyte")
    }
    else{
        console.log("Something is wrong")
    }
}

a(2)

console.log("ushtrimi 15")
let food = 'sushi';
function eatEmUp() {
  let sauce = ' soy';
  function mixEmUp() {
    console.log(food + sauce);
  }
  const a = "test"
  mixEmUp();
console.log("const val", a)
}



 eatEmUp();


 //Example 16: afisho sushi garlic soy wasabi
 console.log("ushtrimi 16")
let food16 = 'sushi';
let food17 = 'wasabi';
function eatEmUp1() {
  function sauceEmUp() {
    var sauce = ' garlic soy';
    var extra = 'wasabi extra'
    let totalValue = sauce +extra;
    return totalValue;
  }
  sauceEmUp();
  console.log(food16 + sauceEmUp());
}
eatEmUp1();
eatEmUp1();
eatEmUp1();
eatEmUp1();
eatEmUp1();

