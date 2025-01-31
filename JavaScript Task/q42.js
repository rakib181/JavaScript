
class invalidAgeError extends Error{
    constructor(msg){
        super(msg);
        this.name = msg;
    }
}


try{
   let age = prompt("Your Age ? ", 10);
   if(age < 18){
       throw new invalidAgeError(`Invalid Age Error!`);
   }
   console.log("Valid Age!")
}catch(e){
    console.log(`Error Massage : ${e.name}`);
}