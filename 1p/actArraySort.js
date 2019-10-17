var arr = ['80', '9', '700', 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
console.log('original:', arr.join());
console.log('ordenado sin función:', arr.sort());
console.log('ordenado con función:', arr.sort(comparar));
