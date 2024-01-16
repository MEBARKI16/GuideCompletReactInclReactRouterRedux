import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const Store = createContext({
    items: []
});
const HandleShoppingReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === action.payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
                updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                items: updatedItems,
            };
        };
        case "UPDATE_ITEM": {
            const updatedItems = [...state.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        }

    }
    return state;
}
const CartContextProvider = ({ children }) => {
    const [shoppingReducer, shoppingDispatch] = useReducer(HandleShoppingReducer, {
        items: [],
    })

    function handleAddItemToCart(id) {
        shoppingDispatch({
            type: "ADD_ITEM",
            payload: id
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingDispatch({
            type: "UPDATE_ITEM",
            payload: {
                productId,
                amount
            }
        })
    }
    const data = {
        items: shoppingReducer.items,
        handleAddItemToCart,
        handleUpdateCartItemQuantity
    }

    return (<Store.Provider value={data}>
        {children}
    </Store.Provider>)
}
export default CartContextProvider;