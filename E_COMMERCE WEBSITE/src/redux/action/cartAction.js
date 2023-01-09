function addCart(data) {
    // console.log('data action mein aagaya',data)
    return {
        type: 'ADD_TO_CART',
        data
    }
}
function removeCart(index) {
    console.log('action ke remove cart mein honn',index)
    return {
        type: 'REMOVE_TO_CART',
        index
    }
}
function emptyCart(empty) {
    console.log()
    return {
        type: 'EMPTY_CART'
    }
}


export {addCart,removeCart,emptyCart}