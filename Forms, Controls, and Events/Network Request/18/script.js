const URL = "https://jsonplaceholder.typicode.com/todos/1234";

let response = (async () => {
    return await fetch(URL);
})();

console.log(response);