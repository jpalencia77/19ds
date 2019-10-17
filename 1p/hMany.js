var num = [3,2,3];
var num = [3,2,1];
function hMany(x) {
    
    var x = x.sort(function (a, b) {
        
        return a - b
    });
    
    var numSame = 0;

    for (i = 0; i < x.length; i++) {

        if (x[i] == x[i + 1]) {

            for (c2 = i+ 1; c2 < x.length; c2++) {
                if (x[i] == x[c2]) numSame++;
            }
        }
        i = i+ numSame;
    }
    return numSame;
}
hMany(num)