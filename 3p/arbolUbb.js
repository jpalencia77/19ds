class Node {
    constructor(d) {
      this.data = d
      this.left = null
      this.right = null
    }
  }

class ubbTree{
    
    constructor(tree){
       
        this.tree=tree
       
        this.insert(b,c)

    }
    
    insert(left, right){
        
        this.tree.left = left;
        
        this.tree.right=right;
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

    
    bft(tree =this.tree){
    
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

var g = new Node("g")



a.left = b;

a.right = c;

b.left = d;

b.right = e;

c.left = f;

c.right = g;

var tree = new ubbTree(a)



console.log(tree)

console.log("PostOrder before b")

tree.postOrder(a) 

console.log("delete d, b y e")

tree.remove(b)  

console.log(tree)

console.log("PostOrder after B")

tree.postOrder(a) 

console.log("BreathFirst")

console.log(tree.bft(a)) 