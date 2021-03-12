const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    //hier moeten console.logs komen
    //  console.log("Dit is de gehele persoon:", [person]); //deel 1
    //  console.log("Dit is de naam:", [person.name]); //deel 2
    //  console.log("Geboortejaar:", 2021 - [person.age]); //deel 3
    //  console.log(person.name + " is een " + person.profession); //deel 4
    if(person.age >= 50) {
        console.log([person.name]);
    } //deel 5
  }