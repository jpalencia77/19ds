let node1 = {
    data: null,
    next: null
}
let node2 = {
    data: null,
    next: null
}

let node3 = {
    data: null,
    next: null
}

node1.data = "data1";
node2.data = "data2";
node3.data = "data3";


node1.next = node2
node2.next = node3
node3.next = node1

node1.next.data
node2.next.data