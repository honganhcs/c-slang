const wordSize = 4

export class Heap {
  heap: DataView
  heapSize: number
  free: number

  constructor(words: number) {
    const data = new ArrayBuffer(words * wordSize)
    this.heap = new DataView(data)
    this.heapSize = words
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
    this.heap.setInt32(address * wordSize, value)
    return address
  }

  allocateFloat(value: number) {
    const address = this.allocate()
    this.heap.setFloat32(address * wordSize, value)
    return address
  }

  getInt(address: number) {
    return this.heap.getInt32(address * wordSize)
  }

  getFloat(address: number) {
    return this.heap.getFloat32(address * wordSize)
  }
}
