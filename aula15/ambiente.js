let num = [3, 8, 4, 6]
num.push(7)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1) {
    console.log('O Valor não foi encontrato')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
