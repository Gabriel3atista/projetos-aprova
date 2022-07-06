<template>
    <section class="home-assinatura relative h-screen overflow-hidden darkBgColor">
        <main class="relative z-20 flex flex-col justify-center items-center w-full h-full container pt-14 lg:flex-row">
            <div class="flex-1 mt-16 flex flex-col justify-center items-center lg:items-start">
                <div class="w-80">
                    <img class="w-full" :src="require('~/assets/images/assinaturas/logo.svg')"
                        alt="Logo assinatura completa">
                </div>
                <div
                    class="flex flex-col justify-center items-center mt-6 text-center lg:justify-start lg:items-start lg:text-left">
                    <h2 class="text-white font-bold">Conteúdos organizados na ordem do que mais tem
                        <span class="secondTextColor">chance de
                            cair na
                            prova</span>
                    </h2>
                    <button @click="compraCurso(44366)"
                        class="block mt-12 py-2 px-6 bg-orange/10 hover:bg-orange border border-orange rounded uppercase text-white text-center w-[200px] font-bold duration-300">assine
                        já</button>
                    <p class="text-white/40 mt-3 text-sm">Assine agora por apenas R$119,90/Mês</p>
                </div>
            </div>
            <div class="flex-1 mt-12">
                <img class="w-full h-auto max-w-2xl pointer-events-none"
                    :src="require('~/assets/images/assinaturas/questoes_img.png')" width="545" height="478"
                    alt="Imagem aprova questões">
            </div>
        </main>
    </section>
</template>

<script>
export default {
    name: "HomeAssinaturas",

    data() {
        return {
            buyItems: []
        }
    },

    methods: {
        compraCurso(id) {
            const idCurso = id;

            this.buyItems.push({
                id: idCurso,
                parent_id: '',
                product_type: 'concurso',
                qty: 1
            })

            const items = JSON.stringify({ 'items': this.buyItems });

            this.$axios.$post('https://carrinho.aprovaconcursos.com.br/add-item', items)
                .then(response => {
                    if (response.status == 'success') {
                        location.href = response.url;
                    }
                });
        }
    }
}
</script>

<style lang="scss">
.blur-1 {
    position: absolute;
    bottom: -880px;
    left: -280px;
    width: 900px;
    z-index: 0;
}

.blur-2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 1250px;
    z-index: 0;
}

.home-assinatura {
    background-image: url('~assets/images/assinaturas/blur.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>