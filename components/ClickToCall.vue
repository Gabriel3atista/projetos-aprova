<template>
    <div id="clickToCall"
        class="fixed z-50 justify-center items-center w-full h-full bg-black/70 backdrop-blur-sm py-24 px-6"
        :class="modalActive ? 'flex' : 'hidden'">
        <div class="relative w-full h-full p-3 rounded bg-white">
            <span
                class="button cursor-pointer absolute top-0 right-0 mainBgColor hover:mainBgColorHover w-10 h-10 p-1 rounded-bl rounded-tr flex justify-center items-center"
                @click="closeClickToCall">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path
                        d="M55.0584 50L80.6932 19.4434C81.1228 18.9355 80.7615 18.1641 80.0975 18.1641H72.3045C71.8455 18.1641 71.4061 18.3691 71.1033 18.7207L49.9607 43.9258L28.8182 18.7207C28.5252 18.3691 28.0857 18.1641 27.617 18.1641H19.824C19.16 18.1641 18.7986 18.9355 19.2283 19.4434L44.8631 50L19.2283 80.5566C19.1321 80.6698 19.0703 80.8083 19.0504 80.9555C19.0305 81.1028 19.0532 81.2526 19.116 81.3873C19.1787 81.522 19.2787 81.6359 19.4042 81.7154C19.5298 81.7949 19.6754 81.8368 19.824 81.8359H27.617C28.076 81.8359 28.5154 81.6309 28.8182 81.2793L49.9607 56.0742L71.1033 81.2793C71.3963 81.6309 71.8357 81.8359 72.3045 81.8359H80.0975C80.7615 81.8359 81.1228 81.0645 80.6932 80.5566L55.0584 50Z"
                        fill="white" />
                </svg>
            </span>
            <h2 class="mt-24 text-center mainTextColor">Está com alguma dúvida?</h2>
            <p class="text-center mt-6">Preencha abaixo seu telefone e ligaremos para você:</p>
            <form action="#" class="my-6">
                <div class="w-full">
                    <input type="text" v-mask="['(##) ####-####', '(##) #####-####']"
                        class="w-full h-12 pl-4 border border-black/25 focus-visible:outline-none rounded" />
                </div>
                <div class="mt-6">
                    <label for="privacidadeClick">
                        <input type="checkbox" name="privacidadeClick" id="privacidadeClick">
                        Autorizo a coleta e tratamentos dos dados pessoais fornecidos, por mim titularizados, que
                        servirão de base para o contato e comunicação com o Fale Conosco Aprova.
                    </label>
                </div>
                <div class="mt-6">
                    <button class="button w-full h-12 uppercase rounded text-white font-bold">enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>

import { mask } from 'vue-the-mask';

export default {
    name: "ClickToCall",

    data() {
        return {
            modalActive: false
        }
    },

    directives: {
        mask
    },

    methods: {
        toggleClickToCall() {
            this.modalActive = !this.modalActive;
        }
    }
}
</script>
<style lang="scss">
</style>