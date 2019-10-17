    class Matrix {
        constructor(r, c) {
            this.r = r;
            this.c = c;
            this.matriz = [];
            this.init()
        }
        init() {
            for (var i = 0; i < this.r; i++) {
                this.matriz[i] = []
                for (var k = 0; k < this.c; k++) {
                    this.matriz[i][k] = 0
                }
            }
            return this.matriz
        }
        initRandom() {

            for (var i = 0; i < this.r; i++) {
                this.matriz[i] = []
                for (var k = 0; k < this.c; k++) {
                    this.matriz[i][k] = Math.random()
                }
            }
            return this.matriz

        }
        getRow(numRow) {
            this.numR = numRow;
            for (var i = 0; i < this.numRow; i++) {
                this.row = [this.matriz[i]]
            }
            return this.row
        }
        getCol(numCol) {
            this.numCol = numCol;
            let col = []
            for (var i = 0; i < this.r; i++) {
                col.push([this.matriz[i][this.numCol]])
            }
            return col
        }
        isSquare() {
            if (this.r == this.c) {
                return true
            } else {
                return false
            }
        }
        isSymetric() {
            if (this.isSquare() == true) {
                for (var i = 0; i < this.r; i++) {
                    for (var k = 0; k < this.c; k++) {
                        if (this.matriz[i][k] != this.matriz[k][i]) {
                            return this.isSymetric = true
                        }
                    }
                }
            } else {
                return this.isSymetric = false
            }
        }
        initIdentity() {
            let newArr = new Array(this.r);
            for (let i = 0; i < this.r; i++) {
                newArr[i] = new Array(this.c);
                for (let j = 0; j < this.c; j++) {
                    newArr[i][j] = 0;
                }
            }
            for (let i = 0; i < this.matriz.length; i++) {
                newArr[i][i] = 1;
            }
            return newArr;
        }
        isIdentity() {
            if (this.isSquare() == true) {
                if (this.array == this.initIdentity()) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false
            }
        }
        getMatrix() {
            return this.matriz
        }
    }

    var mat = new Matrix(5, 3)
    var x = new Matrix(3, 3)