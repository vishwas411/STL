/**
 * @module index
 * @author [Vishwas Sahu]
 * @description This file serves as the main entry point for the library, exporting all necessary modules and components.
 */
module.exports = {
    vector: require('./src/vector'),
    stack: require('./src/stack'),
    queue: require('./src/queue'),
    deque: require('./src/deque'),
    priority_queue: require('./src/priority_queue'),
    set: require('./src/set'),
    map: require('./src/map'),
    ...require('./src/algorithms')
  }