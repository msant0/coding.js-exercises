function intMax(payOne, payTwo, payThree) {
    let groupOfPayments = [payOne, payTwo, payThree]

    return Math.max.apply(Math, groupOfPayments)
}