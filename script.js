const arrayString = ["melancia","limão","laranja"]

const arrayNumber = [12,45,3]

const arrayMix = ["Fe",47,true]

const arrayUmValor = [5]

const arrayEmpty = []

//--------------------------------------

console.log(arrayString.length) // 3
console.log(arrayString [3])  // undefined

console.log(arrayMix.includes("Fe"))  //true

console.log(arrayUmValor[0])   // 5

console.log(arrayUmValor.length)   // 1

//--------------------------------------

// const copia = arrayString
const copia = arrayString.slice()
copia.push("mamão")

console.log("ARRAY ORIGINAL", arrayString)
console.log("COPIA", copia)
// adiciona a nova string também na array original, usar slice para fazer a cópia

copia.splice(1,2)
console.log(copia)

//--------------------------------------

const arrayNumber1 = [5,17,23,28,33,45]

const copiaArrayNumber = arrayNumber1.slice()

copiaArrayNumber.pop()

copiaArrayNumber.push(6)

copiaArrayNumber.splice(2,1)

console.log(arrayNumber1)
console.log(copiaArrayNumber)