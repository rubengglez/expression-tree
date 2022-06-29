const ValueNode = require("../ValueNode");
const SumNode = require("../SumNode");

test("given a couple of nodes, a sum should be performed", () => {
    const firstOperator = ValueNode(10)
    const secondOperator = ValueNode(10)
    const node = SumNode(firstOperator, secondOperator)
    expect(node.result()).toBe(20)
    expect(node.toString()).toBe('(10 + 10)')
})