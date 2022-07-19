<template>
  <main class="relative transform duration-500 z-20 2xl:pt-12" id="inicio">
    <section
      class="container relative flex flex-col justify-around items-center pt-14 pb-12 lg:flex-row"
      id="inicio"
    >
      <div class="flex-1">
        <h1 class="mainTextColor mt-2 text-center lg:text-left">
          CURSO OAB ONLINE
        </h1>
        <p class="mt-4 text-center text-3xl font-normal lg:text-left">
          Se prepare para a prova da OAB com professores especializados.
          Salários que pagam até <strong>R$9.500,00</strong>.
        </p>
      </div>
      <div class="flex-1">
        <div class="flex justify-center items-center">
          <CardHome :iniciais="iniciais" :preparatorio="preparatorio" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeOab",

  props: {
    iniciais: {
      type: String,
    },
    preparatorio: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
