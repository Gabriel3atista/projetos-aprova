<template>
    <main class="relative pt-12 transform duration-500 z-20" id="inicio">
        <section class="container relative flex justify-center items-center pt-14 pb-12 lg:justify-start lg:items-start"
            id="inicio">
            <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <div>
                    <h1 class="mainTextColor mt-2">CURSO ONLINE <br> ENCCEJA 2022</h1>
                    <h2 class="mt-4 text-gray text-left md:text-center lg:text-left font-semibold">Preparatório para o
                        Encceja
                    </h2>
                </div>
                <div class="flex justify-center max-w-sm mt-10 p-4 rounded-xl bg-white shadow-lg z-30">
                    <div class="relative flex flex-col items-center content-center">
                        <span
                            class="absolute py-1 px-3 -top-12 border-8 border-[#eaeff3] rounded-full bg-yellow text-white">Recomendado</span>
                        <div class="flex flex-col items-center mt-5">
                            <h3 class="uppercase font-bold mainTextColor">pacote</h3>
                            <h2 class="uppercase font-bold mainTextColor">completo</h2>
                            <ul class="mt-2">
                                <li class="flex items-center my-4">
                                    <span class="mr-3">
                                        <svg class="mainTextColor" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" aria-hidden="true">
                                            <path
                                                d="M9.00003 16.1702L4.83003 12.0002L3.41003 13.4102L9.00003 19.0002L21 7.00024L19.59 5.59024L9.00003 16.1702Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Conteúdo organizado segundo histórico de aparições nas provas
                                    anteriores.
                                </li>
                                <li class="flex items-center my-4">
                                    <span class="mr-3">
                                        <svg class="mainTextColor" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" aria-hidden="true">
                                            <path
                                                d="M3 10.0002H14V12.0002H3V10.0002ZM3 6.00024H14V8.00024H3V6.00024ZM3 14.0002H10V16.0002H3V14.0002ZM20.59 11.9302L16.34 16.1702L14.22 14.0502L12.81 15.4602L16.34 19.0002L22 13.3402L20.59 11.9302Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    40 videoaulas do nivelamento de português, matemática, química e física
                                </li>
                                <li class="flex items-center my-4">
                                    <span class="mr-3">
                                        <svg class="mainTextColor" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" aria-hidden="true">
                                            <path
                                                d="M11.99 2.00024C6.47 2.00024 2 6.48024 2 12.0002C2 17.5202 6.47 22.0002 11.99 22.0002C17.52 22.0002 22 17.5202 22 12.0002C22 6.48024 17.52 2.00024 11.99 2.00024ZM12 20.0002C7.58 20.0002 4 16.4202 4 12.0002C4 7.58024 7.58 4.00024 12 4.00024C16.42 4.00024 20 7.58024 20 12.0002C20 16.4202 16.42 20.0002 12 20.0002Z"
                                                fill="currentColor" />
                                            <path
                                                d="M12.5 7.00024H11V13.0002L16.25 16.1502L17 14.9202L12.5 12.2502V7.00024Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Início do curso: imediato
                                </li>
                                <li class="flex items-center my-4">
                                    <span class="mr-3">
                                        <svg class="mainTextColor" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" aria-hidden="true">
                                            <path
                                                d="M9.4 16.6002L4.8 12.0002L9.4 7.40024L8 6.00024L2 12.0002L8 18.0002L9.4 16.6002ZM14.6 16.6002L19.2 12.0002L14.6 7.40024L16 6.00024L22 12.0002L16 18.0002L14.6 16.6002Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Videoaulas de marcação de código
                                </li>
                                <li class="flex items-center my-4">
                                    <span class="mr-3">
                                        <svg class="mainTextColor" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" aria-hidden="true">
                                            <path
                                                d="M21 3.50024H3C1.89 3.50024 1 4.39024 1 5.50024V17.5002C1 18.0307 1.21071 18.5394 1.58579 18.9145C1.96086 19.2895 2.46957 19.5002 3 19.5002H8V21.5002H16V19.5002H21C22.1 19.5002 22.99 18.6002 22.99 17.5002L23 5.50024C23 4.96981 22.7893 4.4611 22.4142 4.08603C22.0391 3.71096 21.5304 3.50024 21 3.50024ZM21 17.5002H3V5.50024H21V17.5002ZM16 11.5002L9 15.5002V7.50024L16 11.5002Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Videoaulas sem limites de visualização
                                </li>
                            </ul>
                            <Button>
                                <a class="block w-full h-full py-3 px-6" @click="compraCurso(114926)">comprar</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden absolute h-full w-full top-0 right-0 lg:block">
                <img class="absolute right-[15px] h-auto w-[450px] top-[43%] transform -translate-y-1/2 pointer-events-none"
                    src="~/assets/images/encceja/student.png" width="545" height="478" alt="Estudando segurando livros">
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "HomeEncceja",

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

<style lang="scss" scoped>
</style>