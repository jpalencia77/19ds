function factorial (num){
        let total=1;
    
        for(i=1;i<=num;i++){
            total*=i;
        }
        return total;
    }
    
    var n=10,r=3; 
    nr=n-r;
    combinacion=(factorial(n))/((factorial(nr))*(factorial(r)));
    console.log(combinacion);
    