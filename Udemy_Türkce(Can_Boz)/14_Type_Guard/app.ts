type tip = string | number;

function add(a: tip, b: tip) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Lütfen dogru formatta data gönderin!!!");
}

add(5, 4);
console.log(add);

//! 34. Videonun ikinci kismini izledim ama buraya notlarini almadim!!!
