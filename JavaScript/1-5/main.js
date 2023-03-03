
function createJuice (fruits) {
  console.log(fruits + 'を受け取りました。ジュースにして返します')
  fruits + "ジュース" ;

  return fruits;
}
let fruits = "みかん";

let juice = createJuice(fruits); 
console.log(fruits + "が届きました")