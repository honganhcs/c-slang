const wordSize = 4

export class Memory {
  private memory: DataView
  private memorySize: number
  private heapPointer: number
  private stackPointer: number

  constructor(words: number) {
    const data = new ArrayBuffer(words * wordSize)
    this.memory = new DataView(data)
    this.memorySize = words
    this.heapPointer = 0
    this.stackPointer = this.memorySize - 1
  }

  malloc(size: number) {
    size = size < 0 ? size + this.memorySize : size
    const address = this.heapPointer
    this.heapPointer += size
    this.checkHeapSmallerThanStack()
    return address
  }

  allocateMemory(value: any, kind: any, isHeap: boolean) {
    if (kind.dimensions) {
      return this.allocateArray(value, kind, isHeap)
    } else {
      const address = this.allocate(isHeap)
      if (kind.pointers == 0 && kind.primitive == 'float') {
        this.setFloat(address, value)
      } else {
        // for pointer, int, char
        this.setInt(address, value)
      }
      return address
    }
  }

  freeMemory(address: number) {
    if (address < this.heapPointer) {
      return false
    }
    this.stackPointer = address
    return true
  }

  getMemory(address: number, kind: any) {
    if (address <= this.stackPointer && address >= this.heapPointer) {
      throw new Error('segmentation fault')
    }
    if (kind.pointers == 0 && kind.primitive == 'float') {
      return this.getFloat(address)
    } else {
      return this.getInt(address)
    }
  }

  setMemory(address: number, value: any, kind: any) {
    if (kind.pointers == 0 && kind.primitive == 'float') {
      this.setFloat(address, value)
    } else {
      this.setInt(address, value)
    }
  }

  private checkHeapSmallerThanStack() {
    if (this.heapPointer >= this.stackPointer) {
      throw new Error('memory exhausted')
    }
  }

  private allocate(isHeap: boolean) {
    this.checkHeapSmallerThanStack()
    let address
    if (isHeap) {
      address = this.heapPointer
      this.heapPointer += 1
    } else {
      address = this.stackPointer
      this.stackPointer -= 1
    }
    return address
  }

  private allocateArray(arr: any, kind: any, isHeap: boolean) {
    // the layout of allocated memory does not follow array layout when
    // the array has less number of elements than its maximum size
    this.checkHeapSmallerThanStack()
    let numElements = 1
    kind.dimensions.forEach((dim: number) => (numElements *= dim))
    numElements = arr.length <= numElements ? arr.length : numElements
    const elementKind = {
      primitive: kind.primitive,
      pointers: kind.pointers
    }
    const address = isHeap ? this.heapPointer : this.stackPointer
    for (let count = 0; count < numElements; count++) {
      this.allocateMemory(arr[count], elementKind, isHeap)
    }
    if (isHeap) {
      this.heapPointer = address + numElements
    } else {
      this.stackPointer = address - numElements
    }
    this.checkHeapSmallerThanStack()
    return address
  }

  private setInt(address: number, value: number) {
    this.memory.setInt32(address * wordSize, value)
  }

  private setFloat(address: number, value: number) {
    this.memory.setFloat32(address * wordSize, value)
  }

  private getInt(address: number) {
    return this.memory.getInt32(address * wordSize)
  }

  private getFloat(address: number) {
    return this.memory.getFloat32(address * wordSize)
  }
}
