const WrongValueType = require("./WrongValueType");
const isNotANumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value)
}

const ValueNode = (value) => {
    if (!isNotANumber(value)) {
        throw new WrongValueType(value);
    }

    const result = () => value
    const toString = () => value.toString()

    return {
        toString,
        result,
    }
}

module.exports = ValueNode