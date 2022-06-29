const assert = require("assert");
const ValueNode = require("./ValueNode");
const SubtractionNode = require("./SubtractionNode");
const MultiplicationNode = require("./MultiplicationNode");
const SumNode = require("./SumNode");

const Node = (operator, value, left, right) => {
    const result = function () {
        switch (this.operator) {
            case "÷":
                return left.result() / right.result();
        }
    };

    const toString = function () {
        switch (this.operator) {
            case "÷":
                return `(${left.toString()} ÷ ${right.toString()})`;
        }
    };

    return {
        operator,
        value,
        left,
        right,
        result,
        toString
    };
};

const tree = Node(
    "÷",
    null,
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