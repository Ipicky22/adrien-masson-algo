const E01 = require ("./Array_String/ex01.js");
const E02 = require ("./Array_String/ex02.js");
const E03 = require ("./Array_String/ex03.js");

const n1 = new E01();
console.log(n1.isUnique("fod")) // Is unique !
console.log(n1.isUnique("foo")) // Is not unique !

const n2 = new E02();
n2.isReverse("fod") // dof !
n2.isReverse("foo") // oof !

const n3 = new E03();
n3.isAnagram("fod", "dof") // True !
n3.isAnagram("foo", "fod") // False !