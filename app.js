function Namuna(pattern) {
    const match = /^([a-z][a-z0-9-]*)\*(\d+)$/i.exec(pattern.trim());

    if (!match) {
        throw new Error('Format "tag*son" bo‘lishi kerak.');
    }

    const [, tag, countText] = match;
    const count = Number(countText);

    if (count < 1) {
        throw new Error("Takrorlash soni kamida 1 bo‘lishi kerak.");
    }

    return Array.from({ length: count }, () => `<${tag}></${tag}>`).join("\n");
}

console.log(Namuna("p*1"));
//============================================================================================================
function namuna(n) {
    return (n * (n + 1)) / 2;
}

console.log(namuna(3));  
console.log(namuna(10)); 
console.log(namuna(7));  
//===================================================================================================
function Namuna(son, diapazon) {
    return son >= diapazon.min && son <= diapazon.max;
}

console.log(Namuna(4, { min: 0, max: 5 })); 
console.log(Namuna(4, { min: 4, max: 5 }));  
console.log(Namuna(4, { min: 6, max: 10 }));
// //=================================================================================================

function Namuna(son) {
    return String(son ** 2).endsWith(String(son));
}

console.log(Namuna(1));  
console.log(Namuna(3));  
console.log(Namuna(6));  
console.log(Namuna(95)); 
//====================================================================================================
function Namuna(n) {
  return String(n * n).endsWith(String(n));
}

console.log(Namuna(1));  
console.log(Namuna(3));   
console.log(Namuna(6));  
console.log(Namuna(95)); 
console.log(Namuna(25)); 
//=========================================================================================
function Namuna(arr) {
  return arr.map((element, index) => element + index);
}

console.log(Namuna([0, 0, 0, 0, 0])); 
console.log(Namuna([1, 2, 3, 4, 5]));
console.log(Namuna([5, 4, 3, 2, 1])); 
//===============================================================================================

function shakarsiz(ichimliklar) {
  return ichimliklar.filter(function (ichimlik) {
    return ichimlik !== "cola" && ichimlik !== "fanta";
  });
}


function raqamlarSoni(son) {
  return String(son).length;
}


function engKatta(son) {
  return Number(
    String(son)
      .split("")
      .sort(function (a, b) { return b - a; })
      .join("")
  );
}


function tasodifiy(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function narsissistikMi(son) {
  var raqamlar = String(son).split("");
  var uzunlik = raqamlar.length;
  var yigindi = 0;

  for (var i = 0; i < raqamlar.length; i++) {
    yigindi = yigindi + Math.pow(Number(raqamlar[i]), uzunlik);
  }

  return yigindi === son;
}


function kattaHarflar(matn) {
  var soni = 0;

  for (var i = 0; i < matn.length; i++) {
    if (matn[i] >= "A" && matn[i] <= "Z") {
      soni++;
    }
  }

  return soni;
}


console.log("105:", shakarsiz(["fanta", "cola", "water"]));   
console.log("105:", shakarsiz(["fanta", "cola"]));            
console.log("105:", shakarsiz(["lemonade", "beer", "water"])); 

console.log("106:", raqamlarSoni(123));          
console.log("106:", raqamlarSoni(61217311514));  
console.log("106:", raqamlarSoni(0));            

console.log("107:", engKatta(123));    
console.log("107:", engKatta("001"));  
console.log("107:", engKatta(784));    

console.log("108:", tasodifiy(5, 9)); 

console.log("109:", narsissistikMi(153));  
console.log("109:", narsissistikMi(370));  
console.log("109:", narsissistikMi(1652));  

console.log("110:", kattaHarflar("fvLzpxmgXSDrobbgMVrc")); 
console.log("110:", kattaHarflar("JMZWCneOTFLWYwBWxyFw")); 
console.log("110:", kattaHarflar("mqeytbbjwqemcdrdsyvq")); 

