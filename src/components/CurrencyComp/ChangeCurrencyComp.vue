<template>
    <div>
        <h2>Currency</h2>
        <select @change="choiceCurUser(currency)" v-model="currency" class="select">
            <option value="Dollar" selected>Dollar</option>
            <option value="Grn">Grn</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ChangeCurrencyComp',
    data() {
        return {
            currency: 'Dollar',
        }
    },
    methods: {
        ...mapActions(['choiceCurUser']),
    },
}
</script>

<style lang="scss" scoped>
.select {
    width: 150px;
    font-size: 28px;
}
</style>
