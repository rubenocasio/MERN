
const entries = aaronsDoor => {
    let output = []
    for (let parkersKey in aaronsDoor) {
        output.push([parkersKey, aaronsDoor[parkersKey]])
    }
    return output
}