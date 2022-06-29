const ValueNode = require("../ValueNode");
const SumNode = require("../SumNode");
const MultiplicationNode = require("../MultiplicationNode");
const SubtractionNode = require("../SubtractionNode");
const DivisionNode = require("../DivisionNode");

test("it should be Infinity when a number is divided by zero", () => {
    const tree = DivisionNode(
        SumNode(
            ValueNode(7),
            MultiplicationNode(
                SubtractionNode(ValueNode(3), ValueNode(2)),
                ValueNode(5)
            )
        ),
        ValueNode(0)
    );
    expect(tree.result()).toBe(Infinity)
    expect(tree.toString()).toBe('((7 + ((3 - 2) x 5)) ÷ 0)')
})

test("it should create a tree using float values", () => {
    const tree = DivisionNode(
        SumNode(
            ValueNode(-10),
            MultiplicationNode(
                SubtractionNode(ValueNode(3.0), ValueNode(2.0)),
                ValueNode(-5.0)
            )
        ),
        ValueNode(6.0)
    );
    expect(tree.result()).toBe(-2.5)
    expect(tree.toString()).toBe('((-10 + ((3 - 2) x -5)) ÷ 6)')
})

test("it should take into account multiplication of negative numbers", () => {
    const tree = DivisionNode(
        SumNode(
            ValueNode(-10),
            MultiplicationNode(
                SubtractionNode(ValueNode(-1), ValueNode(0)),
                ValueNode(-5.5)
            )
        ),
        ValueNode(1)
    );
    expect(tree.result()).toBe(-4.5)
    expect(tree.toString()).toBe('((-10 + ((-1 - 0) x -5.5)) ÷ 1)')
})

test("it should take into account minus with negative numbers", () => {
    const tree = DivisionNode(
        SumNode(
            ValueNode(-10),
            MultiplicationNode(
                SubtractionNode(ValueNode(-2), ValueNode(-1)),
                ValueNode(5.5)
            )
        ),
        ValueNode(-1)
    );
    expect(tree.result()).toBe(15.5)
    expect(tree.toString()).toBe('((-10 + ((-2 - -1) x 5.5)) ÷ -1)')
})

test("when NaN is given by a node, NaN should be returned", () => {
    const tree = DivisionNode(
        SumNode(
            ValueNode(-10),
            DivisionNode(
                ValueNode(0),
                ValueNode(0)
            )
        ),
        ValueNode(-1)
    );
    expect(tree.result()).toBe(NaN)
})