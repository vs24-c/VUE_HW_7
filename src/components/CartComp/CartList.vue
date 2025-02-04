<template>
    <div>
        <h2>Cart</h2>
        <div :class="addedClassEmpty">
            <div v-for="prodCart in getCart" :key="prodCart.id" class="product">
                <span>{{ prodCart.name }}</span>
                <div class="product__price-buy">
                    <span> {{ fixPriceTwo(prodCart.price) }}</span>
                    <button @click="refuseProdInCart(prodCart.id)">Refuse</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CartList',
    computed: {
        ...mapGetters(['getCart']),
        addedClassEmpty() {
            return this.getCart.length === 0 ? 'empty' : 'products__list'
        },
    },
    methods: {
        ...mapActions(['refuseProdInCart']),
        fixPriceTwo(price) {
            return (Math.round(price * 100) / 100).toFixed(2)
        },
    },
}
</script>

<style lang="scss" scoped>
.empty {
    display: none;
}
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
