const assert = require("assert");
const ValueNode = require("./ValueNode");
const SubtractionNode = require("./SubtractionNode");
const MultiplicationNode = require("./MultiplicationNode");
const SumNode = require("./SumNode");
const DivisionNode = require("./DivisionNode");

const tree = DivisionNode(
    SumNode(
        ValueNode(7),
        MultiplicationNode(
            SubtractionNode(ValueNode(3), ValueNode(2)),
            ValueNode(5)
        )
    ),
    ValueNode(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());