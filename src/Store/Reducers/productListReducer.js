export const productListReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_PRODUCTS_DATA":
            return payload;
        default:
            return state;
    }
};
