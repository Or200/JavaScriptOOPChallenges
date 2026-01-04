class MediaItem {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }

  getSummary() {
    return "basic string summary ";
  }
}

class Book extends MediaItem {
  constructor(title, year, genre, author, pageCount) {
    super(title, year, genre);
    this.author = author;
    this.pageCount = pageCount;
  }

  getSummary() {
    return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`;
  }
}
class Movie extends MediaItem {
  constructor(title, year, genre, director, durationMinutes) {
    super(title, year, genre);
    this.director = director;
    this.durationMinutes = durationMinutes;
  }

  getSummary() {
    return `Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min`;
  }
}

class Library {
  constructor() {
    this.listOfMedia = [];
  }

  addItem(item) {
    this.listOfMedia.push(item);
  }

  search(term) {
    const returnlist = [];
    for (let item of this.listOfMedia) {
      if (item.title.toLowerCase() === term.toLowerCase()) {
        returnlist.push(item);
      }
    }
    return returnlist;
  }

  listByGenre(genre) {
    const returnlist = [];
    for (let item of this.listOfMedia) {
      if (item.genre.toLowerCase() === genre.toLowerCase()) {
        returnlist.push(item);
      }
    }
    return returnlist;
  }
}

// const lib = new Library();
// lib.addItem(new Book("Dune", 1965, "Sci-Fi", "Frank Herbert",  412));
// lib.addItem(new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve",  155));
// console.log(lib.search("dune"));
// console.log(lib.listByGenre("Sci-Fi"));

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.error("no enghu money");
    } else {
      this.balance -= amount;
    }
  }
}

class Bank {
  constructor() {
    this.listOfAccounts = [];
  }

  addAccount(account) {
    this.listOfAccounts.push(account);
  }

  transfer(fromName, toName, amount) {
    for (let item of this.listOfAccounts) {
      if (item.owner === fromName) {
        if (item.balance - amount < 0) {
          console.error("no enghu money");
        } else {
          item.balance -= amount;
          for (let item2 of this.listOfAccounts) {
            if (item2.owner === toName) {
              item2.balance += amount;
              console.log("secsses");
            }
          }
        }
      }
    }
  }

  showBalances() {
    this.listOfAccounts.forEach((item) => {
      console.log(item.owner, item.balance);
    });
  }
}

// const myBank = new Bank()
// const p1 = new BankAccount("yair", 1000)
// const p2 = new BankAccount("orel", 2000)

// myBank.addAccount(p1)
// myBank.addAccount(p2)
// myBank.transfer("yair", "orel", 50)
// myBank.showBalances()

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.lastFedTime = 0
  }

  feed() {
    NaN;
  }
}

class Carnivore extends Animal {
  feed() {
    console.log(`Feeding carnivore ${this.species} - meat served.`);
    this.lastFedTime = new Date();
  }
}

class Herbivore extends Animal {
  feed() {
    console.log(`Feeding herbivore ${this.species} - veggies served.`);
    this.lastFedTime = new Date();
  }
}

class Zookeeper{
    constructor(){
        this.listOfAnimals = []
    }

    addAnimal(animal){
        this.listOfAnimals.push(animal)
    }

    feedAll(animal){
        this.listOfAnimals.forEach(animal => {
            animal.feed()
        });
    }

    getLastFed(name){
        for (let animal of this.listOfAnimals){
            if (animal.name === name){
                return animal.lastFedTime
            }
        }
    }
    getBySpecies(species){
        const result = this.listOfAnimals.filter((species) => species )
        console.log(result);
        
    }

}

const zoo = new Zookeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Carnivore("Yair", "Lion"));
zoo.addAnimal(new Carnivore("Skcar", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.addAnimal(new Herbivore("Avi", "Giraffe"));
console.log(zoo.listOfAnimals);
zoo.feedAll()
zoo.getBySpecies("Lion")
