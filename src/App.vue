<template>
    <div class="wrapper">
        <products-comp />
        <cart-comp />
        <currency-comp />
    </div>
</template>

<script>
import ProductsComp from './components/ProductsComp'
import CartComp from './components/CartComp'
import CurrencyComp from './components/CurrencyComp'
import { mapActions } from 'vuex'
export default {
    name: 'App',
    components: {
        ProductsComp,
        CartComp,
        CurrencyComp,
    },
    methods: {
        ...mapActions(['loadingProducts']),
    },
    created() {
        this.loadingProducts()
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 15px 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-template-rows: auto;
    gap: 15px;
}
</style>
