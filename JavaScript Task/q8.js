a = ["apple", "banana", "cherry"];
a.forEach((val, index) => {
   a[index] = val.toUpperCase();
});
console.log(a);