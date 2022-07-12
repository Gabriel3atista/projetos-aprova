<template>
    <section class="bg-white py-24">
        <div class="container">
            <h2 class="mainTextColor text-center mb-12">Conheça também</h2>
            <div class="flex flex-col items-center justify-center md:flex-row md:items-start">
                <div class="flex flex-1 justify-center items-center max-w-sm mb-6 md:m-6">
                    <div class="flex flex-col items-center justify-center bg-[#182B3E] rounded-md p-6">
                        <img class="mb-6 max-w-[16rem]" :src="require('~/assets/images/logo-questoes.svg')"
                            alt="Logotipo aprova questões" width="206" height="76">
                        <h3 class="text-white font-bold mb-6">Milhares de questões atuais do Exame de Ordem. E o
                            melhor:
                            <span class="text-lemon-green">SEM
                                LIMITE!</span>
                        </h3>
                        <p class="text-base-white mb-6">Nosso banco de questões é atualizado diariamente com
                            provas,
                            simulados
                            e videoaulas de
                            resolução das questões presentes nos concursos das maiores bancas organizadoras.</p>
                        <a :href="urls.aprovaQuestoes" target="_blank" rel="noopener noreferer"
                            class="bg-lemon-green hover:bg-[#51cf6a] py-2 px-4 rounded text-white font-bold">Acessar</a>
                    </div>
                </div>
                <div class="flex flex-1 justify-center items-center max-w-sm md:m-6">
                    <div class="flex flex-col items-center justify-center bg-[#17192F] rounded-md p-6">
                        <img class="mb-6 max-w-[16rem]" :src="require('~/assets/images/logo-assinatura.svg')"
                            alt="Logotipo aprova questões" width="217" height="64">
                        <ul class="mb-6">
                            <li class="mb-6">
                                <div class="inline-flex items-center">
                                    <svg class="mr-3" width="19" height="15" viewBox="0 0 19 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 1.5L8.625 14L1.5 6.5" stroke="#FB9B6F" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white font-bold">
                                        Acesso a todos os cursos do site</p>
                                </div>
                                <p class="text-base-white pl-7">Milhares de preparatórios para concursos
                                    federais,
                                    estaduais e
                                    municipais</p>
                            </li>
                            <li class="mb-6">
                                <div class="inline-flex items-center">
                                    <svg class="mr-3" width="19" height="15" viewBox="0 0 19 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 1.5L8.625 14L1.5 6.5" stroke="#FB9B6F" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white font-bold">
                                        Acesso ao Aprova Questões</p>
                                </div>
                                <p class="text-base-white pl-7">Milhares de questões atuais de concursos</p>
                            </li>
                            <li class="mb-6">
                                <div class="inline-flex items-center">
                                    <svg class="mr-3" width="19" height="15" viewBox="0 0 19 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 1.5L8.625 14L1.5 6.5" stroke="#FB9B6F" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white font-bold">
                                        Prática de Redação para concursos</p>
                                </div>
                                <p class="text-base-white pl-7">Prepare-se para as provas de redação, que serão
                                    corrigidas por nossos professores
                                </p>
                            </li>
                        </ul>
                        <a :href="urls.assinaturaCompleta" target="_blank" rel="noopener noreferer"
                            class="bg-[#FB9B6F] hover:bg-[#f8a883] py-2 px-4 rounded text-white font-bold">Acessar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "QuestoesAssinaturas",

    props: {
        urls: {
            type: Object
        }
    }
}
</script>