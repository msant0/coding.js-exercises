function delDel(textForDelete) {
    let findByDEL = textForDelete.substring(1, 4)
    if (findByDEL === 'del') {
        return textForDelete.substring(0, 1).concat(textForDelete.substring(4, textForDelete.length))
    }
    return textForDelete
}