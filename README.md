 # Part 2 – Refactoring an expression tree

Apply your knowledge of good software design principles to refactor and improve the design of this code. 
Feel free to change anything in the file as part of your refactoring, 
apart from the final assertions that consume the tree.

# Run the challenge

First, you should execute

```bash
    $ npm install
    $ npm start
```

If nothing is printed in the console, refactoring was successful.

# Versions

This kata was developed used node v17.3.0.

# Explanation & tradeoffs

I took for granted that all values passing to the nodes have to be
numbers, that is the reason why the returned value of the function `result`
follows the interface ` function result(): number`. So a number checker is added
to ValueNode function constructor to check that any value passed to it
has to be a number but not a NaN (this is a number type in JavaScript).

Something to improve would be managing division by zero for example. Nowadays, the result
is going to be `Infinity`.

# Tests

Jest framework was used in this repository to test the code. To run it, execute

```bash
    $ npm test
```

 If you prefer watch mode, you can run

```bash
    $ npm run t-watch
```
