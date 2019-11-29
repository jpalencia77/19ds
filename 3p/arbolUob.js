class Node {
    
    constructor(d) {
    
        this.data = d
    
        this.left = null
    
        this.right = null
    }
  }


  class uobTree{

    constructor(tree){

        this.tree=tree
    }

    insert(n){

        if(n.data>this.tree.data){

            this.tree.right= n;

        } else{
            this.tree.left = n;
        }
    }
    
    remove(n){
    
        n.data=null
    
        n.left=null
    
        n.right=null
    }
    
    postOrder(tree=this.tree){//traversal LRN       
    
        if(tree.left){
    
            this.postOrder(tree.left)
    
        }
    
        if(tree.right){
    
            this.postOrder(tree.right)
    
        }
    
        if(tree.data){
    
            console.log(tree.data)
    
        }
    }
    
    bft(tree = this.tree){
    
        console.log(tree.data)
    
        if(tree.left)
    
        this.bft(tree.left)
    
        if(tree.right)
    
        this.bft(tree.right)
    }
} 

var a = new Node("a")                   

var b = new Node("b")

var d = new Node("d")

var e = new Node("e")


var c = new Node("c")

var f = new Node("f")
  



        a.left = b;

        a.right = c;

        b.left = d;

        b.right = e;

        c.left = f;


var tree= new uobTree(a)

console.log("unb Tree ")

console.log(tree) 


console.log(tree)

console.log("PostOrder before d ")

tree.postOrder(a)

console.log("remover D")

tree.remove(d) 

console.log(tree)

console.log("PostOrder after d")

tree.postOrder(a) 

console.log("BreathFirst")

console.log(tree.bft(a))