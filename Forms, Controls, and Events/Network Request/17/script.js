const URL = "https://jsonplaceholder.typicode.com/todos/1";

(async () => {
    let res = await fetch(URL);
    console.log(res);
})();