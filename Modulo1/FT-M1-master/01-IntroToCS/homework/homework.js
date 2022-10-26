'use strict'

function BinarioADecimal(num) {
  let decimal = 0
  let numReverse = num.split('').reverse().join('')

  for (let i = 0; i < numReverse.length; i++) {
    decimal += numReverse[i] * 2 ** i;
  }
  return decimal;
}

function DecimalABinario(num) {
  let result = ''
  while(num >= 1){
    if(num % 2 == 0){
      result += '0'
    }else if(num % 2 == 1){
      result += '1'
    }
    num /= 2
  }
  let binarioNumber = result.split("").reverse().join("")
  return binarioNumber
}
console.log(BinarioADecimal('100'))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}