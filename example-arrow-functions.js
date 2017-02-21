var names = ['Danuka', 'Rajika', 'Indika'];

names.forEach(function (name) {
  console.log("ForEach" + name);
});

console.log("======Separator =========");
console.log("=========================");
console.log("=========================");

names.forEach((name) =>  console.log('arrowFunc', name));


console.log("======Separator =========");
console.log("=========================");
console.log("=========================");

var person = {

  name: 'Nimesha ',
  greeting : function () {
    names.forEach((name) => {
      console.log(this.name +  'say hi to' + name);
    });
  }

}

person.greeting();

function add(a , b) {
  return a + b;
}

console.log(add(1,2));
console.log(add(1,5));
console.log(add(1,7));

//AddStatement
var addStatement = (a, b) =>  a + b;

console.log(addStatement(1,2));
console.log(addStatement(1,5));
console.log(addStatement(1,7));

//AddExpression
