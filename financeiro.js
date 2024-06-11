import prompt from 'prompt-sync'
let ler = prompt()

export function depositar(saldo, nome) {
   let novoValor = 0
   console.log(`O(A) senhor(a) ${nome} deseja depositar quanto?`)
   let deposito = ler()
    
   while (deposito <= 0) {
    console.log(`Depósito inválido! Não é possível depositar esse valor, insire novamente`)
    deposito = ler()
   }
   if (deposito >= 0){
    novoValor = novoValor + (+ deposito)
   }
   if (deposito === 'c') {
    novoValor = 0
    return novoValor
   }
  
   return novoValor + saldo
} 

export function sacar(saldo, nome) {
    let novoValor = 0
    console.log(`O(A) senhor(a) ${nome} deseja sacar quanto?`)
    let saque = ler()
 
    while (saque <= 0) {
        console.log(`Depósito inválido! Não é possível depositar esse valor, insire novamente`)
        saque = ler()
    }
    if (saque >= 0){
     saldo = saldo - saque
    }
    if (saque === 'c') {
     novoValor = 0
     return novoValor
    }
  
    return saldo 

}

export function exibirsaldo(saldo, nome) {
    console.log(`O novo saldo do(a) senhor(a) ${nome} é: R$${saldo}`)
}
export function simular(){
    console.log('Quantos de juros?')
    let juros = Number(ler())
    console.log('Tempo de investimento?')
    let tempo = Number(ler())
    console.log('Capital inicial')
    let capital = Number(ler())
    let calc = capital*((1+(juros/100))**tempo)
    return calc
}