// 1 - criar um array de numeros de 1 ao 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2 - adicionar um elemento no final
numeros.push(50)
//console.log(numeros);

// 3 - adicionar 3 elementos: 100, 200, 400
numeros.push(100, 200, 400)
//console.log(numeros);
let novosNumeros = [100, 200, 400]
numeros.push(novosNumeros)
//console.log(numeros);

// 4 - Remover o último elemento
numeros.pop()
//console.log(numeros);

//  5 - adicionar elementos no início do array
numeros.unshift(0)
//console.log(numeros);

// 6 - inserir elemento no meio do array

// 6.1 - tamanho do array
//console.log(`O tamanho do array é: ${numeros.length}`);

// 6.2/6.3 - descobrir a metade(meio), arrendondar para inteiro quando necessário
let meio = (numeros.length) / 2;
let meioArredondado = Math.floor(meio);

//console.log(meioArredondado);

// 6.4 - inserir o elemento em um lugar do array
numeros.splice(meioArredondado, 0, 'Novo elemento')
//console.log(numeros);

// 7 - criar um array de número passando um início e o fim
// let array = Array.from({ length: 10}, (_, index) => console.log(index));

// 8 - criar uam função onde passa o início e o fim de uma lista de Item, do 'Item[início] até 'Item[fim]'
const criarArrayItem = (inicio, fim) => {
    Array.from({length:fim-inicio+1}, (e, i) => console.log(`Item ${i + 1}`))
}

criarArrayItem(1, 15)
