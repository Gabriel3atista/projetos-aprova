<template>
    <section class="py-24">
        <div class="container flex flex-col justify-center items-center">
            <h2 class="mainTextColor text-center">Dúvidas frequentes</h2>
            <div class="flex justify-center mt-12 w-full">
                <ul class="w-full max-w-3xl">
                    <li class="bg-white w-full rouded p-3 mb-3 cursor-pointer" v-for="(faq, index) in faqs" :key="index"
                        @click="faqAccordion(index)">
                        <div class="flex justify-between items-center">
                            <p class="mainTextColor font-bold">{{ faq.question }}</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" class="mainTextColor w-6 min-w-min">
                                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                                    fill="currentColor" />
                            </svg>
                        </div>
                        <div class="answer text-sm hidden mt-3" v-html="faq.answer"></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Faq",

    props: {
        faqs: {
            type: Array
        }
    },

    methods: {
        faqAccordion(index) {
            let answer = this.$el.querySelectorAll('.answer');

            answer[index].classList.toggle('hidden');
        }
    }
}
</script>
<style lang="scss">
.answer {

    p {
        margin-top: 0.75rem;
    }

    .faq-list {
        margin-left: 0.75rem;

        li {
            margin-top: 0.75rem;
        }
    }
}
</style>