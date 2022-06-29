const ValueNode = require("../ValueNode");
const SubtractionNode = require("../SubtractionNode");

test("given a couple of nodes, a subtraction should be performed", () => {
    const firstOperator = ValueNode(10)
    const secondOperator = ValueNode(20)
    const node = SubtractionNode(firstOperator, secondOperator)
    expect(node.result()).toBe(-10)
    expect(node.toString()).toBe('(10 - 20)')
})