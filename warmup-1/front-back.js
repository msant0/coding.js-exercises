function frontBack(description) {
    if (description.length === 1) return description

    let firstCharacter = description.substring(0, 1)
    let internalPhrase = description.substring(1, description.length - 1)
    let lastCharacter = description.substring(description.length - 1, description.length)

    return lastCharacter.concat(internalPhrase.concat(firstCharacter))
}