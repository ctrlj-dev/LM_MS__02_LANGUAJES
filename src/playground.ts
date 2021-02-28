console.log(
  "This is your playground, experiment with TS code and check the console"
);

// Head
console.log(
  "%c// Head function",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);
const array: string[] = ["naranjas", "platano", "manzana", "pera"];

const head = (array: string[]) => {
  const [first] = array;
  console.log(first);
}; // Implementation here.

head(array);

// Tail
console.log(
  "%c// Tail function",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const tail = (array: string[]) => {
  const [, ...elements] = array;
  console.log(elements);
}; // Implementation here.

tail(array);

// Init
console.log(
  "%c// Init function",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const init = (array: string[]) => {
  const lastElement = array.length - 1;
  const elements = array.slice(0, lastElement);
  console.log(elements);
}; // Implementation here.

init(array);

// Last
console.log(
  "%c// Last function",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const last = (array: string[]) => {
  const lastElement = array.length;
  const elements = array.slice(lastElement - 1, lastElement);
  console.log(elements);
}; // Implementation here.

last(array);

// 2.- Concat

console.log(
  "%c// Concat function",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const arrayB = ["plato", "tenedor", "vaso"];

const concat = (a: string[], b: string[]) => {
  const output = [].concat(...a, ...b);
  console.log(output);
}; // Implementation here.

concat(array, arrayB);

// 2.- Concat with multiples arrays

console.log(
  "%c// Concat with multiples arrays",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const arrayC = ["mesa", "silla", "puerta", "ventana", "mueble"];

const multiConcat = (...a) => {
  const output = [].concat(...a);
  console.log(output);
}; // Implementation here.

multiConcat(array, arrayB, arrayC);

// 3.- Clone Merge

//  Clone

console.log(
  "%c// Clone",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const newObject = {
  id: 1,
  name: "Jesús",
  profesion: "Dev & Graphic Designer",
  age: "30",
};

function clone(source) {
  const cloneSource = { ...source };
  const equal = cloneSource == source;
  if (equal == false) {
    console.log("Es un nuevo objeto con las mismas propiedades");
  }
  console.log(cloneSource);
} // Implementation here.

clone(newObject);

// 3.- Clone Merge

//  Merget

console.log(
  "%c// Merge",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

const objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objectB = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const output = { ...target, ...source };
  console.log(output);
} // Implementation here.

merge(objectA, objectB);

// 4 Read Books

console.log(
  "%c// Read Books",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

interface Books {
  title: string;
  isRead: boolean;
}

const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Books[], titleToSearch: string) {
  const checkBooks = books
    .filter((book) => book.title == titleToSearch)
    .map((book) => book.isRead);

  switch (checkBooks[0]) {
    case true:
      console.log(checkBooks[0], "Leído");
      break;
    case false:
      console.log(checkBooks[0], "No leído");
      break;
    default:
      console.log(false, "Libro no encontrado");
  }
} // Implementation here

isBookRead(books, "Harry Potter y la piedra filosofal");
isBookRead(books, "Canción de hielo y fuego");
isBookRead(books, "Devastación");
isBookRead(books, "El sueño del Fevre");

// 5 Slot Machine

console.log(
  "%c// Slot Machine",
  "background: #0D1A26; color: #d9bacb; padding: 5px 15px; border: 1px solid"
);

class slotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const randomyzer = () => Math.random() < 0.5;

    this.reelOne = randomyzer();
    this.reelTwo = randomyzer();
    this.reelThree = randomyzer();

    switch (this.coins) {
      case 1:
        let totalCoins = " moneda en total";
        break;
      default:
        totalCoins = " monedas totales";
    }

    console.log('Insertamos una monedas en la máquina');
    console.log("Contador de monedas: " + this.coins + totalCoins);
    console.log("Resultado Reel 1", this.reelOne);
    console.log("Resultado Reel 2", this.reelTwo);
    console.log("Resultado Reel 3", this.reelThree);

    if (this.reelOne && this.reelTwo && this.reelThree === true) {
      console.log(
        "Enhorabuena, has ganado el premio de " + this.coins + totalCoins
      );
      this.coins = 0;
      console.log('El bote se ha reiniciado, hay' this.coins + ' monedas');
    } else {
      console.log(
        "Oh lo sentimos, prueba a jugar otra vez hasta que te dejemos la cartera frita"
      );
    }
  }
}

const SlotMachine1 = new slotMachine();
SlotMachine1.play();
SlotMachine1.play();
SlotMachine1.play();
