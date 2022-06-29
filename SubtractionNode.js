const SubtractionNode = (firstOperatorNode, secondOperatorNode) => {
    const result = () => firstOperatorNode.result() - secondOperatorNode.result()
    const toString = () => `(${firstOperatorNode.toString()} - ${secondOperatorNode.toString()})`

    return {
        toString,
        result,
    }
}

module.exports = SubtractionNode