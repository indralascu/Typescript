// Old Javascript code
function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function(item) {
    this.groceries = this.groceries.concat(item); //Immutable way of doing it
}

ShoppingList.prototype.removeItem = function(item) {
    this.groceries = this.groceries.filter(function(grocery) {
        return grocery !== item; // Banana !== Banana
    });
}

var mylist = new ShoppingList();

mylist.addItem('Banana');
mylist.addItem('Apple');
console.log(mylist.groceries);

mylist.removeItem('Banana');

console.log(mylist.groceries);

// Typescript way

class ShoppingList2 {
    //no function call
    //property needs to be added here before intializing it in the constructor
    groceries: string[];

    constructor() {
        this.groceries = [];
    }

    //no need to add to the prototype
    //no need to use the function keyword;
    addItem(item) {
        //es6 has the spread operator
        this.groceries = [...this.groceries, item];
    }

    removeItem(item) {
        this.groceries = this.groceries.filter((grocery) =>  item !== grocery ); //implicit return
    }

}
const myNewList = new ShoppingList2();

myNewList.addItem('Pear');
myNewList.addItem('Pizza');

console.log(myNewList.groceries);