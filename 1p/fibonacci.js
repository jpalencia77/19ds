
function fibonacci(numero){
    let a=0,b=1,c,s=1;
    console.log(a,b);
    for(i = 3; i<=numero;i++){
      c=a+b;
      console.log(c);
      s = s +c;
      a =b;
      b=c;
    }
  }
  
  fibonacci(prompt())
