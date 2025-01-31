let obj = {
    "firstName" : "John",
    "lastName" : "Doe",
 }
obj = JSON.parse(JSON.stringify(obj));

 console.log(obj['firstName']);