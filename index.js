// Write your solution here!
let append = ["Milo","Otis","Garfield"];
let prepend = ["Milo","Otis","Garfield"];
let removeLast = ["Milo","Otis","Garfield"];
let removeFirst = ["Milo","Otis","Garfield"];

append.push('Odie');
console.log(append)
prepend.unshift("Odie");
removeLast.splice(-1,1);
removeFirst.splice(0,1);