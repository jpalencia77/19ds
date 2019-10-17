function fact(n) {
    let tot = 1;
    for (i = 1; i <= n; i++) {
        tot *= i;
    }
    return tot;
}
var x = 8, y = 5;
pe = x - y;
perm= (fact(x)) / (fact(pe));
console.log(perm);