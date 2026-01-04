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

const lib = new Library();
lib.addItem(new Book("Dune", 1965, "Sci-Fi", "Frank Herbert",  412));
lib.addItem(new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve",  155));
console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
