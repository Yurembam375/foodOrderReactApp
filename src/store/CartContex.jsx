// import { useReducer } from "react";
// import { createContext } from "react";

// const CartContext = createContext({
//     item: [],
//     addIteam: (iteam) => { },
//     removeIteam: (id) => { },
// });

// function cartReducer(state, action) {
//     if (action.type === 'ADD_ITEM') {
//         const existingCartItemIndex = state.iteam.findIndex(
//             (item) => item.id === action.item.id
//         );
//         const updateItems = [...state.item];
//         if (existingCartItemIndex > -1) {
//             const existingItem = state.item[existingCartItemIndex];
//             const updateItem = {
//                 ...existingItem,
//                 quantity: existingItem.quantity + 1
//             };
//             updateItems[existingCartItemIndex] = updateItem;
//         } else {
//             updateItems.push({ ...action.item, quantity: 1 });
//         }
//         return { ...state, items: updateItems };
//     }
//     if (action.type === 'REMOVE_ITEAM') {
//         const existingCartItemIndex = state.iteam.findIndex(
//             (item) => item.id === action.id
//         );
//         const existingCartItem = state.items[existingCartItemIndex];
//         const updatedItems = [...state.items];
//         if (existingCartItem.quantity === 1) {
//             updatedItems.splice(existingCartItemIndex, 1);
//         } else {
//             const updatedItem = {
//                 ...existingCartItem,
//                 quantity: existingCartItem.quantity - 1,
//             };
//             updatedItems[existingCartItemIndex] = updatedItem;
//         }
//         return { ...state, items: updateItems };
//     }
//     return state;
// }

// export function CartContextProvider({ children }) {
//   const [cart,dispacthCartAction]=  useReducer(cartReducer, { item: [] });


// function addItem(item){
// dispacthCartAction({type:"ADD_ITEM" ,item})
// }
// function removeItem(id){
//     dispacthCartAction({type:"REMOVE_ITEM" ,id})  
// }
// const cartContext={
//     item:cart.items,
//     addItem,
//     removeItem
//   };
// console.log(cartContext);
//     return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
// }

// export default CartContext;

import { useReducer, createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const updatedItems = [...state.items];
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updatedItems };
    }
    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const updatedItems = [...state.items];
        const existingCartItem = updatedItems[existingCartItemIndex];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
    };
    console.log(cartContext);
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
