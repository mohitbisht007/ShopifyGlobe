export const saveToLocalStorage = (state) => {
    try {
        const stringifyState = JSON.stringify(state);
        localStorage.setItem("cart", stringifyState)
    } catch (error) {
        console.warn(error)
    }
}

export const loadFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem("cart")
        if(cart === null) return undefined;
        return JSON.parse(cart)
    } catch (error) {
        console.warn(error)
    }
}