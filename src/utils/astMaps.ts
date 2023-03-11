import { UnaryOperator } from 'estree'

export const unaryOpMap: { [key: string]: UnaryOperator } = {
  '-': '-',
  '+': '+',
  '!': '!',
  '*': 'void',
  '&': 'delete'
}

const unaryOpRevMap = {
  '-': '-',
  '+': '+',
  '!': '!',
  void: '*',
  delete: '&'
}

export const typeMap = {
  int: 'var',
  char: 'let',
  float: 'const'
}

const typeRevMap = {
  var: 'int',
  let: 'char',
  const: 'float'
}

export const actual = {
  unary: (raw: string) => unaryOpRevMap[raw],
  kind: (raw: string) => typeRevMap[raw]
}
