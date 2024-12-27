import { createContext, useState } from "react";

const UserProgessContext = createContext({
    progress: '',//cart ,checkout,
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
});

export function UserProgessContextProvider({ children }) {
    const [userProgess, setUserProgess] = useState("");

    function showCart() {
        setUserProgess("cart");

    }
    function hideCart() {
        setUserProgess("");

    }
    function showCheckout() {
        setUserProgess("checkout");

    } function hideCheckout() {
        setUserProgess("");

    }

    const userProgressCtx = {
        progress: userProgess,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };
    return (
        <UserProgessContext.Provider value={userProgressCtx}>
            {children}
        </UserProgessContext.Provider>
    )
}
export default UserProgessContext;