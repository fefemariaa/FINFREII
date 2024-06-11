import prompt from 'prompt-sync'
let ler = prompt()

import { mensagem, mensagem1, lerNumero, lerText } from './exibicao.js'
import {depositar, sacar, exibirsaldo, simular} from './financeiro.js'
import {menu} from './menu.js'

mensagem1('Seja bem-vindo(a)! Informe o seu nome e o seu saldo:')
let nome = lerText()
let saldo = lerNumero()
let investimento = 0

let continuar = true

while (continuar) {
   menu()
   let opcao = lerNumero()

   if (opcao == 1) {
      continuar == true
      saldo = depositar(saldo, nome) 
   }
   else if (opcao == 2) {
    continuar == true
    saldo =  sacar(saldo,nome) 
   }
   else if (opcao == 3) {
    exibirsaldo(saldo, nome)
   }
   else if (opcao == 5) {
     continuar = false
     mensagem(`Obrigado(a) senhor(a) ${nome} por usar o nosso sistema!`)
   }
   else if(opcao==4){
      continuar=true
      investimento=simular()
      mensagem(`O investimento do senhor(a) ${nome} foi de ${investimento.toFixed(2)}`)
   }
   else {
    mensagem('Opção inválida! Tente novamente')
   }
}