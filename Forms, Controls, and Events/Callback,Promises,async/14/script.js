function api(){
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve({name : "John Doe", age: 25});
       }, 2000);
   });
}

(async function fetchData() {
    return await api();
})().then((res) => {
    console.log(res);
})



