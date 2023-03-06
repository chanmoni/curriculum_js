//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(numbers) {
  
  for(let i = 0; i <= 6; i++){
    if(numbers[i] % 2 === 0){
      console.log(numbers[i] + 'は偶数です');
    }
  }
}

isEven(numbers)

//問2
class car {
  constructor(gassline, number){
    this.gassline = gassline;
    this.number = number;
  }
  carexplain() {
    console.log(`ガソリンは${this.gassline} です。ナンバーは${this.number} です。`);
  }
}

//例で入れてます。
let carA = new car (20, 1123);
carA.carexplain();

let carB = new car (30, 2222);
carB.carexplain();

