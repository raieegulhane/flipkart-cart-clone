const initialCartState = {
    cart: [],
    cartQty: 0,
    cartTotal: 0,
    saveForLater: []
}

const cartReducerFunction = (state, { type, payload }) => {
    const { cart, saveForLater, cartQty, cartTotal } = state;
    switch (type) {
        case "ADD_TO_CART":
            return(
                {
                    ...state,
                    cart: [ ...cart, payload ],
                    cartQty: cartQty + 1,
                    cartTotal: cartTotal + payload.discPrice
                }
            );
        
        case "REMOVE_FROM_CART": 
            return(
                {
                    ...state,
                    cart: [ ...cart ].filter(({ id }) => id !== payload.id),
                    cartQty: cartQty - 1,
                    cartTotal: cartTotal - payload.discPrice
                }
            );

        case "SAVE_FOR_LATER":
            return(
                {
                    ...state, 
                    cart: [ ...cart ].filter(({ id }) => id !== payload.id),
                    cartQty: cartQty - 1,
                    cartTotal: cartTotal - payload.discPrice,
                    saveForLater: [ ...saveForLater, payload ]
                }
            );

        case "MOVE_TO_CART":
            return(
                {
                    ...state,
                    cart: [ ...cart, payload ],
                    cartQty: cartQty + 1,
                    cartTotal: cartTotal + payload.discPrice,
                    saveForLater: [ ...saveForLater ].filter((item) => item !== payload)
                }
            );
        
        case "DELETE_FROM_SAVE_FOR_LATER":
            return(
                {
                    ...state,
                    saveForLater: [ ...saveForLater ].filter((item) => item !== payload)
                }
            );

        default: 
            return initialCartState;
    }
}

export { initialCartState, cartReducerFunction };