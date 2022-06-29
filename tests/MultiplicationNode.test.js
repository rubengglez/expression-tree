const ValueNode = require("../ValueNode");
const MultiplicationNode = require("../MultiplicationNode");

test("given a couple of nodes, a multiplication should be performed", () => {
    const firstOperator = ValueNode(10)
    const secondOperator = ValueNode(0)
    const node = MultiplicationNode(firstOperator, secondOperator)
    expect(node.result()).toBe(0)
    expect(node.toString()).toBe('(10 x 0)')
})