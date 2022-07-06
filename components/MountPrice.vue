<template>
    <div class="text-base-white text-center">
        <p>{{ amountInstallment }}x de {{ installmentValue }} ou</p>
        <h3 class="mainTextColor font-bold"> {{ fullPrice }} <p class="text-base text-base-white font-normal">à vista
            </p>
        </h3>
    </div>
</template>
<script>
export default {
    name: 'MountPrice',

    props: {
        price: {
            type: String
        },

        discount: {
            type: String
        }
    },

    data() {
        return {
            newPrice: this.discount > 0 ? (this.price = this.price - (this.price * this.discount) / 100).toFixed(2) : this.price
        }
    },

    computed: {
        installmentValue() {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.newPrice / this.amountInstallment)
        },

        amountInstallment() {
            let amount = Math.floor(this.newPrice / 9.90);

            return amount > 10 ? 10 : amount;
        },

        fullPrice() {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.newPrice)
        }
    }
}
</script>