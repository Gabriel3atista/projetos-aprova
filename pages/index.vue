<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <h1 class="text-green-500">Aprova Concursos 👨🏻‍🎓</h1>
        <div class="flex flex-row mt-28">
            <nuxt-link to="/oab">
                <h2>OAB</h2>
            </nuxt-link>
            <nuxt-link to="/exame-de-suficiencia-cfc-crc">
                <h2 class="ml-6">CFC</h2>
            </nuxt-link>
            <nuxt-link to="/enem">
                <h2 class="ml-6">ENEM</h2>
            </nuxt-link>
            <nuxt-link to="/encceja">
                <h2 class="ml-6">ENCCEJA</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-financeiras">
                <h2 class="ml-6">FINANCEIRAS</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-projetos">
                <h2 class="ml-6">PROJETOS</h2>
            </nuxt-link>
            <nuxt-link to="/certificacoes-ti">
                <h2 class="ml-6">TI</h2>
            </nuxt-link>
            <nuxt-link to="/cursos-por-area-de-interesse">
                <h2 class="ml-6">PRIMEIRO CONCURSO</h2>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'indexPage',
}
</script>