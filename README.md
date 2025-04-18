# STL (Standard Template Library for Node.js)

A custom-built C++-like STL module implemented in pure JavaScript.  
It provides a collection of data structures and algorithms modeled after the C++ STL, ready to use in any Node.js project.

---

## 📦 Installation

You can include it directly from GitHub:

```bash
npm install git+https://github.com/vishwas411/STL.git
```

> ✅ Works with CommonJS (`require`) style

---

## ✅ Usage

```js
const { vector, stack, sort, binarySearch } = require('STL')

const v = new vector()
v.push(10)
v.push(20)
console.log(v.toArray()) // [10, 20]

const arr = [5, 1, 3]
sort(arr)
console.log(arr) // [1, 3, 5]
```

---

## 🧱 Available Data Structures

| Structure         | Description                        |
|------------------|------------------------------------|
| `vector`         | Dynamic array with random access   |
| `stack`          | LIFO stack                         |
| `queue`          | FIFO queue                         |
| `deque`          | Double-ended queue                 |
| `priority_queue` | Min/Max heap via custom comparator |
| `set`            | Unique unordered collection        |
| `map`            | Key-value store                    |

Each structure supports:
- `.destroy()` to simulate memory cleanup
- STL-like method names (`push`, `pop`, `top`, `front`, etc.)

---

## ⚙️ Algorithms

| Function               | Description                          |
|------------------------|--------------------------------------|
| `sort(arr)`            | In-place sort (ascending by default) |
| `binarySearch(arr, x)` | Returns index or -1                  |
| `lowerBound(arr, x)`   | First index where `≥ x`              |
| `upperBound(arr, x)`   | First index where `> x`              |

---

## 🧪 Examples & Testing

For full examples and usage, see the companion test repo:  
👉 [STL-Testing](https://github.com/vishwas411/stl-testing)

---

## 🛠️ Roadmap

- [ ] Add `reverse`, `unique`, `rotate` functions
- [ ] Min/Max heaps as separate classes
- [ ] ES Module (`import`) version
- [ ] TypeScript support

---

## 👨‍💻 Author

Maintained by [Vishwas Sahu](https://github.com/vishwas411)

---

## 📜 License

MIT
