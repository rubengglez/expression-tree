const assert = require("assert");
const ValueNode = require("./ValueNode");

const Node = (operator, value, left, right) => {
    const result = function () {
        switch (this.operator) {
            case "+":
                return left.result() + right.result();
            case "-":
                return left.result() - right.result();
            case "x":
                return left.result() * right.result();
            case "÷":
                return left.result() / right.result();
        }
    };

    const toString = function () {
        switch (this.operator) {
            case "+":
                return `(${left.toString()} + ${right.toString()})`;
            case "-":
                return `(${left.toString()} - ${right.toString()})`;
            case "x":
                return `(${left.toString()} x ${right.toString()})`;
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
    Node(
        "+",
        null,
        ValueNode(7),
        Node(
            "x",
            null,
            Node("-", null, ValueNode(3), ValueNode(2)),
            ValueNode(5)
        )
    ),
    ValueNode(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());