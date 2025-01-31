const new_obj = {
    "name" : "Md. Rakibul Hasan",
    "id" : 201910000002, 
    "dept" : "CSE",
    details(){
        console.log(`I am ${this.name} and department is ${this.dept}`);
    },
    "address" : {
        "city" : "Dhaka",
         "country" : "Bangladesh"
    }
}

console.log((Object.keys(new_obj)).length);