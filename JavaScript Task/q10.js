let a = [3, 1, 5, 2, 4];

    a.sort((x, y) => {
       if(x > y)return -1;
       return 0;
    });

    console.log(a);