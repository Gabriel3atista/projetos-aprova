<template>
    <div class="modal-cards flex flex-row gap-6 flex-wrap justify-center">
        <div v-for="(pacote, index) in pacotes" :key="index"
            class="card justify-center box-border max-w-[330px] mt-20 py-6 px-12 border rounded-xl shadow-lg bg-white/[.03] hover:bg-white/[.07]">
            <div class="relative flex flex-col items-center content-center">
                <span v-if="index == 0"
                    class="mainBgColor tag absolute py-1 px-3 -top-12 border-8 rounded-full text-white">Recomendado</span>
                <div class="flex flex-col items-center mt-5">
                    <h3 class="uppercase font-bold text-white text-center">{{ pacote.attributes.descricao }}</h3>
                    <p class="text-base-white mt-3">{{ pacote.attributes.cargo.split('-')[0] }}</p>
                    <div class="flex flex-col justify-between mt-12">
                        <MountPrice :price="pacote.attributes.valor" :discount="pacote.attributes.valor_desconto" />
                        <div class="flex flex-col justify-center items-center mt-12">
                            <Button>
                                <a class="block py-2 px-4" @click="compraCurso(pacote.id)">COMPRAR</a>
                            </Button>
                            <a :href="`https://www.aprovaconcursos.com.br/concurso/${iniciais}/${idInstituicao}/${urlCargo(pacote.attributes.cargo)}/${pacote.id}`"
                                target="_blank" rel="noopener noreferer"
                                class="text-base-white mt-4 cursor-pointer hover:underline">Saiba
                                mais</a>
                        </div>
                    </div>
                    <p class="text-xs text-base-white mt-12">Código: {{ pacote.id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CardComponent',

    data() {
        return {
            pacotes: [],
            buyItems: []
        }
    },

    props: {
        idEdital: {
            type: Number,
        },

        idInstituicao: {
            type: String
        },

        iniciais: {
            type: String
        }
    },

    async fetch() {
        await this.$axios.$get(`https://api-concurso.iesde.com.br/cms/edital/${this.idEdital}/pacotes`)
            .then(response => {
                if (response.data.length) {
                    this.pacotes = this.pacotes.concat(response.data);
                    this.pacotes = this.pacotes.sort((a, b) => parseFloat(b.attributes.valor) - parseFloat(a.attributes.valor));
                }

            })
            .catch(response => { console.log(response) })
    },

    methods: {
        urlCargo(str) {
            str = str === '' ? 'curso' : str;
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
                .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
                .replace(/(^-+|-+$)/, '')
                .toLowerCase();
        },

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
.tag {
    border-color: var(--dark-bg-color);
}
</style>