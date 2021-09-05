export {}; //to fix the cannot redeclare block-scoped variable

interface Review {
  review(): string;
}

let car = {
  make: 'Honda',
  year: 2010,
  broken: false,
  review(): string {
    return 'good';
  },
};

let drink = {
  brand: 'Cola',
  sugar: 80,
  carbonated: false,
  review(): string {
    return 'bad';
  },
};

function logReview(item: Review): void {
  console.log(item.review());
}

logReview(drink);
