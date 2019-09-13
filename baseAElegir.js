var baselog =prompt("Teclea la base para el logaritmo:")
console.log("Log"+baselog+" X")
for(var i=1;i<=10;i++){
    console.log("Log "+baselog+" "+i+" = "+ (Math.log(i)/Math.log(baselog)))
}
