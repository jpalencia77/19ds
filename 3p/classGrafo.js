class Graph {
    
    constructor() {
        
        this.aristas = {};
        
        this.vertice = [];
        
        this.contAristas = 0;
       
        this.isMult = false;
        
        this.conjPares = [];
    }

    addvertice(o) {
        
        this.vertice.push(o);
        
        this.aristas[o] = [];
    }

    
    addArista(v1, v2, weight = 1) {
       
        this.aristas[v1].push({
            
            vertice: v2,
            
            weight: weight
        }
        );
        
        this.aristas[v2].push({
            
            vertice: v1,
            
            weight: weight
        }
        );

        if (!this.conjPares[this.contAristas]) {
            
            this.conjPares[this.contAristas] = [];
            
            this.conjPares[this.contAristas][0] = v1;
            
            this.conjPares[this.contAristas][1] = v2;
        }
        
        this.contAristas++;
        
        if (v1 === v2) {
            
            this.isMult = true;
        }
    }
    imprimirGrafo() {
        
        let graph = "";
        
        
        this.vertice.forEach(vertice => {
            
            graph += vertice + " = " + this.aristas[vertice].map(n => n.vertice).join(", ") + "\n";
        }
        );
        
        console.log(graph);
   
    }
    esCompleto() {
        
        let n = this.vertice.length;
       
        let cond = (n * (n - 1)) / 2;
        
        if (cond == this.contAristas) {
            
            return true;
        } 
        else {
            return false;
        }
    }
    
    esMultigrafo() {
       
        return this.isMult;
    }
    
    esSubgrafo(g) {
        
        let resultado = false;
        
        if (this.pares(g) === this.nombres(g)) {
            
            resultado = true
        }
        return resultado;
    }
    
    nombres(g) {
        
        let resultado = false;
        
        for (let i = 0; i < this.vertice.length; i++) {
            
            if (this.vertice[i] == g.vertice[i]) {
                
                resultado = true;
            } 
            else {
               
                resultado = false;
            }
        }
        
        return resultado;
    }
    pares(g) {
        
        let resultado = false;
        
        for (let i = 0; i < this.contAristas; i++) {
           
            for (let k = 0; k < 2; k++) {
               
                if (this.conjPares[i][k] === g.conjPares[i][k]) {
                   
                    resultado = true;
                } 
                else {
                    resultado = false;
                
                }

            }
        }
        return resultado;
    }
}



var g = new Graph(6);

var vertices = ['1', '2', '3', '4', '5', '6'];

for (var i = 0; i < vertices.length; i++) {
   
    g.addvertice(vertices[i]);

}


g.addArista('1', '2');

g.addArista('2', '3');

g.addArista('3', '4');

g.addArista('4', '1');

g.addArista('1', '3');

g.addArista('4', '2');

g.addArista('3', '6');

g.addArista('5', '6');

g.imprimirGrafo();

console.log(g.esCompleto()); // false 

console.log(g.esMultigrafo()); // false


var g2 = new Graph(3);

var vertices2 = ['1', '2', '3', '4'];

for (var i = 0; i < vertices2.length; i++) {

    g2.addvertice(vertices2[i]);

}

g2.addArista('1', '2');

g2.addArista('2', '3');

g2.addArista('3', '4');

g2.addArista('4', '1');

g2.addArista('1', '3');

g2.addArista('4', '2');

g2.imprimirGrafo();

console.log(g2.esCompleto()); //true

console.log(g2.esMultigrafo()); // false

console.log(g2.esSubgrafo(g)); // true


var g3 = new Graph(2);

var vertices3 = ['1', '2'];

for (var i = 0; i < vertices3.length; i++) {

    g3.addvertice(vertices3[i]);

}

g3.addArista('1', '1');

g3.addArista('1', '2');



g3.imprimirGrafo();

console.log(g3.esCompleto()); //false 


console.log(g3.esMultigrafo()); // true

console.log(g3.esSubgrafo(g)); // false