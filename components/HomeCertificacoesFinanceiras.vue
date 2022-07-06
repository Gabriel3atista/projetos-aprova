<template>
    <section class="background-certificacoes-financeiras relative pb-24 h-auto darkBgColor">
        <main class="relative z-20 flex flex-col justify-center items-center w-full h-full container pt-14 lg:flex-row">
            <div class="flex-1 mt-12 flex flex-col justify-center items-center lg:items-start">
                <div
                    class="relative z-20 flex flex-col justify-center items-center mt-6 text-center lg:justify-start lg:items-start lg:text-left">
                    <p class="text-white/50 mb-3">Cursos preparatórios para</p>
                    <h1 class="font-HeadingNow uppercase text-white md:text-8xl">certificações <br> <span
                            class="mainTextColor">financeiras</span></h1>
                </div>
                <div v-for="(edital, index) in editais" :key="index" :id="index"
                    class="relative flex items-center justify-center w-full h-auto mt-12 lg:justify-start">
                    <CardCertificacoes :idEdital="edital.id" :idInstituicao="idInstituicao" :iniciais="iniciais" />
                </div>
            </div>
            <!-- <img class="sticky w-96 top-14 mt-12 lg:mt-0"
                :src="require('~/assets/images/certificacoes-projetos/business-man.png')"
                alt="Personagem analisando gráficos"> -->
        </main>
        <div class="absolute flex w-full h-full left-0 bottom-0 z-10">
            <img class="h-full w-auto object-cover" :src="require('~/assets/images/certificacoes-financeiras/blur.svg')"
                alt="Homem analisando gráficos pelo celular">
        </div>
    </section>
</template>
<script>
export default {
    name: "HomeCertificacoesFinanceiras",

    props: {
        editais: {
            type: Array
        },

        idInstituicao: {
            type: String
        },

        iniciais: {
            type: String
        }
    }
}
</script>
<style lang="scss">
.font-HeadingNow {
    font-family: 'HeadingNow', sans-serif;
}

.background-certificacoes-financeiras {
    background-image: url('~assets/images/certificacoes-financeiras/image-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>