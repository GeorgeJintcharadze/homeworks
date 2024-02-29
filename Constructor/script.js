class StudentID {
    constructor(name, surname, score) {
      this.name = name;
      this.surname = surname;
      this.score = score;
    }
 
    toString() {
    return `Name: ${this.name}, Surname: ${this.surname}, Score: ${this.score}`;
    }
   }
 
 let student1 = new StudentID("Duke", "Dukelashvili", 63);
 
 let student2 = new StudentID("Andrew", "Watson", 55);
 
 let student3 = new StudentID("Luka", "Modrich", 78);
 
 let student4 = new StudentID("Lucas", "Vasquez", 49);
 
 let student5 = new StudentID("Andrew", "Tate", 89);
 
 console.log(student1.toString());
 console.log(student2.toString());
 console.log(student3.toString());
 console.log(student4.toString());
 console.log(student5.toString());

// 1
 function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('Ibrahim', 19);
  console.log(person1.name);
  console.log(person1.age);

// 2
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const car1 = new Car('Hyundai', 'Ioniq', 2017);
  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year); 

// 3
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  const book1 = new Book('Harry Potter', 'J. K. Rowling', 234);
  console.log(book1.title);
  console.log(book1.author);
  console.log(book1.pages);


// 4 
function Student(name, grade, subjects) {
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
  }
  
  const student = new Student('David', '9th', ['Math', 'Science', 'English']);
  console.log(student1.name); 
  console.log(student1.grade);
  console.log(student1.subjects);

// 5
  function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  const product1 = new Product('Keyboard', 100, 1);
  console.log(product1.name); 
  console.log(product1.price); 
  console.log(product1.quantity); 