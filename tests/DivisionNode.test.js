const ValueNode = require("../ValueNode");
const DivisionNode = require("../DivisionNode");

test("given a couple of nodes, a division should be performed", () => {
    const firstOperator = ValueNode(24)
    const secondOperator = ValueNode(12)
    const node = DivisionNode(firstOperator, secondOperator)
    expect(node.result()).toBe(2)
    expect(node.toString()).toBe('(24 ÷ 12)')
})

test("when zero is divided by zero, then NaN should returned", () => {
    const firstOperator = ValueNode(0)
    const secondOperator = ValueNode(0)
    const node = DivisionNode(firstOperator, secondOperator)
    expect(isNaN(node.result())).toBeTruthy()
    expect(node.toString()).toBe('(0 ÷ 0)')
})