import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            products: [
                { id: 1, name: 'Apple', price: 0.99, originalPrice: 0.99 },
                { id: 2, name: 'Banana', price: 0.59, originalPrice: 0.59 },
                { id: 3, name: 'Orange', price: 1.29, originalPrice: 1.29 },
                { id: 4, name: 'Milk', price: 1.99, originalPrice: 1.99 },
                { id: 5, name: 'Bread', price: 2.49, originalPrice: 2.49 },
                { id: 6, name: 'Eggs', price: 3.49, originalPrice: 3.49 },
                { id: 7, name: 'Cheese', price: 4.99, originalPrice: 4.99 },
                { id: 8, name: 'Chicken', price: 5.99, originalPrice: 5.99 },
                { id: 9, name: 'Rice', price: 2.99, originalPrice: 2.99 },
                { id: 10, name: 'Pasta', price: 1.49, originalPrice: 1.49 },
                { id: 11, name: 'Tomato', price: 0.79, originalPrice: 0.79 },
                { id: 12, name: 'Potato', price: 0.89, originalPrice: 0.89 },
                { id: 13, name: 'Lettuce', price: 1.19, originalPrice: 1.19 },
                { id: 14, name: 'Carrot', price: 0.99, originalPrice: 0.99 },
                { id: 15, name: 'Yogurt', price: 2.29, originalPrice: 2.29 },
            ],
            cart: [],
            currency: 'Dollar', // текущая валюта
        }
    },
    getters: {
        getProducts: ({ products }) => products,
        getCart: ({ cart }) => cart,
        getCurrency: ({ currency }) => currency,
    },
    mutations: {
        addProdCart(state, prodId) {
            const product = state.products.find((prod) => prod.id === prodId)
            if (product) {
                const cartProd = state.cart.find((prod) => prod.id === product.id)
                if (cartProd) {
                    cartProd.price += product.price
                } else {
                    state.cart.push({ ...product })
                }
            }
        },
        refuseProduct(state, prodId) {
            const index = state.cart.findIndex((prod) => prod.id === prodId)
            if (index !== -1) {
                state.cart.splice(index, 1)
            }
        },
        changeCurrency(state, choiceValue) {
            if (choiceValue === 'Grn') {
                state.products.forEach((el) => {
                    el.price = (el.originalPrice * 41.7).toFixed(2)
                })
                if (state.cart.length > 0) {
                    state.cart.forEach((el) => {
                        el.price = (el.originalPrice * 41.7).toFixed(2)
                    })
                }
            } else if (choiceValue === 'Dollar') {
                state.products.forEach((el) => {
                    el.price = el.originalPrice
                })
                if (state.cart.length > 0) {
                    state.cart.forEach((el) => {
                        el.price = el.originalPrice
                    })
                }
            }
        },
    },
    actions: {
        buyProd({ commit }, prodId) {
            commit('addProdCart', prodId)
        },
        refuseProdInCart({ commit }, prodId) {
            commit('refuseProduct', prodId)
        },
        choiceCurUser({ commit }, choiceValue) {
            commit('changeCurrency', choiceValue)
        },
    },
})

export default store
