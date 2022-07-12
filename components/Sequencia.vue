<template>
    <section class="bg-white py-24">
        <div class="sequencia container">
            <h2 class="text-center mainTextColor mb-12">Videoaula com o que realmente cai
                na prova</h2>
            <ul class="flex justify-center">
                <li class="p-6">
                    <img class="pointer-events-none" :src="require('~/assets/images/sequencia-1.svg')"
                        alt="Homem analisando prova" width="283" height="141">
                    <p class="mainTextColor font-bold mt-3">Estude somente o que a banca cobra:</p>
                    <p class="mt-3">Analisamos as provas anteriores e organizamos o curso de acordo com o que é
                        mais
                        cobrado pela
                        banca organizadora</p>
                </li>
                <li class="p-6">
                    <img class="pointer-events-none" :src="require('~/assets/images/sequencia-2.svg')"
                        alt="Mulher analisando prova" width="291" height="158">
                    <p class="mainTextColor font-bold mt-3">Na ordem que mais cai:</p>
                    <p class="mt-3">Em cada disciplina as videoaulas estão ordenadas do assunto que mais é
                        cobrado
                        para o que menos é cobrado na prova</p>
                </li>
                <li class="p-6">
                    <img class="pointer-events-none" :src="require('~/assets/images/sequencia-3.svg')"
                        alt="Homem realizando tarefas" width="291" height="169">
                    <p class="mainTextColor font-bold mt-3">Tenha a melhor preparação:</p>
                    <p class="mt-3">Otimizamos seu tempo de estudo e você tem mais chances de ser aprovado</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    name: "Sequencia"
}
</script>
<style lang="scss">
.sequencia {
    ul {
        flex-wrap: wrap;

        li,
        &:before,
        &:after {
            flex: 1 100%;
            max-width: 400px;

            @media screen and (min-width: 768px) {
                flex-basis: 33.3%;
            }
        }

        &::before {
            order: 2
        }
    }
}
</style>