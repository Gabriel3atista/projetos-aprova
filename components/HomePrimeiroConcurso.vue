<template>
    <section class="background-primeiro-concurso relative pb-24 h-auto darkBgColor min-h-screen">
        <main class="relative z-20 flex flex-col justify-center items-center w-full h-full container pt-14">
            <div class="flex-1">
                <div class="flex flex-col lg:flex-row">
                    <div class="mt-24 flex flex-col justify-center items-center lg:items-start">
                        <div class="flex flex-col justify-center items-center mt-6 text-center lg:justify-start">
                            <h1 class="font-HeadingNow uppercase text-white md:text-7xl">meu primeiro <br> <span
                                    class="mainTextColor">concurso</span></h1>
                            <p class="text-white/50 mt-3">Conteúdos organizados na ordem do que mais tem chance de cair
                                na
                                prova
                            </p>
                        </div>
                    </div>
                    <!-- <img class="sticky w-[35rem] top-14 mt-12 lg:mt-0"
                        :src="require('~/assets/images/primeiro-concurso/objects.png')"
                        alt="Calculadora, Livro e Microscópio"> -->
                </div>
            </div>
            <div class="flex-1 mt-24">
                <div v-for="(edital, index) in editais" :key="index" :id="index"
                    class="relative flex items-center justify-center w-full h-auto mt-12 lg:justify-start">
                    <CardCertificacoes :idEdital="edital.id" :idInstituicao="idInstituicao" :iniciais="iniciais" />
                </div>
            </div>
        </main>
        <div class="absolute flex w-full h-full left-0 bottom-0 z-10">
            <img class="h-full w-auto object-cover" :src="require('~/assets/images/primeiro-concurso/blur.svg')"
                alt="Mulher segurando livros">
        </div>
    </section>
</template>
<script>
export default {
    name: "HomePrimeiroConcurso",

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

.background-primeiro-concurso {

    @media screen and (min-width:1024px) {
        background-image: url('~assets/images/primeiro-concurso/image-background.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-position-y: 40px;
        background-position-x: 190px;
    }
}
</style>