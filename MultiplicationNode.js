const MultiplicationNode = (firstOperatorNode, secondOperatorNode) => {
    const result = () => firstOperatorNode.result() * secondOperatorNode.result()
    const toString = () => `(${firstOperatorNode.toString()} x ${secondOperatorNode.toString()})`

    return {
        toString,
        result,
    }
}

module.exports = MultiplicationNode