<template>
    <section class="darkBgColor py-24 relative overflow-auto flex flex-col items-center w-full z-10">
        <div class="container">
            <div class="flex flex-col justify-center">
                <h2 class="mainTextColor text-center">Preparatórios para {{ iniciais }} em vídeoaula</h2>
                <h3 class="text-base-white text-center mt-6">Acesso ao curso até a data da prova</h3>
            </div>
            <div class="mt-12">
                <div class="buttons flex justify-start overflow-auto">
                    <button v-for="(edital, index) in editais" :key="index" @click="toggleTabs($event, index)"
                        class="buttonTab font-bold text-2xl p-2 z-10 cursor-pointer rounded-t text-base-white"
                        :class="index == 0 ? 'active' : ''">
                        {{
                                splitTabModal(edital.attributes.descricao)
                        }}
                    </button>
                </div>
                <div v-for="(edital, index) in editais" :key="index" :id="index"
                    class="modal flex flex-col items-center justify-center py-24 px-6 rounded-b relative border"
                    :class="index == 0 ? '' : 'hidden'">
                    <h3 class="text-white font-bold">{{ edital.attributes.descricao }}</h3>
                    <ul class="mt-12">
                        <li class="mainTextColor">Inscrição:
                            <span class="text-base-white ml-2">
                                {{
                                        edital.attributes.dt_inscricao_inicio && edital.attributes.dt_inscricao_fim ?
                                            'De ' + formatDate(edital.attributes.dt_inscricao_inicio) + ' Até ' +
                                            formatDate(edital.attributes.dt_inscricao_fim) : 'A definir'
                                }}
                            </span>
                        </li>
                        <li class="mainTextColor mt-2">Prova 1ª fase:
                            <span class="text-base-white ml-2">
                                {{
                                        edital.attributes.dt_prova ?
                                            formatDate(edital.attributes.dt_prova) :
                                            'A definir'
                                }}
                            </span>
                        </li>
                    </ul>
                    <Card :idEdital="edital.id" :idInstituicao="idInstituicao" :iniciais="iniciais" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Packages",

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
    },

    methods: {
        toggleTabs(event, index) {
            let button = this.$el.querySelectorAll(".buttonTab");

            button.forEach(element => {
                element.classList.remove("active");
            })

            event.currentTarget.classList.add("active");

            this.toggleModal(index);
        },

        toggleModal(index) {
            let modal = this.$el.querySelectorAll(".modal");

            modal.forEach(element => {
                element.classList.add("hidden");
            })

            modal[index].classList.remove("hidden");

        },

        splitTabModal(description) {
            return description.split('-')[0];
        },

        formatDate(date) {
            let newFormatDate = date.split("-");

            return `${newFormatDate[2]}/${newFormatDate[1]}/${newFormatDate[0]}`
        }
    }
}
</script>

<style lang="scss" scoped>
.buttons {

    .active {
        border: 1px var(--main-color) solid;
        color: var(--main-color);
        border-bottom: 1px var(--dark-bg-color) solid;
        background-color: var(--dark-bg-color);
    }
}

.buttonTab {
    border: 1px solid var(--dark-bg-color);
    border-bottom: 1px solid var(--main-color);
}

.modal {
    top: -1px;
    z-index: 1;
    background-color: var(--dark-bg-color);
    border: 1px solid var(--main-color);

    .modal-cards {

        >*,
        &::before,
        &::after {
            content: '';
            order: 1;
            flex: 0 1 306px;
        }

        >* {
            order: 0
        }
    }
}
</style>