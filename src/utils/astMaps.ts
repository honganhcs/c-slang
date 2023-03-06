import { UnaryOperator } from 'estree'

export const unaryOpMap: { [key: string]: UnaryOperator } = {
  '-': '-',
  '+': '+',
  '!': '!',
  '*': 'void',
  '&': 'delete'
}

export const typeMap = {
  int: 'var',
  char: 'let',
  float: 'const'
}
