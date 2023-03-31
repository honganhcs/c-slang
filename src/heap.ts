const wordSize = 4

export class Heap {
  heap: DataView
  heapSize: number
  free: number

  constructor(words: number) {
    const data = new ArrayBuffer(words * wordSize)
    this.heap = new DataView(data)
    this.heapSize = words
    this.free = 0
  }

  allocateMemory(value: any, kind: any) {
    if (kind.primitive == 'int') {
      return this.allocateInt(value)
    } else if (kind.primitive == 'float') {
      return this.allocateFloat(value)
    }
    // TODO
    return this.allocateInt(value)
  }

  allocate() {
    if (this.free >= this.heapSize) {
      throw new Error('memory exhausted')
    }
    const address = this.free
    this.free += 1
    return address
  }

  allocateInt(value: number) {
    const address = this.allocate()
    this.setInt(address, value)
    return address
  }

  allocateFloat(value: number) {
    const address = this.allocate()
    this.setFloat(address, value)
    return address
  }

  setMemory(address: number, value: any, kind: any) {
    if (kind.primitive == 'int') {
      this.setInt(address, value)
    } else if (kind.primitive == 'float') {
      this.setFloat(address, value)
    }
  }

  setInt(address: number, value: number) {
    this.heap.setInt32(address * wordSize, value)
  }

  setFloat(address: number, value: number) {
    this.heap.setFloat32(address * wordSize, value)
  }

  getMemory(address: number, kind: any) {
    if (kind.primitive == 'int') {
      return this.getInt(address)
    } else if (kind.primitive == 'float') {
      return this.getFloat(address)
    }
    // TODO
    return this.getInt(address)
  }

  getInt(address: number) {
    return this.heap.getInt32(address * wordSize)
  }

  getFloat(address: number) {
    return this.heap.getFloat32(address * wordSize)
  }
}
