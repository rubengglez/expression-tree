class WrongValueType extends Error
{
    constructor(input) {
        super(`Input type given ${typeof input} is invalid. It should be an integer`);
        this.name = 'WrongValueType'
    }
}

module.exports = WrongValueType