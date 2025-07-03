let firstH1 = document.querySelectorAll("#block h1")[0].innerText;
console.log(firstH1);
firstH1 = "THis is first h1 tag";
console.log(firstH1);

let firstValue = document.querySelectorAll("#firstname")[0];

let lasttValue = document.querySelectorAll("#lastname")[0];

function calculator() {
  firstValue1 = Number(firstValue.value);
  lasttValue2 = Number(lasttValue.value);

  console.log(firstValue.value);
  console.log(lasttValue.value);
  console.log("sum:",firstValue1 + lasttValue2);
}
