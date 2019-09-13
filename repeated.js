var points = [5, 2, 4, 1, 5, 2, 5, 9, 1, 7];

function repe(x) {
    var x = x.sort(function (a, b) {
        return a - b
    });
    var iguales = false;
    for (c1 = 0; c1 < x.length; c1++) {
        if (x[c1] == x[c1 + 1]) iguales = true

    }
    return iguales;
}

repe(points)