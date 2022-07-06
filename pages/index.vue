<template>
    <div class="index container w-full h-screen flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-green-500 text-center mb-6">Aprova Concursos</h1>
            <span class="text-8xl">👨🏻‍🎓</span>
        </div>
        <div class="grid grid-cols-1 gap-4 p-6 mt-28 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <nuxt-link to="/oab" class="text-start">
                <h2>OAB</h2>
            </nuxt-link>
            <nuxt-link to="/exame-de-suficiencia-cfc-crc" class="text-start">
                <h2>CFC</h2>
            </nuxt-link>
            <nuxt-link to="/enem" class="text-start">
                <h2>ENEM</h2>
            </nuxt-link>
            <nuxt-link to="/encceja" class="text-start">
                <h2>ENCCEJA</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-financeiras" class="text-start">
                <h2>FINANCEIRAS</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-projetos" class="text-start">
                <h2>PROJETOS</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-ti" class="text-start">
                <h2>TI</h2>
            </nuxt-link>
            <nuxt-link to="/cursos-por-area-de-interesse" class="text-start">
                <h2>PRIMEIRO CONCURSO</h2>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'indexPage',
}
</script>