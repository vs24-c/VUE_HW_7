<template>
    <div>
        <h2>Product List</h2>
        <div class="products__list">
            <div v-for="(product, ind) in getProducts" :key="ind" class="product">
                <span>{{ product.name }}</span>
                <div class="product__price-buy">
                    <span>{{ product.price }} </span>
                    <button @click="buyProd(product.id)">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsList',
    computed: {
        ...mapGetters(['getProducts']),
    },
    methods: {
        ...mapActions(['buyProd']),
    },
}
</script>

<style lang="scss" scoped>
.products__list {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border: 1px solid #999;
    padding: 10px;
    border-radius: 15px;
}
.product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border-bottom: 1px solid #999;
    & span {
        font-size: 21px;
        font-weight: 700;
        line-height: 1.3;
    }
}
.product__price-buy {
    display: flex;
    align-items: center;
    gap: 30px;
    & span {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: red;
    }
    & button {
        background-color: #4caf50;
        color: white;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: orchid;
        }
    }
}
</style>
