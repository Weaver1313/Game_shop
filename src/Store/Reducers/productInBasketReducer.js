export const productInBasketReduser = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_PRODUCT_IN_BASKET": {
            const exists = state.some((item) => item.id === payload.id);
            if (exists) return state;
            return [...state, payload];
        }

        case "REMOVE_PRODUCT_FROM_BASKET":
            return state.filter((item) => item.id !== payload.id);
        default:
            return { state };
    }
};
