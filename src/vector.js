export class vector {
    constructor() {
      this.data = []
    }
  
    size() {
      return this.data.length
    }
  
    empty() {
      return this.size() === 0
    }
  
    push(val) {
      this.data.push(val)
    }
  
    pop() {
      if (this.empty()) throw new Error('vector is empty')
      return this.data.pop()
    }
  
    at(index) {
      if (index < 0 || index >= this.size()) throw new Error('Index out of bounds')
      return this.data[index]
    }
  
    front() {
      if (this.empty()) throw new Error('vector is empty')
      return this.data[0]
    }
  
    back() {
      if (this.empty()) throw new Error('vector is empty')
      return this.data[this.size() - 1]
    }
  
    clear() {
      this.data = []
    }
  
    toArray() {
      return [...this.data]
    }
  }
  