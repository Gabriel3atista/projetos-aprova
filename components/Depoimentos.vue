<template>
    <section class="py-24" id="depoimentos">
        <div class="container">
            <h2 id="comments" class="mainTextColor md:text-center">Comentários dos alunos sobre nossas
                videoaulas
            </h2>
            <div class="mt-12" :class="activeTestimonials ? 'h-full' : 'max-h-[550px] overflow-hidden'">
                <ul class="testimonials-list">
                    <li class="bg-white rounded p-6" v-for="(testimonial, index) in testimonials" :key="index">
                        <span class="block mb-3 text-lg font-bold mainTextColor">{{ testimonial.author }}</span>
                        <div class="mb-3">{{
                                testimonial.depoiment
                        }}</div>
                        <span class="text-sm">{{ testimonial.date }}</span>
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-center w-full pt-12 pb-6 bg-gradient-to-b from-bodyColor/[.4] to-bodyColor"
                :class="activeTestimonials ? 'sticky bottom-0' : 'relative bottom-16'">
                <a href="#comments">
                    <button class="py-2 px-4 mainBgColor uppercase font-bold rounded text-white"
                        @click="activeTestimonials = !activeTestimonials">
                        {{ activeTestimonials ? 'Já entendi' : 'ver mais' }}
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Depoimentos",

    props: {
        testimonials: {
            type: Array
        }
    },

    data() {
        return {
            activeTestimonials: false,
        }
    }
}
</script>

<style lang="scss">
.testimonials-list {
    column-count: 1;

    @media screen and (min-width: 640px) {
        column-count: 2;
    }

    @media screen and (min-width: 1024px) {
        column-count: 3;
    }

    li {
        break-inside: avoid;
        margin-bottom: 20px;
    }
}
</style>