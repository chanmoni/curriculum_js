class Taiyaki {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  menu() {
    console.log(`中身は${this.ingredients}です`);
    
  }
}
let annko = new Taiyaki('あんこ');
annko.menu();

let  cream = new Taiyaki('クリーム');
cream.menu();

let  cheese = new Taiyaki('チーズ');
cheese.menu();
