const URL = "https://cat-fact.herokuapp.com/facts";

(async () => {
    let res = await fetch(URL);
    console.log(res);
})();