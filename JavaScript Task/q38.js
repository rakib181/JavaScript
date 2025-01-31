let tmd = setInterval(() => {
    console.log("Hello")
 }, 2000);
 setTimeout(() => {
     console.log("stop");
     clearInterval(tmd);
 }, 10000)