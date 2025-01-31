let timer = setInterval(() => console.log("Running..."), 1000);
setTimeout(() => {
   clearInterval(timer);
}, 5000);