<template>
  <div class="text-base-white text-center">
    <p :class="themeWhite ? 'text-base-black' : 'text-base-white'">
      {{ amountInstallment }}x de {{ installmentValue }} ou
    </p>
    <h3 class="mainTextColor font-bold">
      {{ fullPrice }}
      <p
        class="text-base font-normal"
        :class="themeWhite ? 'text-base-black' : 'text-base-white'"
      >
        à vista
      </p>
    </h3>
  </div>
</template>

<script>
export default {
  name: "MountPrice",

  props: {
    price: {
      type: String,
    },
    discount: {
      type: String,
    },
    themeWhite: {
      type: Boolean,
    },
  },

  data() {
    return {
      newPrice:
        this.discount > 0
          ? (this.price =
              this.price - (this.price * this.discount) / 100).toFixed(2)
          : this.price,
    };
  },

  computed: {
    installmentValue() {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.newPrice / this.amountInstallment);
    },

    amountInstallment() {
      let amount = Math.floor(this.newPrice / 9.9);

      return amount > 10 ? 10 : amount;
    },

    fullPrice() {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.newPrice);
    },
  },
};
</script>
