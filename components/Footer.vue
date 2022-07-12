<template>
    <footer class="darkBgColor py-6">
        <div class="container">
            <div class="w-full mb-12">
                <ul class="flex justify-center items-center">
                    <li class="mx-2 opacity-60 hover:opacity-100">
                        <a :href="urls.blog" target="_blank" rel="noopener noreferer">
                            <img class="pointer-events-none" src="~/assets/icons/blog.svg" alt="Ícone do blog"
                                width="40" height="40">
                        </a>
                    </li>
                    <li class="mx-2 opacity-60 hover:opacity-100">
                        <a :href="urls.facebook" target="_blank" rel="noopener noreferer">
                            <img class="pointer-events-none" src="~/assets/icons/facebook.svg" alt="Ícone do blog"
                                width="40" height="40">
                        </a>
                    </li>
                    <li class="mx-2 opacity-60 hover:opacity-100">
                        <a :href="urls.instagram" target="_blank" rel="noopener noreferer">
                            <img class="pointer-events-none" src="~/assets/icons/instagram.svg" alt="Ícone do blog"
                                width="40" height="40">
                        </a>
                    </li>
                    <li class="mx-2 opacity-60 hover:opacity-100">
                        <a :href="urls.twitter" target="_blank" rel="noopener noreferer">
                            <img class="pointer-events-none" src="~/assets/icons/twitter.svg" alt="Ícone do blog"
                                width="40" height="40">
                        </a>
                    </li>
                    <li class="mx-2 opacity-60 hover:opacity-100">
                        <a :href="urls.youtube" target="_blank" rel="noopener noreferer">
                            <img class="pointer-events-none" src="~/assets/icons/youtube.svg" alt="Ícone do blog"
                                width="40" height="40">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-content mb-12 lg:mb-6">
                <div class="footer-item">
                    <ul class="w-full text-base-white text-center lg:text-left">
                        <li class="font-bold mb-3">Horários de atendimento</li>
                        <li class=" mb-3 text-sm">Segunda a sexta: das 08h00 às 20h30.</li>
                        <li class="mb-3 text-sm">Não há atendimento aos sábados, domingos e feriados.
                        </li>
                        <li class=" mb-12 font-bold">0800 727 6282</li>
                    </ul>
                </div>
                <div class="footer-item flex justify-between flex-row text-sm text-base-white mb-12 sm:justify-center">
                    <ul class="mx-3">
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.quemSomos" target="_blank"
                                rel="noopener noreferer">Quem
                                somos</a>
                        </li>
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.comoComprar" target="_blank"
                                rel="noopener noreferer">Como
                                comprar?</a>
                        </li>
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.faleConosco" target="_blank"
                                rel="noopener noreferer">fale
                                conosco</a>
                        </li>
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.politicaDePrivacidade" target="_blank"
                                rel="noopener noreferer">Política de
                                privacidade</a>
                        </li>
                    </ul>
                    <ul class="mx-3">
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.politicaDeCancelamento" target="_blank"
                                rel="noopener noreferer">Política de cancelamento</a>
                        </li>
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.faq" target="_blank"
                                rel="noopener noreferer">Perguntas frequentes</a>
                        </li>
                        <li class="mb-3">
                            <a class="hover:underline" :href="urls.trabalheConosco" target="_blank"
                                rel="noopener noreferer">Trabalhe conosco</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-item flex justify-end">
                    <a :href="urls.aprovaConcursos" target="_blank" rel="noopener noreferer">
                        <img class="max-w-[130px] pointer-events-none" :src="require('~/assets/images/logo-aprova.svg')"
                            alt="Logotipo aprova concursos" width="180" height="69">
                    </a>
                </div>
            </div>
            <div class="text-base-white text-center text-sm">
                <p class="mb-3">Al. Dr. Carlos de Carvalho, 1482 Batel - CEP 80730-200 Curitiba - PR</p>
                <p>Estúdios em São Paulo, Belo Horizonte, Curitiba - Alunos em todos os estados do Brasil.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    props: {
        urls: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
.footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
    }

    .footer-item {
        width: 100%;

        @media screen and (min-width: 1024px) {
            width: 33.3%;
        }
    }
}
</style>