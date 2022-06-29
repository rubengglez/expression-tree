const ValueNode = require("../ValueNode");
const WrongValueType = require("../WrongValueType");

test("it should get its value", () => {
    const node = ValueNode(10)
    expect(node.result()).toBe(10)
})

test("it should get its human-readable value", () => {
    const node = ValueNode(-10.101)
    expect(node.toString()).toBe('-10.101')
})

test("it should throw a WrongValueType error when something different from integer is given", () => {
    const wrongDataList = [
        {
            value: "hello"
        },
        {
            value: {}
        },
        {
            value: Symbol('test')
        },
        {
            value: []
        },
        {
            value: (() => {})
        },
        {
            value: true
        },
        {
            value: NaN
        },
        {
            value: '10.10'
        }
    ]

    wrongDataList.forEach((data) => {
        expect(() => ValueNode(data.value)).toThrow(WrongValueType)
    })
})
