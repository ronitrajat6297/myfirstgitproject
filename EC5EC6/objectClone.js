var a=5;
var b=a;
b++;
let obj ={a:'a',b:'b',c:'c'};
let clone= Object.assign({,obj});
let clone2 ={...obj};

ojb.c=5;
console.log(clone);