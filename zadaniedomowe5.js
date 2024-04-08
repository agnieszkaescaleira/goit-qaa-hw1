// 1. Zrozumienie koncepcji

// slowo kluczowe this w JavaScript odnosi sie do danego obiektu
// w danym zakresie. np. : Jacek je pizze, bo on (this) lubi pizze 
// albo np. Jacek uczy sie kodowania w JavaScripcie, bo on (this)
// chce miec ciekawsza prace

const Jacek = {
    userName: "Jacek",
    showName() {
        console.log(this.userName);
    },
};

Jacek.showName();

// Odwołanie do właściwości obiektu wewnątrz metod przy użyciu nazwy
// samego obiektu jest podobne do używania Jacek zamiast on


// 2. Zastosowanie praktyczne:

const Maciej = {
    userName: "Maciej",
    showName() {
        console.log(this.userName);
    },
};

Maciej.showName();

// ustawiam sobie obiekt Maciej i potem dzieki metodzie showname zapisuje 
// wlasciwosc username w konsoli uzywajac this. W konsoli wyswietli mi Maciej

// 3. Rozszerzony przyklad: 

const bookShelf = {
    authors: ["Adam Mickiewicz", "Juliusz Slowacki", "Cyprian Norwid"],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  
  console.log(bookShelf.getAuthors());
  bookShelf.addAuthor("Stanislaw Wyspianski");
  console.log(bookShelf.getAuthors());

  // ustawiam sobie obiekt polki na ksiazki, na ktorej mam tablice z imionami autorow
  // dzieki metodzie getAuthors() zwroci mi jakich autorow mam na polce
  // dzieki metodzie addAuthors doda mi autora do tablicy
  // dzieki this odnosze sie do elementow z mojej tablicy
  
  