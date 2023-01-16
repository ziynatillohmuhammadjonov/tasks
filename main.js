// 1 topshiriq
console.log("1-topshiriq");
let ism = "Ziynatilloh";

for (i = 0; i < 10; i++) {
  console.log(ism);
}
// 2-topshiriq
console.log("2-topshiriq");
const myArray = [[false, true], [1, 2], 99, "yaxshi"];
for (i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] == "string") {
    console.log(`Arrayning string indexi: "${i}"`);
  }
}
// 3-topshiriq
console.log("3-topshiriq");

const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
let array = [];
let array2 = [];
for (i = 0; i < data.length; i++) {
  if (typeof data[i] == "object") {
    array.push(data[i]);
  }
  array2 = array.toString().split(",");
}
// array.toString();
console.log(array2);
// 4 -topshiriq
console.log("4-topshiriq");
// let arraySort = prompt(
//   '4-toshiriq Arrayini kiriting "vergul" bilan kiriting: '
// );
// let allArray = arraySort.split(",");
let allArray = ["null", "0", '""', "false", "undefined", "NaN"];
let nanArray = [];
let nullArray = [];
let array0 = [];
let falseArray = [];
let undefinedArray = [];
let stringArray = [];

for (i = 0; i < allArray.length; i++) {
  switch (typeof allArray[i]) {
  }
  switch (allArray[i]) {
    case "undefined":
      undefinedArray.push(allArray[i]);
      break;
    case "null":
      nanArray.push(allArray[i]);
    case "NAN":
      nanArray.push(allArray[i]);
    case "false":
      falseArray.push(allArray[i]);
    case '" "':
      stringArray.push(allArray[i]);
    case "0":
      array0.push(allArray[i]);
      break;
  }
}
console.log('"NAN" qiymatli arraylar: ' + nanArray);
console.log('"Null" qiymatli arraylar: ' + nullArray);
console.log('"0" qiymatli arraylar: ' + array0);
console.log('"false " qiymatli arraylar: ' + falseArray);
console.log('"undefined" qiymatli arraylar: ' + undefinedArray);
console.log('" " qiymatli arraylar: ' + stringArray);

// 5-topshiriq
console.log("5-topshiriq");
let qiymat5 = "samarqand";
let massiv = qiymat5.split("");
// for (i = 0; i < qiymat5.length; i++) {
//   massiv.push(qiymat5.charAt(i));
// }
console.log("Natija: " + massiv.reverse().join(""));

// 6-topshiriq
console.log("6-topshiriq");
let matn = prompt("6-topshiriq matnini kriting: ");
let matnMassiv = matn.split(" ");
for (i = 0; i < matnMassiv.length; i++) {
  let vString = matnMassiv[i].toString();
  let bosh = vString.charAt().toLowerCase();
  let bir = vString.slice(1, vString.length).toUpperCase();
  matnMassiv[i] = bosh.concat(bir).split();
}
console.log(matnMassiv);

//7-topshiriq

console.log("7-topshiriq");
let sonSumm = [
  "salom",
  1,
  false,
  [1, 2, 3],
  undefined,
  ["s", "a", "l", "o", "m"],
  5,
];
console.log(sonSumm);
let yigindi = 0;
let ichyigindi = 0;
for (i = 0; i < sonSumm.length; i++) {
  if (typeof sonSumm[i] == "number") {
    yigindi += sonSumm[i];
  } else {
  }
  if (typeof sonSumm[i] == "object") {
    for (k = 0; k < sonSumm[i].length; k++) {
      if (typeof sonSumm[i][k] == "number") {
        ichyigindi += sonSumm[i][k];
      }
    }
  }
}
console.log("Raqamlar yig'indisi:" + yigindi);
console.log(`Ich raqamlar yig'insi: ${ichyigindi}`);
console.log(`Jami raqamlar yig'indisi: ` + (yigindi + ichyigindi));

// 8-topshiriq:

console.log(`8-topshiriq`);
let xisoblagich = 0;
let str = prompt("8-topshiriq matinini kiriting: ");
for (i = 0; i < str.length; i++) {
  if (str.charAt(i) == "a") {
    xisoblagich += 1;
  }
}

console.log('Berilgan matn tarkibidagi "a" lar soni: ' + xisoblagich);

//9-topshiriq

console.log("9-topshiriq");
let typeArray = [21.1, "Roziya", "array", ["I am array"], null, true, 214];
let newTypeArray = [];
for (i = 0; i < typeArray.length; i++) {
  newTypeArray.push(typeof typeArray[i]);
}
console.log(newTypeArray);

// 10-topshiriq

console.log("10-topshiriq");
let text = `Najot ta'lim`;
let textTrim = text.trim();
let textLenght = 0;
for (i = 0; i < textTrim.length; i++) {
  textLenght++;
}
console.log(textLenght);

//11-topshiriq:

console.log("11-topshiriq");
let indexArray = [1, 2, 3, 4, 5];
for (i = 0; i < indexArray.length; i++) {
  indexArray[i] += i;
}
console.log(indexArray);

// 12-topshiriq

console.log("12-topshiriq");
let son = 99;
let sonYigindi = 0;
for (i = 0; i <= 99; i++) {
  sonYigindi += i;
}
console.log(sonYigindi);

// 13-topshiriq

console.log("13-topshiriq");
let nSon = 2;
let berilganSon = 8;
for (i = 0; i <= 10; i++) {
  console.log(
    ` ${berilganSon} * 2 + 1 = ${(berilganSon = berilganSon * 2 + 1)}`
  );
}
