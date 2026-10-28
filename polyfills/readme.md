# JavaScript Polyfills & Implementations Checklist

## 1. Array Methods — Core

- [ ] `Array.prototype.map`
- [ ] `Array.prototype.filter`
- [ ] `Array.prototype.reduce`
- [ ] `Array.prototype.forEach`
- [ ] `Array.prototype.find`
- [ ] `Array.prototype.findIndex`
- [ ] `Array.prototype.some`
- [ ] `Array.prototype.every`
- [ ] `Array.prototype.flat`
- [ ] `Array.prototype.flatMap`

## 2. Function Methods — Core

- [ ] `Function.prototype.call`
- [ ] `Function.prototype.apply`
- [ ] `Function.prototype.bind`
- [ ] `bind` with partial application
- [ ] `bind` with constructor behavior

## 3. Timing Utilities

- [ ] Debounce
- [ ] Debounce with leading and trailing options
- [ ] Throttle
- [ ] Throttle with leading and trailing options
- [ ] Cancelable debounce/throttle

## 4. Object Methods & Prototypes

- [ ] `Object.create`
- [ ] `Object.assign`
- [ ] Custom `instanceof`
- [ ] Custom `new` operator
- [ ] `Object.freeze` — behavior and limitations
- [ ] Deep clone with nested objects
- [ ] Deep clone with circular references

## 5. Promise Methods

- [ ] `Promise.resolve`
- [ ] `Promise.reject`
- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.race`
- [ ] `Promise.any`
- [ ] `Promise.prototype.finally`
- [ ] Promise-based `sleep`
- [ ] Promise concurrency limiter
- [ ] Retry with exponential backoff
- [ ] Custom `Promise` implementation
- [ ] Promise chaining
- [ ] Thenable adoption
- [ ] Rejection propagation

## 6. Functional Programming

- [ ] `memoize`
- [ ] `curry`
- [ ] `compose`
- [ ] `pipe`
- [ ] Partial application
- [ ] Once-only function
- [ ] Function execution with timeout

## 7. Advanced Implementations

- [ ] EventEmitter (`on`, `off`, `emit`, `once`)
- [ ] LRU cache
- [ ] Task queue
- [ ] Async task scheduler
- [ ] Limited-concurrency task runner
- [ ] Sequential promise execution
- [ ] Parallel promise execution with a concurrency limit

## 8. Edge Cases & Testing

- [ ] Empty arrays and empty inputs
- [ ] Sparse arrays
- [ ] Missing arguments and omitted initial values
- [ ] `null` and `undefined`
- [ ] Preserving `this`
- [ ] Preserving callback arguments
- [ ] Correct error handling
- [ ] Promise rejection and chaining
- [ ] Out-of-order asynchronous completion
- [ ] Constructor behavior
- [ ] Prototype inheritance
- [ ] Write tests for normal and edge cases

## Recommended Practice Order

1. [ ] `map`
2. [ ] `filter`
3. [ ] `reduce`
4. [ ] `call`
5. [ ] `apply`
6. [ ] `bind`
7. [ ] Debounce
8. [ ] Throttle
9. [ ] `flat`
10. [ ] `Object.create`
11. [ ] Custom `instanceof`
12. [ ] Custom `new`
13. [ ] `Promise.all`
14. [ ] `Promise.allSettled`
15. [ ] `Promise.race`
16. [ ] `Promise.any`
17. [ ] Custom `Promise`
18. [ ] `memoize`
19. [ ] `curry`
20. [ ] `compose` and `pipe`
21. [ ] EventEmitter
22. [ ] Concurrency limiter
23. [ ] Deep clone
24. [ ] LRU cache
25. [ ] Retry with exponential backoff
26. [ ] closure