function front3(description) {
    description = description.substring(0, 3)
    description = description.concat(description.concat(description))
    return description
}