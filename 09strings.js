let name = "Ankit";

console.log(name.length);

name = "Singh  ";
//takes in white space

console.log(name.length);

name = "Ankit Singh";

// takes indexing from 0
console.log(name.slice(5, 7));

// substring is same as slicing

console.log(name.substring(0, 5));

// substr is same as slicing but with length
console.log(name.substr(0, 5));

// replaces the string Singh with Baiju
console.log(name.replace("Singh", "Baiju"));

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

let text3 = "Hello World!"; // String
let text4 = text1.toLowerCase();
console.log(text4);


let text = "Text1" + " " + "Text2";
text = "Text1".concat(" ","Text2");
console.log(text)


let numb = 5;
let text_1 = numb.toString();
console.log(text_1)

let location = "Please locate where 'locate' occurs!";
console.log(location.search("locate"));
console.log(location.indexOf("Please"))


// string templates
console.log(`${location}`+" Ankit" + "Singh")



const A = 100

console.log(`${A}`)