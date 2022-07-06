<template>
    <div
        :style="{ '--main-color': mainColor, '--main-color-hover': mainColorHover, '--second-color': secondColor, '--second-color-hover': secondColorHover, '--dark-bg-color': darkBgColor }">
        <header
            v-if="projects[slug].iniciais == 'oab' || projects[slug].iniciais == 'cfc' || projects[slug].iniciais == 'enem' || projects[slug].iniciais == 'encceja'"
            class="fixed w-full h-12 inset-x-0 bg-white z-50 lg:flex lg:justify-center">
            <nav class="relative flex items-center justify-center w-full max-w-7xl h-full container lg:justify-between">
                <!-- Button -->
                <div class="absolute flex items-center justify-center w-12 h-full top-0 left-0 cursor-pointer z-20 lg:hidden"
                    @click="toggleMenu">
                    <div class="relative flex w-6 h-3.5">
                        <span class="line-1 w-full h-px bg-gray absolute"></span>
                        <span class="line-2 w-full h-px bg-gray absolute"></span>
                    </div>
                </div>
                <!-- Logo -->
                <div class="flex items-center relative w-[200px] h-full z-20 lg:justify-start">
                    <nuxt-link to="/">
                        <img class="absolute top-1/2 transform -translate-y-1/2 max-h-full"
                            :src="require(`~/assets/images/${logoImg}`)" :alt="projects[slug].assets.logoAlt"
                            width="187" height="33">
                    </nuxt-link>
                </div>
                <!-- Menu -->
                <div class="absolute flex flex-col w-full h-full top-0 px-6 z-10 duration-500 ease-in-expo overflow-hidden bg-white lg:justify-between lg:relative lg:flex lg:flex-row lg:items-center lg:w-auto lg:px-0 lg:pb-0 lg:overflow-visible"
                    :class="active ? 'h-[100vh]' : 'pointer-events-none lg:pointer-events-auto'">
                    <ul class="menuList uppercase text-xl font-semibold pt-28 transform duration-700 ease-in-out divide-y divide-gray/[.20] lg:divide-y-0 lg:flex lg:items-center lg:content-center lg:text-sm lg:pt-0 lg:h-full"
                        :class="active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 lg:opacity-100 lg:-translate-y-0'">
                        <li v-for="(item, index) in projects[slug].menu" :key="index"
                            class="cursor-pointer border-y border-gray-black lg:h-12 lg:flex lg:items-center lg:py-0 lg:px-4 lg:border-0">
                            <a :href="item.url" class="w-full block p-4">{{
                                    item.title
                            }}</a>
                        </li>
                        <li class="group cursor-pointer p-4 lg:h-12 lg:flex lg:items-center lg:py-0 lg:px-4">
                            <div class="flex justify-between lg:justify-center">
                                <p class="lg:mr-1">
                                    contato</p>
                                <svg class="w-7 text-gray fill-current transform transition duration-500 rotate-90 group-hover:-rotate-90 lg:w-6"
                                    width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                                </svg>
                            </div>
                            <div class="
							h-0 overflow-hidden normal-case text-base font-normal transform transition duration-200
							group-hover:h-auto group-hover:pt-4 lg:group-hover:pt-2
							lg:absolute lg:top-12 lg:right-0 lg:w-auto
							">
                                <ul class="subMenuList bg-white lg:p-4 lg:rounded">
                                    <li class="text-black/70 rounded hover:bg-gray/[.07]">
                                        <span class="flex p-3 w-full" @click="openClickToCall">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                                            </svg>
                                            <p>Clique aqui, te ligamos agora!</p>
                                        </span>
                                    </li>
                                    <li class="text-black/70 rounded hover:bg-gray/[.07]">
                                        <a :href="urls.whatsapp" target="_blank" rel="noopener noreferer"
                                            class="flex p-3 w-full" @click="toggleMenu">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8376 2.75005C14.6341 2.25043 13.3431 1.99546 12.04 2C6.57999 2 2.12999 6.45 2.12999 11.91C2.12999 13.66 2.58999 15.36 3.44999 16.86L2.04999 22L7.29999 20.62C8.74999 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91V4.91ZM12.04 20.15C10.56 20.15 9.10999 19.75 7.83999 19L7.53999 18.82L4.41999 19.64L5.24999 16.6L5.04999 16.29C4.22773 14.977 3.79113 13.4592 3.78999 11.91C3.78999 7.37 7.48999 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.264 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15V20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.76999 11.63 9.61999 11.38C9.47999 11.13 9.59999 11 9.72999 10.87C9.83999 10.76 9.97999 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.76999 8.26 9.56999 7.76C9.36999 7.28 9.15999 7.34 9.00999 7.33H8.52999C8.35999 7.33 8.09999 7.39 7.86999 7.64C7.64999 7.89 7.00999 8.49 7.00999 9.71C7.00999 10.93 7.89999 12.11 8.01999 12.27C8.13999 12.44 9.76999 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99V13.99Z" />
                                            </svg>
                                            <p>Compre pelo WhatsApp</p>
                                        </a>
                                    </li>
                                    <li class="text-black/70 rounded hover:bg-gray/[.07]">
                                        <a :href="urls.faleConosco" target="_blank" rel="noopener noreferer"
                                            class="flex p-3 w-full" @click="toggleMenu">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM18 18H6V17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18Z" />
                                            </svg>
                                            <p>Fale Conosco</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <button
                        class="button relative bottom-0 flex justify-center w-full p-3 rounded cursor-pointer transform duration-700 delay-100 lg:delay-0 lg:w-auto lg:h-auto lg:p-0 lg:duration-200"
                        :class="active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 lg:opacity-300 lg:-translate-y-0'">
                        <a :href="urls.ava"
                            class="flex items-center justify-center w-full h-full uppercase text-xl font-semibold text-white lg:text-sm lg:py-2 lg:px-6"
                            target="_blank" rel="noopener noreferer">login</a>
                    </button>
                </div>
            </nav>
        </header>
        <header
            v-if="projects[slug].iniciais == 'assinatura' || projects[slug].iniciais == 'certificacoes-financeiras' || projects[slug].iniciais == 'certificacoes-ti' || projects[slug].iniciais == 'certificacoes-projetos' || projects[slug].iniciais == 'cursos-por-area-de-interesse'"
            class="fixed w-full h-12 inset-x-0 z-50 darkBgColor lg:flex lg:justify-center">
            <nav
                class="relative flex items-center  justify-center w-full max-w-7xl h-full container lg:justify-between">
                <!-- Menu Button -->
                <div class="absolute flex items-center justify-center w-12 h-full top-0 left-0 cursor-pointer z-20 lg:hidden"
                    @click="toggleMenu">
                    <div class="relative flex w-6 h-3.5">
                        <span class="line-1 w-full h-px bg-white/50 absolute"></span>
                        <span class="line-2 w-full h-px bg-white/50 absolute"></span>
                    </div>
                </div>
                <!-- Telefone -->
                <div class="flex justify-center items-center relative w-[200px] h-full z-20 lg:justify-start">
                    <a href="tel:08007276282" class="font-bold secondTextColor">0800 727 6282</a>
                </div>
                <!-- Menu -->
                <div class="darkBgColor absolute flex flex-col w-full h-full top-0 px-6 z-10 duration-500 ease-in-expo overflow-hidden lg:justify-between lg:relative lg:flex lg:flex-row lg:items-center lg:w-auto lg:px-0 lg:pb-0 lg:overflow-visible"
                    :class="active ? 'h-[100vh]' : 'pointer-events-none lg:pointer-events-auto'">
                    <ul class="menuList text-white/50 uppercase text-xl font-semibold pt-28 transform duration-700 ease-in-out divide-y divide-gray/[.20] lg:divide-y-0 lg:flex lg:items-center lg:content-center lg:text-sm lg:pt-0 lg:h-full"
                        :class="active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 lg:opacity-100 lg:-translate-y-0'">
                        <li v-for="(item, index) in projects[slug].menu" :key="index"
                            class="cursor-pointer text-white/50 border-y border-gray-black lg:h-12 lg:flex lg:items-center lg:py-0 lg:px-4 lg:border-0">
                            <a :href="item.url" class="w-full block p-4">{{
                                    item.title
                            }}</a>
                        </li>
                        <li class="group cursor-pointer p-4 lg:h-12 lg:flex lg:items-center lg:py-0 lg:px-4">
                            <div class="flex justify-between lg:justify-center">
                                <p class="lg:mr-1">
                                    contato</p>
                                <svg class="w-7 text-white/50 fill-current transform transition duration-500 rotate-90 group-hover:-rotate-90 lg:w-6"
                                    width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                                </svg>
                            </div>
                            <div class="
							h-0 overflow-hidden normal-case text-base font-normal transform transition duration-200
							group-hover:h-auto group-hover:pt-4 lg:group-hover:pt-2
							lg:absolute lg:top-12 lg:right-0 lg:w-auto
							">
                                <ul class="subMenuList text-white/50 darkBgColor lg:p-4 lg:rounded">
                                    <li class=" ounded hover:bg-white/[.07]">
                                        <a href="#" class="flex p-3 w-full" @click="toggleMenu">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                                            </svg>
                                            <p>Clique aqui, te ligamos agora!</p>
                                        </a>
                                    </li>
                                    <li class="rounded hover:bg-white/[.07]">
                                        <a :href="urls.whatsapp" target="_blank" rel="noopener noreferer"
                                            class="flex p-3 w-full" @click="toggleMenu">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8376 2.75005C14.6341 2.25043 13.3431 1.99546 12.04 2C6.57999 2 2.12999 6.45 2.12999 11.91C2.12999 13.66 2.58999 15.36 3.44999 16.86L2.04999 22L7.29999 20.62C8.74999 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91V4.91ZM12.04 20.15C10.56 20.15 9.10999 19.75 7.83999 19L7.53999 18.82L4.41999 19.64L5.24999 16.6L5.04999 16.29C4.22773 14.977 3.79113 13.4592 3.78999 11.91C3.78999 7.37 7.48999 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.264 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15V20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.76999 11.63 9.61999 11.38C9.47999 11.13 9.59999 11 9.72999 10.87C9.83999 10.76 9.97999 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.76999 8.26 9.56999 7.76C9.36999 7.28 9.15999 7.34 9.00999 7.33H8.52999C8.35999 7.33 8.09999 7.39 7.86999 7.64C7.64999 7.89 7.00999 8.49 7.00999 9.71C7.00999 10.93 7.89999 12.11 8.01999 12.27C8.13999 12.44 9.76999 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99V13.99Z" />
                                            </svg>
                                            <p>Compre pelo WhatsApp</p>
                                        </a>
                                    </li>
                                    <li class="rounded hover:bg-white/[.07]">
                                        <a :href="urls.faleConosco" target="_blank" rel="noopener noreferer"
                                            class="flex p-3 w-full" @click="toggleMenu">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM18 18H6V17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18Z" />
                                            </svg>
                                            <p>Fale Conosco</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <button
                        class="button relative bottom-0 flex justify-center w-full p-3 rounded cursor-pointer transform duration-700 delay-100 lg:delay-0 lg:w-auto lg:h-auto lg:p-0 lg:duration-200"
                        :class="active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 lg:opacity-300 lg:-translate-y-0'">
                        <a :href="urls.ava"
                            class="flex items-center justify-center w-full h-full uppercase text-xl font-semibold text-white lg:text-sm lg:py-2 lg:px-6"
                            target="_blank" rel="noopener noreferer">login</a>
                    </button>
                </div>
            </nav>
        </header>
        <!-- Click to call -->
        <div v-if="modalActive"
            class="fixed z-50 justify-center items-center w-full h-full bg-black/70 backdrop-blur-sm py-24 px-6"
            :class="modalActive ? 'flex' : 'flex'">
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
                <form action="" class="my-6" @submit.prevent="sendNumber">
                    <div class="w-full">
                        <input type="text" v-mask="['(##) ####-####', '(##) #####-####']" v-model="celularClickToCall"
                            placeholder="Preencha seu celular ou telefone"
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
                        <button type="submit"
                            class="button w-full h-12 uppercase rounded text-white font-bold">enviar</button>
                    </div>
                    <div class="absolute bottom-0 mb-3 mt-6">
                        <small class="mt-3">O dado pessoal disponibilizado não terá uso que exorbite a tentativa de 3
                            telefonemas. Central exclusiva para dúvidas referentes à matrícula. Se você já é aluno ligue
                            para <a href="tel:08007276282" class="font-bold">{{ telefone }}</a> -
                            Opção 2.</small>
                    </div>
                </form>
                <div class="absolute flex-col mt-24 p-6 inset-0 bg-yellow callback-box no-transition"
                    style="display:flex">
                    <span class="message text-2xl text-center">Teste</span>
                    <span class="phone mt-12 text-2xl text-center">41 984012729</span>
                </div>
            </div>
        </div>
        <!-- Homes personalizadas -->
        <HomeOab v-if="projects[slug].iniciais == 'oab'" />
        <HomeCfc v-if="projects[slug].iniciais == 'cfc'" />
        <HomeEnem v-if="projects[slug].iniciais == 'enem'" />
        <HomeEncceja v-if="projects[slug].iniciais == 'encceja'" />
        <HomeAssinatura v-if="projects[slug].iniciais == 'assinatura'" />
        <HomeCertificacoesFinanceiras v-if="projects[slug].iniciais == 'certificacoes-financeiras'"
            :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
        <HomeCertificacoesTi v-if="projects[slug].iniciais == 'certificacoes-ti'" :idInstituicao="projects[slug].id"
            :editais="editais" :iniciais="projects[slug].iniciais" />
        <HomeCertificacoesProjetos v-if="projects[slug].iniciais == 'certificacoes-projetos'"
            :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
        <HomePrimeiroConcurso v-if="projects[slug].iniciais == 'cursos-por-area-de-interesse'"
            :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
        <ConteudosAssinatura v-if="projects[slug].iniciais == 'assinatura'" />
        <Questoes v-if="projects[slug].iniciais == 'assinatura'" :linkAprovaQuestoes="urls.aprovaQuestoes" />
        <!-- Ciclo de vida dos estudos -->
        <section v-if="projects[slug].iniciais == 'assinatura'" class="py-24 bg-white">
            <div class="container relative flex flex-col items-center justify-center gap-5 lg:gap-0">
                <div class="mb-12 text-center">
                    <h2 class="mainTextColor">Prática da redação</h2>
                    <p>Você assiste videoaulas específicas com teoria e dicas para construir uma excelente redação.</p>
                </div>
                <div class="study-lifecycle">
                    <div class="study-item-body">
                        <div class="study-item">
                            <div class="step-item">
                                <span class="circle-before"></span>
                                <div class="circle-after">
                                    <h2 class="text-[#593177]">1</h2>
                                </div>
                            </div>
                            <p class="text-item">Você acessa o Ambiente Virtual de Aprendizagem (AVA),
                                assiste às
                                videoaulas
                                teóricas, baixa e
                                imprime a folha com o modelo para escrever sua Redação</p>
                            <div class="svg-item hidden lg:block">
                                <svg class="w-full h-full" width="106" height="9" viewBox="0 0 106 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle r="4" transform="matrix(-1 0 0 1 101.5 4.5)" stroke="#593177" />
                                    <circle r="2.5" transform="matrix(-1 0 0 1 101.5 4.5)" fill="#593177" />
                                    <line y1="-0.5" x2="98" y2="-0.5" transform="matrix(-1 0 0 1 98 5)"
                                        stroke="url(#paint0_linear_363_55)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_363_55" x1="98" y1="0" x2="0" y2="0"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" stop-color="#5B3279" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="study-lifecycle">
                    <div class="study-item-body">
                        <div class="study-item">
                            <div class="step-item">
                                <span class="circle-before"></span>
                                <div class="circle-after">
                                    <h2 class="text-[#7C3784]">2</h2>
                                </div>
                            </div>
                            <div class="svg-item hidden lg:block">
                                <svg class="w-full h-full" width="106" height="9" viewBox="0 0 106 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4" stroke="#7C3784" />
                                    <circle cx="4.5" cy="4.5" r="2.5" fill="#7C3784" />
                                    <line x1="8" y1="4.5" x2="106" y2="4.5" stroke="url(#paint0_linear_365_65)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_365_65" x1="106" y1="5" x2="8" y2="5"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" stop-color="#7C3784" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p class="text-item">Você escolhe um tema, escreve o seu texto, tira uma foto dele e envia
                                para o e-mail indicado no AVA</p>
                        </div>
                    </div>
                </div>
                <div class="study-lifecycle">
                    <div class="study-item-body">
                        <div class="study-item">
                            <div class="step-item">
                                <span class="circle-before"></span>
                                <div class="circle-after">
                                    <h2 class="text-[#A44198]">3</h2>
                                </div>
                            </div>
                            <p class="text-item">Os professores corrigem a sua Redação e fazem as anotações necessárias
                                também de forma manuscrita</p>
                            <div class="svg-item hidden lg:block">
                                <svg class="w-full h-full" width="106" height="10" viewBox="0 0 106 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle r="4" transform="matrix(-1 0 0 1 101.5 5)" stroke="#A44198" />
                                    <circle r="2.5" transform="matrix(-1 0 0 1 101.5 5)" fill="#A44198" />
                                    <line y1="-0.5" x2="98" y2="-0.5" transform="matrix(-1 0 0 1 98 5.5)"
                                        stroke="url(#paint0_linear_365_73)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_365_73" x1="98" y1="0" x2="0" y2="0"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" stop-color="#A44198" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="study-lifecycle">
                    <div class="study-item-body">
                        <div class="study-item">
                            <div class="step-item">
                                <span class="circle-before"></span>
                                <div class="circle-after">
                                    <h2 class="text-[#CB4CA7]">4</h2>
                                </div>
                            </div>
                            <div class="svg-item hidden lg:block">
                                <svg class="w-full h-full" width="106" height="9" viewBox="0 0 106 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4" stroke="#CB4CA7" />
                                    <circle cx="4.5" cy="4.5" r="2.5" fill="#CB4CA7" />
                                    <line x1="8" y1="4.5" x2="106" y2="4.5" stroke="url(#paint0_linear_365_78)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_365_78" x1="106" y1="5" x2="8" y2="5"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" stop-color="#CB4CA7" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p class="text-item">Você recebe a sua redação corrigida por e-mail e pode verificar os
                                comentários dos professores sobre o que você pode melhorar</p>
                        </div>
                    </div>
                </div>
                <div class="study-lifecycle">
                    <div class="study-item-body">
                        <div class="study-item">
                            <div class="step-item">
                                <span class="circle-before"></span>
                                <div class="circle-after">
                                    <h2 class="text-[#EA52A2]">5</h2>
                                </div>
                            </div>
                            <p class="text-item">Você escolhe um novo tema e escreve levando em conta os comentários dos
                                professores sobre sua última redação</p>
                            <div class="svg-item hidden lg:block">
                                <svg class="w-full h-full" width="106" height="10" viewBox="0 0 106 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle r="4" transform="matrix(-1 0 0 1 101.5 5)" stroke="#EA52A2" />
                                    <circle r="2.5" transform="matrix(-1 0 0 1 101.5 5)" fill="#EA52A2" />
                                    <line y1="-0.5" x2="98" y2="-0.5" transform="matrix(-1 0 0 1 98 5.5)"
                                        stroke="url(#paint0_linear_365_85)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_365_85" x1="98" y1="0" x2="0" y2="0"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" stop-color="#EA52A1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Packages
            v-if="projects[slug].iniciais != 'assinatura' && projects[slug].iniciais != 'certificacoes-financeiras' && projects[slug].iniciais != 'cursos-por-area-de-interesse' && projects[slug].iniciais != 'certificacoes-ti' && projects[slug].iniciais != 'certificacoes-projetos'"
            :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" id="cursos" />
        <!-- Depoimentos -->
        <section class="py-24" id="depoimentos">
            <div class="container">
                <h2 id="comments" class="mainTextColor md:text-center">Comentários dos alunos sobre nossas videoaulas
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
        <!-- Materiais Gratuitos -->
        <section
            v-if="projects[slug].iniciais != 'assinatura' && projects[slug].iniciais != 'encceja' && projects[slug].iniciais != 'certificacoes-financeiras' && projects[slug].iniciais != 'certificacoes-ti' && projects[slug].iniciais != 'certificacoes-projetos' && projects[slug].iniciais != 'cursos-por-area-de-interesse'"
            class="darkBgColor materiaisSection relative py-24 overflow-hidden">
            <div class="container flex flex-col items-center justify-center">
                <h2 class="mainTextColor text-center">Materiais Gratuitos</h2>
                <div class="flex w-full flex-col justify-center md:mt-24 md:flex-row">
                    <div class="relative flex flex-col items-center justify-between mt-12 lg:flex-row lg:items-start">
                        <div class="group max-w-sm mb-12 p-3 flex flex-col items-center md:mb-0"
                            v-if="materiais.temas.length">
                            <svg class="-top-10 text-white/[.15] group-hover:text-white transition duration-500 md:absolute"
                                width="60" height="71" viewBox="0 0 60 71">
                                <g clip-path="url(#clip0_34_352)">
                                    <path d="M49.0137 34.3234H46.7534V21.035H43.7969V18.6658H49.0137V34.3234Z"
                                        fill="currentColor" />
                                    <path
                                        d="M49.0137 69.5841H8.37844C3.99947 69.5841 0.437073 65.85 0.437073 61.2601V14.1389H2.69735V61.2601C2.69735 64.5437 5.24591 67.2149 8.37844 67.2149H46.7534V63.4269H49.0137V69.5841V69.5841Z"
                                        fill="currentColor" />
                                    <path
                                        d="M49.0137 21.0351H7.81255C3.79132 21.0351 0.511456 17.6882 0.4381 13.5457H0.437073L0.438306 13.4044C0.510429 9.20636 3.7907 5.8147 7.81276 5.8147H11.1031V8.18393H7.81255C5.01433 8.18393 2.73372 10.5512 2.69755 13.4753C2.7331 16.3918 4.96707 18.6658 7.81255 18.6658H46.7534V8.18393H24.7254V5.8147H49.0137V21.0351V21.0351Z"
                                        fill="currentColor" />
                                    <path d="M43.5648 19.8503H41.3045V13.8954H22.0009V11.5261H43.5648V19.8503Z"
                                        fill="currentColor" />
                                    <path d="M13.8276 11.5261H5.65399V13.8954H13.8276V11.5261Z" fill="currentColor" />
                                    <path
                                        d="M23.131 16.7514H12.6974V2.02344L17.9143 5.38882L23.1312 2.02344V16.7514H23.131ZM14.9577 14.3822H20.8707V6.26328L17.9141 8.17051L14.9575 6.26328V14.3822H14.9577Z"
                                        fill="currentColor" />
                                    <path d="M9.50856 24.1343H7.24829V64.1157H9.50856V24.1343Z" fill="currentColor" />
                                    <path
                                        d="M47.8835 61.5891C41.1682 61.5891 35.705 55.8625 35.705 48.8235C35.705 41.7843 41.1682 36.0576 47.8835 36.0576C54.599 36.0576 60.0623 41.7843 60.0623 48.8235C60.0623 55.8625 54.599 61.5891 47.8835 61.5891ZM47.8835 38.4271C42.4147 38.4271 37.9652 43.0908 37.9652 48.8237C37.9652 54.5561 42.4145 59.2201 47.8835 59.2201C53.3526 59.2201 57.802 54.5564 57.802 48.8237C57.802 43.0908 53.3526 38.4271 47.8835 38.4271Z"
                                        fill="currentColor" />
                                    <path
                                        d="M46.7067 50.2767C46.6169 50.2767 46.5516 50.2767 46.4863 50.2767C45.5394 50.277 44.5924 50.2776 43.6455 50.277C42.7319 50.2763 42.0779 49.5029 42.2312 48.5614C42.3197 48.018 42.6382 47.6303 43.1517 47.4634C43.3432 47.4011 43.5526 47.377 43.7544 47.3751C44.6735 47.366 45.5928 47.371 46.5119 47.3703C46.5711 47.3703 46.6303 47.365 46.7071 47.3611C46.7071 47.2799 46.7071 47.2118 46.7071 47.1438C46.7071 46.1454 46.7143 45.1469 46.7049 44.1486C46.6967 43.2765 47.4023 42.549 48.276 42.6709C48.823 42.7471 49.3056 43.157 49.4304 43.8006C49.461 43.9584 49.4762 44.1221 49.477 44.283C49.4813 45.235 49.4791 46.1868 49.4791 47.1388C49.4791 47.2075 49.4791 47.276 49.4791 47.371C49.5574 47.371 49.6215 47.371 49.6856 47.371C50.6435 47.371 51.6015 47.3693 52.5594 47.3716C53.3698 47.3738 53.992 48.0466 53.9729 48.8942C53.9593 49.4917 53.5241 50.0616 52.9515 50.2156C52.8089 50.2539 52.6576 50.2733 52.5103 50.2742C51.5801 50.2793 50.6497 50.2767 49.7195 50.2765C49.6484 50.2765 49.5773 50.2765 49.4789 50.2765C49.4789 50.3622 49.4789 50.4348 49.4789 50.5074C49.4789 51.4941 49.4858 52.481 49.476 53.4677C49.47 54.0731 49.2271 54.5426 48.703 54.8399C48.0058 55.2351 47.0252 54.8293 46.7971 54.0324C46.7425 53.8416 46.7125 53.6361 46.7106 53.4369C46.7018 52.4502 46.7063 51.4635 46.7061 50.4766C46.7067 50.42 46.7067 50.3627 46.7067 50.2767Z"
                                        fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_352">
                                        <rect width="60" height="70" fill="white" transform="translate(0 0.7146)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="relative materiais">
                                <h3 class="relative z-20 text-white font-bold text-center mt-3">Temas mais
                                    cobrados</h3>
                                <p class="text-base-white mt-6 px-2 lg:min-h-[140px]">Neste material você vai encontrar
                                    uma
                                    análise dos
                                    últimos exames, feita por nossos professores, que mostra quais são os assuntos mais
                                    cobrados na prova.</p>
                                <div class="relative">
                                    <ul class="w-full mt-6">
                                        <li class="rounded hover:bg-white/[.05]" v-for="tema in materiais.temas">
                                            <a class="p-3 flex justify-between text-base-white hover:text-white"
                                                :href="'https://d1lpyqedjaq3m8.cloudfront.net/' + tema.path"
                                                target="_blank" rel="noopener noreferer" :title="'Download '">
                                                <p>{{ tema.cargo }}</p>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path
                                                        d="M5.03402 9.83154C4.08823 10.0695 3.2619 10.6447 2.71028 11.449C2.15865 12.2533 1.9197 13.2313 2.03833 14.1993C2.15695 15.1674 2.62499 16.0588 3.35449 16.706C4.08399 17.3533 5.02475 17.712 6.00002 17.7145H7.00002M12 22.7145V13.7145V22.7145ZM12 22.7145L9.50002 20.7145L12 22.7145ZM12 22.7145L14.5 20.7145L12 22.7145Z"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M15.83 7.85256C15.4882 6.49913 14.6446 5.3263 13.4702 4.57182C12.2957 3.81734 10.8783 3.53765 9.50529 3.78947C8.13228 4.04128 6.90638 4.80575 6.0761 5.9279C5.24582 7.05005 4.8733 8.44593 5.03404 9.83256C5.03404 9.83256 5.18704 10.7146 5.50004 11.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M17 17.7146C17.706 17.7141 18.404 17.5641 19.0479 17.2745C19.6917 16.9848 20.267 16.5621 20.7357 16.0341C21.2045 15.5061 21.5561 14.8848 21.7674 14.2111C21.9787 13.5375 22.045 12.8267 21.9618 12.1255C21.8786 11.4244 21.6479 10.7489 21.2848 10.1433C20.9217 9.53781 20.4345 9.01605 19.8552 8.61238C19.276 8.20872 18.6178 7.93232 17.924 7.80136C17.2302 7.6704 16.5166 7.68787 15.83 7.8526L14.5 8.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="group max-w-sm mb-12 p-3 flex flex-col items-center mb:mb-0"
                            v-if="materiais.editais.length">
                            <svg class="-top-10 text-white/[.15] group-hover:text-white transition duration-500 md:absolute"
                                width="62" height="69" viewBox="0 0 62 69">
                                <path
                                    d="M32.8615 44.4759C32.8615 45.1795 32.9123 45.8712 33.0095 46.5478H11.2127C10.6405 46.5478 10.1767 46.0839 10.1767 45.512C10.1767 44.9398 10.6407 44.4761 11.2127 44.4761H32.8615V44.4759ZM10.1765 55.4824C10.1765 56.0545 10.6405 56.5182 11.2125 56.5182H39.3552C38.4498 55.9218 37.6158 55.2259 36.8684 54.4463H11.2127C10.6405 54.4463 10.1765 54.9102 10.1765 55.4824ZM39.8597 14.5645H11.2127C10.6405 14.5645 10.1767 15.0284 10.1767 15.6004C10.1767 16.1725 10.6407 16.6362 11.2127 16.6362H39.8599C40.4321 16.6362 40.8958 16.1723 40.8958 15.6004C40.8958 15.0284 40.4319 14.5645 39.8597 14.5645ZM36.8684 34.5055H11.2127C10.6405 34.5055 10.1767 34.9694 10.1767 35.5414C10.1767 36.1135 10.6407 36.5772 11.2127 36.5772H35.2175C35.7042 35.8363 36.2573 35.1429 36.8684 34.5055ZM44.0098 6.91507C44.0997 6.91507 44.1873 6.9242 44.2721 6.94161C44.3143 6.95031 44.3559 6.96114 44.3967 6.97367C44.4171 6.98004 44.4373 6.98683 44.4572 6.99426C44.9158 7.16241 45.2543 7.58172 45.3055 8.08446C45.3076 8.10633 45.3093 8.12841 45.3106 8.15049C45.3118 8.17257 45.3123 8.19486 45.3123 8.21737V30.1984C45.9535 30.1112 46.6079 30.066 47.2731 30.066C47.7298 30.066 48.1817 30.0874 48.6276 30.129V8.21737C48.6276 8.10166 48.6233 7.9868 48.615 7.87258C48.6068 7.75836 48.5942 7.6452 48.5775 7.53288C48.442 6.6155 48.0343 5.76521 47.3948 5.07733C47.3557 5.0353 47.3158 4.99347 47.275 4.95271C46.4845 4.16229 45.4581 3.69394 44.3547 3.61305C44.2404 3.60477 44.1256 3.60052 44.0098 3.60052H40.3278H39.4068V6.91549H40.3087H44.0098V6.91507ZM40.8958 25.571C40.8958 24.9988 40.4319 24.5351 39.8599 24.5351H11.2127C10.6405 24.5351 10.1767 24.999 10.1767 25.571C10.1767 26.1431 10.6407 26.6068 11.2127 26.6068H39.8599C40.4319 26.6068 40.8958 26.1429 40.8958 25.571ZM45.3123 58.7534V60.7826C45.3123 60.8051 45.3116 60.8274 45.3106 60.8495C45.3095 60.8716 45.3078 60.8937 45.3055 60.9155C45.2543 61.4183 44.9156 61.8376 44.4572 62.0057C44.4373 62.0129 44.4171 62.02 44.3967 62.0263C44.3559 62.0391 44.3143 62.0497 44.2721 62.0584C44.1873 62.0758 44.0997 62.0849 44.0098 62.0849H40.3087H9.77714H6.86101C6.7712 62.0849 6.68351 62.0758 6.59879 62.0584C6.55653 62.0497 6.51492 62.0389 6.47415 62.0263C6.45377 62.02 6.43359 62.0132 6.41364 62.0057C5.955 61.8376 5.61655 61.4185 5.56538 60.9155C5.56326 60.8937 5.56156 60.8716 5.56029 60.8495C5.55922 60.8274 5.55859 60.8051 5.55859 60.7826V8.21737C5.55859 8.19486 5.55922 8.17257 5.56029 8.15049C5.56135 8.12841 5.56305 8.10633 5.56538 8.08446C5.61655 7.58172 5.95522 7.16241 6.41364 6.99426C6.43359 6.98704 6.45377 6.98004 6.47415 6.97367C6.51492 6.96093 6.55653 6.95031 6.59879 6.94161C6.68351 6.9242 6.7712 6.91507 6.86101 6.91507H40.055H41.7417V3.6001H40.0495H6.86101C6.74529 3.6001 6.63042 3.60434 6.51619 3.61262C5.71698 3.67122 4.95833 3.933 4.30054 4.37311C4.2379 4.41493 4.17611 4.45846 4.11539 4.50368C3.933 4.63913 3.75931 4.78881 3.59582 4.95229C2.88728 5.66076 2.43714 6.55924 2.2934 7.53267C2.27683 7.64498 2.26431 7.75836 2.25581 7.87237C2.24753 7.98659 2.24329 8.10144 2.24329 8.21715V60.7824C2.24329 60.8981 2.24753 61.013 2.25581 61.1272C2.26409 61.2414 2.27662 61.3546 2.2934 61.4669C2.43714 62.4403 2.88707 63.3386 3.59582 64.0473C3.75931 64.2108 3.933 64.3604 4.11539 64.4959C4.14575 64.5184 4.17633 64.5407 4.20733 64.5623C4.88635 65.0411 5.67919 65.3256 6.5164 65.3869C6.63064 65.3952 6.74551 65.3995 6.86122 65.3995H9.77183H40.3278H44.0098C44.1256 65.3995 44.2404 65.3952 44.3547 65.3869C45.4581 65.3061 46.4847 64.8375 47.275 64.0473C47.316 64.0063 47.3557 63.9647 47.3948 63.9227C48.0343 63.2348 48.442 62.3843 48.5775 61.4671C48.594 61.3548 48.6065 61.2414 48.615 61.1274C48.6233 61.0132 48.6276 60.8983 48.6276 60.7826V58.8228C48.1817 58.8644 47.7298 58.8859 47.2731 58.8859C46.6079 58.8859 45.9533 58.8406 45.3123 58.7534Z"
                                    fill="currentColor" />
                                <path
                                    d="M47.1723 57.0745C40.2329 57.0745 34.5875 51.4297 34.5875 44.4912C34.5875 37.5528 40.2329 31.908 47.1723 31.908C54.1114 31.908 59.7568 37.5528 59.7568 44.4912C59.7568 51.4297 54.1114 57.0745 47.1723 57.0745ZM47.1723 34.2436C41.5209 34.2436 36.9231 38.8409 36.9231 44.4914C36.9231 50.142 41.5207 54.7393 47.1723 54.7393C52.8234 54.7393 57.4211 50.1422 57.4211 44.4914C57.4211 38.8407 52.8234 34.2436 47.1723 34.2436Z"
                                    fill="currentColor" />
                                <path
                                    d="M38.6296 45.0828C38.6842 45.0828 38.7303 45.0828 38.7763 45.0828C38.7663 45.0333 38.7642 44.9807 38.7447 44.9353C38.7107 44.8558 38.6661 44.7809 38.6135 44.6807C38.529 44.8094 38.6619 44.8718 38.6555 44.9612C38.4859 44.9081 38.4086 44.7964 38.3718 44.6263C38.2476 44.0512 38.7005 43.5276 39.2842 43.5304C41.0215 43.5387 42.7586 43.5334 44.4958 43.5334C44.5419 43.5334 44.5882 43.5334 44.6642 43.5334C44.6281 43.4886 44.6094 43.4606 44.5861 43.437C44.1531 43.0026 43.7202 42.5682 43.286 42.1349C43.1624 42.0113 43.0463 41.8793 43.0163 41.7033C42.9365 41.2352 43.028 40.902 43.42 40.666C43.734 40.4768 44.1941 40.4938 44.5054 40.8048C45.5127 41.8109 46.5204 42.8166 47.5215 43.8291C47.8557 44.1671 47.853 44.7244 47.519 45.0622C46.7185 45.872 45.9102 46.6736 45.1048 47.4787C44.9148 47.6687 44.7243 47.8585 44.5349 48.0492C44.0686 48.5186 43.3388 48.3976 43.0482 47.8023C42.8985 47.4957 42.9749 47.0651 43.2312 46.8063C43.6835 46.3496 44.1389 45.8959 44.5927 45.4408C44.6158 45.4176 44.6366 45.3924 44.6814 45.3431C44.6079 45.3395 44.5614 45.3354 44.5147 45.3354C42.7859 45.335 41.0572 45.3346 39.3284 45.3354C39.0662 45.3352 38.8292 45.2724 38.6296 45.0828Z"
                                    fill="currentColor" />
                                <path
                                    d="M51.2409 48.7797C51.1628 48.7228 51.0885 48.6688 51.0144 48.6149C51.0023 48.6302 50.9899 48.6453 50.9778 48.6603C51.08 48.7383 51.1823 48.8162 51.2844 48.8943C51.3012 48.8661 51.3373 48.8325 51.3312 48.8107C51.3078 48.7264 51.2708 48.6459 51.2343 48.5523C51.2872 48.5523 51.3269 48.5523 51.3764 48.5523C51.3779 48.6415 51.3753 48.7451 51.5046 48.7472C51.5758 48.7482 51.6586 48.6272 51.6501 48.5491C51.7698 48.5009 51.7647 48.6249 51.8344 48.6971C51.8427 48.6334 51.8477 48.5937 51.855 48.5376C52.0038 48.5376 52.155 48.5374 52.306 48.5376C52.513 48.5378 52.7202 48.5372 52.9272 48.5391C53.4629 48.5438 53.8086 48.976 53.8192 49.4219C53.8311 49.921 53.4268 50.3278 52.916 50.3316C52.282 50.3365 51.6479 50.3329 51.0141 50.3331C50.0251 50.3331 49.0361 50.3338 48.0471 50.3327C47.6345 50.3323 47.3419 50.1446 47.1746 49.7652C46.9962 49.3608 47.2035 48.8039 47.6116 48.6336C47.7475 48.5769 47.9035 48.5432 48.0507 48.5419C49.0437 48.534 50.037 48.5376 51.0303 48.5381C51.1721 48.5381 51.1938 48.564 51.2409 48.7797Z"
                                    fill="currentColor" />
                                <path
                                    d="M53.392 38.6464C53.3106 38.7358 53.2574 38.7944 53.1939 38.8644C53.1323 38.8103 53.0677 38.7536 52.9964 38.6912C52.966 38.7201 52.9399 38.7449 52.9053 38.7778C53.0174 38.8976 53.1263 39.0082 53.2287 39.1247C53.3234 39.2326 53.4081 39.3491 53.5032 39.4566C53.5236 39.4795 53.5697 39.4795 53.6041 39.4899C53.6085 39.4513 53.6311 39.3999 53.6143 39.3761C53.5391 39.2693 53.455 39.1682 53.3693 39.0695C53.3194 39.012 53.289 38.9615 53.3561 38.8965C53.4211 38.8332 53.4922 38.8218 53.5589 38.8823C53.7678 39.0716 53.8642 39.3071 53.8071 39.5876C53.7342 39.9453 53.5279 40.1958 53.1731 40.3058C53.0905 40.3315 52.9992 40.3387 52.9119 40.3387C51.2767 40.3406 49.6414 40.3374 48.0062 40.3419C47.564 40.3432 47.2183 40.0253 47.1389 39.6693C47.0336 39.1978 47.2618 38.7663 47.6916 38.6037C47.7916 38.5659 47.9065 38.5523 48.0145 38.5521C49.6497 38.5489 51.285 38.5472 52.9202 38.5538C53.0743 38.5547 53.2285 38.6131 53.392 38.6464Z"
                                    fill="currentColor" />
                                <path
                                    d="M51.3991 43.6785C50.9048 43.6787 50.4103 43.6793 49.916 43.6785C49.4737 43.6776 49.1157 43.3991 49.015 42.9793C48.9172 42.5708 49.1127 42.1524 49.5106 41.963C49.6325 41.905 49.7786 41.873 49.9138 41.8719C50.9067 41.8645 51.8997 41.8651 52.8928 41.8692C53.4166 41.8713 53.8287 42.2912 53.82 42.8006C53.8122 43.2602 53.4058 43.6729 52.9457 43.6774C52.4301 43.6825 51.9144 43.6785 51.3991 43.6785Z"
                                    fill="currentColor" />
                                <path
                                    d="M40.7602 45.3347C40.2659 45.3349 39.7713 45.3356 39.277 45.3347C38.8348 45.3339 38.4768 45.0553 38.3761 44.6356C38.2782 44.2271 38.4738 43.8086 38.8717 43.6193C38.9936 43.5613 39.1397 43.5292 39.2749 43.5282C40.2678 43.5207 41.2608 43.5214 42.2539 43.5254C42.7777 43.5275 43.1898 43.9475 43.1811 44.4568C43.1733 44.9165 42.7669 45.3292 42.3068 45.3336C41.7912 45.3385 41.2757 45.3347 40.7602 45.3347Z"
                                    fill="currentColor" />
                                <path
                                    d="M51.3991 40.3398C50.9048 40.34 50.4103 40.3407 49.916 40.3398C49.4737 40.339 49.1157 40.0604 49.015 39.6407C48.9172 39.2322 49.1127 38.8138 49.5106 38.6244C49.6325 38.5664 49.7786 38.5344 49.9138 38.5333C50.9067 38.5259 51.8997 38.5265 52.8928 38.5305C53.4166 38.5327 53.8287 38.9526 53.82 39.4619C53.8122 39.9216 53.4058 40.3343 52.9457 40.3388C52.4301 40.3437 51.9144 40.3396 51.3991 40.3398Z"
                                    fill="currentColor" />
                                <path
                                    d="M51.3991 50.3411C50.9048 50.3413 50.4103 50.3419 49.916 50.3411C49.4737 50.3402 49.1157 50.0617 49.015 49.6419C48.9172 49.2334 49.1127 48.815 49.5106 48.6256C49.6325 48.5676 49.7786 48.5356 49.9138 48.5345C50.9067 48.5271 51.8997 48.5277 52.8928 48.5318C53.4166 48.5339 53.8287 48.9538 53.82 49.4632C53.8122 49.9228 53.4058 50.3355 52.9457 50.34C52.4301 50.3451 51.9144 50.3411 51.3991 50.3411Z"
                                    fill="currentColor" />
                                <path
                                    d="M51.4093 45.2061C51.9118 45.2063 52.4144 45.2039 52.9168 45.2069C53.4287 45.2097 53.8343 45.6322 53.8198 46.1421C53.8084 46.5525 53.4854 46.9179 53.069 46.9882C52.9987 47.0001 52.9261 47.0043 52.8548 47.0045C51.8834 47.0056 50.9122 47.0056 49.9408 47.0051C49.542 47.0049 49.2469 46.8355 49.0679 46.4725C48.8549 46.0402 49.0902 45.4392 49.5463 45.2801C49.6707 45.2366 49.8077 45.2114 49.9395 45.2092C50.4294 45.2012 50.9192 45.2061 51.4093 45.2061Z"
                                    fill="currentColor" />
                            </svg>
                            <div class="relative materiais">
                                <h3 class="relative z-20 text-white font-bold text-center mt-3">Edital verticalizado
                                </h3>
                                <p class="text-base-white mt-6 px-2 lg:min-h-[140px]">Neste material você vai poder
                                    fazer
                                    um
                                    acompanhamento
                                    dos conteúdos do concurso para que nenhum fique para trás.</p>
                                <div class="relative">
                                    <ul class="w-full mt-6">
                                        <li class="rounded hover:bg-white/[.05]" v-for="edital in materiais.editais">
                                            <a class="p-3 flex justify-between text-base-white hover:text-white"
                                                :href="'https://d1lpyqedjaq3m8.cloudfront.net/' + edital.path"
                                                target="_blank" rel="noopener noreferer" :title="'Download '">
                                                <p>{{ edital.cargo }}</p>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path
                                                        d="M5.03402 9.83154C4.08823 10.0695 3.2619 10.6447 2.71028 11.449C2.15865 12.2533 1.9197 13.2313 2.03833 14.1993C2.15695 15.1674 2.62499 16.0588 3.35449 16.706C4.08399 17.3533 5.02475 17.712 6.00002 17.7145H7.00002M12 22.7145V13.7145V22.7145ZM12 22.7145L9.50002 20.7145L12 22.7145ZM12 22.7145L14.5 20.7145L12 22.7145Z"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M15.83 7.85256C15.4882 6.49913 14.6446 5.3263 13.4702 4.57182C12.2957 3.81734 10.8783 3.53765 9.50529 3.78947C8.13228 4.04128 6.90638 4.80575 6.0761 5.9279C5.24582 7.05005 4.8733 8.44593 5.03404 9.83256C5.03404 9.83256 5.18704 10.7146 5.50004 11.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M17 17.7146C17.706 17.7141 18.404 17.5641 19.0479 17.2745C19.6917 16.9848 20.267 16.5621 20.7357 16.0341C21.2045 15.5061 21.5561 14.8848 21.7674 14.2111C21.9787 13.5375 22.045 12.8267 21.9618 12.1255C21.8786 11.4244 21.6479 10.7489 21.2848 10.1433C20.9217 9.53781 20.4345 9.01605 19.8552 8.61238C19.276 8.20872 18.6178 7.93232 17.924 7.80136C17.2302 7.6704 16.5166 7.68787 15.83 7.8526L14.5 8.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="group max-w-sm mb-12 p-3 flex flex-col items-center mb:mb-0"
                            v-if="materiais.checklist.length">
                            <svg class="-top-10 text-white/[.15] group-hover:text-white transition duration-500 md:absolute"
                                width="60" height="71" viewBox="0 0 60 71" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_37_444)">
                                    <path
                                        d="M31.782 49.4568C31.782 50.1705 31.8311 50.8723 31.9252 51.5587H20.078C19.5243 51.5587 19.0755 51.0881 19.0755 50.5078C19.0755 49.9274 19.5245 49.457 20.078 49.457H31.782V49.4568ZM19.0755 60.6227C19.0755 61.2032 19.5245 61.6736 20.078 61.6736H38.0663C37.1902 61.0686 36.3831 60.3625 35.6598 59.5717H20.0783C19.5243 59.5719 19.0755 60.0423 19.0755 60.6227ZM38.5546 19.1119H20.078C19.5243 19.1119 19.0755 19.5825 19.0755 20.1627C19.0755 20.7432 19.5245 21.2136 20.078 21.2136H38.5546C39.1083 21.2136 39.5571 20.743 39.5571 20.1627C39.5571 19.5825 39.1081 19.1119 38.5546 19.1119ZM35.6596 39.3419H20.078C19.5243 39.3419 19.0755 39.8125 19.0755 40.3927C19.0755 40.973 19.5245 41.4436 20.078 41.4436H34.062C34.5329 40.6919 35.0682 39.9885 35.6596 39.3419ZM42.5707 11.3516C42.6576 11.3516 42.7424 11.3608 42.8244 11.3785C42.8653 11.3873 42.9056 11.3983 42.945 11.411C42.9648 11.4175 42.9843 11.4244 43.0036 11.4319C43.4474 11.6025 43.775 12.0279 43.8245 12.5379C43.8265 12.5601 43.8282 12.5825 43.8294 12.6049C43.8304 12.6273 43.8311 12.6499 43.8311 12.6727V34.9724C44.4516 34.8838 45.0849 34.838 45.7287 34.838C46.1707 34.838 46.6079 34.8597 47.0394 34.9019V12.6727C47.0394 12.5553 47.0353 12.4388 47.0273 12.3229C47.0193 12.2071 47.0072 12.0923 46.9909 11.9783C46.8598 11.0476 46.4653 10.185 45.8464 9.48719C45.8086 9.44454 45.77 9.40211 45.7305 9.36076C44.9655 8.55888 43.9722 8.08374 42.9044 8.00168C42.7938 7.99328 42.6826 7.98897 42.5707 7.98897H39.0074H38.1161V11.352H38.9889H42.5707V11.3516ZM39.5571 30.2778C39.5571 29.6974 39.1081 29.227 38.5546 29.227H20.078C19.5243 29.227 19.0755 29.6976 19.0755 30.2778C19.0755 30.8583 19.5245 31.3287 20.078 31.3287H38.5546C39.1081 31.3287 39.5571 30.8583 39.5571 30.2778ZM16.3901 27.0408C15.9502 26.6882 15.321 26.7763 14.9846 27.2375L12.1172 31.1697L9.83552 29.1712C9.41058 28.799 8.77832 28.8582 8.42326 29.3036C8.06819 29.7491 8.1249 30.4118 8.54963 30.784L11.6347 33.4864C11.8159 33.6452 12.0438 33.7309 12.2776 33.7309C12.3146 33.7309 12.3516 33.7287 12.3888 33.7244C12.6607 33.6928 12.9083 33.5459 13.0743 33.3182L16.5777 28.514C16.9141 28.0527 16.83 27.3932 16.3901 27.0408ZM43.8311 63.9414V66C43.8311 66.0228 43.8304 66.0455 43.8294 66.0679C43.8284 66.0903 43.8268 66.1127 43.8245 66.1348C43.775 66.6449 43.4472 67.0703 43.0036 67.2409C42.9843 67.2482 42.9648 67.2553 42.945 67.2617C42.9056 67.2747 42.8653 67.2854 42.8244 67.2943C42.7424 67.3119 42.6576 67.3212 42.5707 67.3212H38.9889H9.44243H6.62038C6.53346 67.3212 6.4486 67.3119 6.36661 67.2943C6.32572 67.2854 6.28545 67.2744 6.24599 67.2617C6.22627 67.2553 6.20675 67.2484 6.18743 67.2409C5.7436 67.0703 5.41606 66.6451 5.36654 66.1348C5.36449 66.1127 5.36284 66.0903 5.36161 66.0679C5.36058 66.0455 5.35997 66.0226 5.35997 66V12.6727C5.35997 12.6499 5.36058 12.6273 5.36161 12.6049C5.36264 12.5825 5.36428 12.5601 5.36654 12.5379C5.41606 12.0279 5.7438 11.6025 6.18743 11.4319C6.20675 11.4246 6.22627 11.4175 6.24599 11.411C6.28545 11.3981 6.32572 11.3873 6.36661 11.3785C6.4486 11.3608 6.53346 11.3516 6.62038 11.3516H9.44243H11.0748V7.98854H9.43709H6.62038C6.50839 7.98854 6.39723 7.99285 6.28668 8.00125C5.51326 8.0607 4.77908 8.32626 4.1425 8.77276C4.08189 8.81519 4.02209 8.85934 3.96332 8.90522C3.78682 9.04263 3.61873 9.19448 3.46052 9.36033C2.77483 10.0791 2.33921 10.9906 2.2001 11.9781C2.18408 12.092 2.17195 12.2071 2.16373 12.3227C2.15572 12.4386 2.15161 12.5551 2.15161 12.6725V65.9996C2.15161 66.117 2.15572 66.2335 2.16373 66.3494C2.17175 66.4653 2.18387 66.5801 2.2001 66.694C2.33921 67.6815 2.77463 68.5928 3.46052 69.3118C3.61873 69.4776 3.78682 69.6295 3.96332 69.7669C3.99271 69.7897 4.0223 69.8123 4.0523 69.8343C4.70942 70.32 5.47668 70.6086 6.28689 70.6708C6.39743 70.6792 6.5086 70.6836 6.62058 70.6836H9.4373H39.0076H42.5709C42.6828 70.6836 42.794 70.6792 42.9046 70.6708C43.9724 70.5888 44.9659 70.1134 45.7307 69.3118C45.7704 69.2702 45.8088 69.228 45.8466 69.1853C46.4655 68.4875 46.86 67.6247 46.9911 66.6942C47.0072 66.5803 47.0193 66.4653 47.0275 66.3496C47.0355 66.2337 47.0396 66.1172 47.0396 65.9998V64.0116C46.6081 64.0538 46.1709 64.0756 45.7289 64.0756C45.0849 64.0758 44.4516 64.0299 43.8311 63.9414ZM12.2778 11.5107V7.60731C12.2778 6.48796 13.1435 5.58054 14.2114 5.58054H19.4384C19.8483 2.98279 22.0009 1.00146 24.5955 1.00146C27.1901 1.00146 29.3427 2.98279 29.7526 5.58054H34.9796C36.0475 5.58054 36.9132 6.48796 36.9132 7.60731V11.5107C36.9132 12.6301 36.0475 13.5375 34.9796 13.5375H14.2114C13.1435 13.5375 12.2778 12.6301 12.2778 11.5107ZM23.4138 4.79223C23.4138 5.4763 23.9429 6.03091 24.5955 6.03091C25.2481 6.03091 25.7772 5.4763 25.7772 4.79223C25.7772 4.10817 25.2481 3.55356 24.5955 3.55356C23.9429 3.55356 23.4138 4.10817 23.4138 4.79223ZM16.3901 37.1557C15.9502 36.8033 15.321 36.8914 14.9846 37.3524L12.1172 41.2846L9.83552 39.2861C9.41058 38.9139 8.77832 38.9731 8.42326 39.4185C8.06819 39.864 8.1249 40.5267 8.54963 40.8989L11.6347 43.6013C11.8159 43.7601 12.0438 43.8458 12.2776 43.8458C12.3146 43.8458 12.3516 43.8436 12.3888 43.8393C12.6607 43.8074 12.9083 43.6608 13.0743 43.4331L16.5777 38.6289C16.9141 38.1678 16.83 37.5083 16.3901 37.1557ZM8.42326 19.1888C8.06819 19.6342 8.1249 20.2969 8.54963 20.6691L11.6347 23.3715C11.8159 23.5303 12.0438 23.616 12.2776 23.616C12.3146 23.616 12.3516 23.6138 12.3888 23.6095C12.6607 23.5779 12.9083 23.431 13.0743 23.2033L16.5777 18.3992C16.9139 17.938 16.83 17.2785 16.3901 16.9259C15.9502 16.5736 15.321 16.6614 14.9846 17.1226L12.1172 21.0546L9.83552 19.0561C9.41058 18.6841 8.77832 18.7433 8.42326 19.1888ZM16.3901 47.2706C15.9502 46.9182 15.321 47.0063 14.9846 47.4672L12.1172 51.3995L9.83552 49.401C9.41058 49.0288 8.77832 49.088 8.42326 49.5334C8.06819 49.9788 8.1249 50.6416 8.54963 51.0138L11.6347 53.7162C11.8159 53.8749 12.0438 53.9607 12.2776 53.9607C12.3146 53.9607 12.3516 53.9585 12.3888 53.9542C12.6607 53.9223 12.9083 53.7757 13.0743 53.548L16.5777 48.7438C16.9141 48.2827 16.83 47.6232 16.3901 47.2706ZM16.3901 57.3855C15.9502 57.0331 15.321 57.1212 14.9846 57.5821L12.1172 61.5146L9.83552 59.5161C9.41058 59.1439 8.77832 59.2031 8.42326 59.6485C8.06819 60.094 8.1249 60.7567 8.54963 61.1289L11.6347 63.8313C11.8159 63.99 12.0438 64.0758 12.2776 64.0758C12.3146 64.0758 12.3516 64.0736 12.3888 64.0693C12.6607 64.0374 12.9083 63.8908 13.0743 63.6631L16.5777 58.8589C16.9141 58.3976 16.83 57.7381 16.3901 57.3855Z"
                                        fill="currentColor" />
                                    <path
                                        d="M52.0737 44.2478C51.3484 43.6667 50.3109 43.8118 49.7565 44.5722L45.0286 51.0554L41.2667 47.7603C40.5662 47.1466 39.5236 47.2444 38.9382 47.9789C38.3528 48.7131 38.4461 49.806 39.1468 50.4196L44.2334 54.8753C44.5322 55.137 44.9078 55.2785 45.2933 55.2785C45.3541 55.2785 45.4153 55.275 45.4766 55.2679C45.9247 55.2156 46.333 54.9735 46.6067 54.5981L52.3829 46.6769C52.9375 45.9164 52.799 44.8289 52.0737 44.2478Z"
                                        fill="currentColor" />
                                    <path
                                        d="M45.6446 62.238C38.9294 62.238 33.4661 56.5114 33.4661 49.4724C33.4661 42.4332 38.9294 36.7065 45.6446 36.7065C52.3601 36.7065 57.8234 42.4332 57.8234 49.4724C57.8234 56.5114 52.3601 62.238 45.6446 62.238ZM45.6446 39.076C40.1758 39.076 35.7263 43.7397 35.7263 49.4726C35.7263 55.2051 40.1756 59.869 45.6446 59.869C51.1137 59.869 55.5631 55.2053 55.5631 49.4726C55.5631 43.7397 51.1137 39.076 45.6446 39.076Z"
                                        fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_444">
                                        <rect width="60" height="70" fill="currentColor"
                                            transform="translate(0 0.7146)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="relative materiais">
                                <h3 class="relative z-20 text-white font-bold text-center mt-3">Checklist de estudos
                                </h3>
                                <p class="text-base-white mt-6 px-2 lg:min-h-[140px]">Neste material você vai encontrar
                                    um
                                    checklist para
                                    que você faça um acompanhamento dos estudos, marcando o que já foi estudado e
                                    revisado.</p>
                                <div class="relative">
                                    <ul class="w-full mt-6">
                                        <li class="rounded hover:bg-white/[.05]"
                                            v-for="checklist in materiais.checklist">
                                            <a class="p-3 flex justify-between text-base-white hover:text-white"
                                                :href="'https://d1lpyqedjaq3m8.cloudfront.net/' + checklist.path"
                                                target="_blank" rel="noopener noreferer" :title="'Download '">
                                                <p>{{ checklist.cargo }}</p>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path
                                                        d="M5.03402 9.83154C4.08823 10.0695 3.2619 10.6447 2.71028 11.449C2.15865 12.2533 1.9197 13.2313 2.03833 14.1993C2.15695 15.1674 2.62499 16.0588 3.35449 16.706C4.08399 17.3533 5.02475 17.712 6.00002 17.7145H7.00002M12 22.7145V13.7145V22.7145ZM12 22.7145L9.50002 20.7145L12 22.7145ZM12 22.7145L14.5 20.7145L12 22.7145Z"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M15.83 7.85256C15.4882 6.49913 14.6446 5.3263 13.4702 4.57182C12.2957 3.81734 10.8783 3.53765 9.50529 3.78947C8.13228 4.04128 6.90638 4.80575 6.0761 5.9279C5.24582 7.05005 4.8733 8.44593 5.03404 9.83256C5.03404 9.83256 5.18704 10.7146 5.50004 11.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M17 17.7146C17.706 17.7141 18.404 17.5641 19.0479 17.2745C19.6917 16.9848 20.267 16.5621 20.7357 16.0341C21.2045 15.5061 21.5561 14.8848 21.7674 14.2111C21.9787 13.5375 22.045 12.8267 21.9618 12.1255C21.8786 11.4244 21.6479 10.7489 21.2848 10.1433C20.9217 9.53781 20.4345 9.01605 19.8552 8.61238C19.276 8.20872 18.6178 7.93232 17.924 7.80136C17.2302 7.6704 16.5166 7.68787 15.83 7.8526L14.5 8.2146"
                                                        stroke="white" stroke-opacity="0.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Sequência -->
        <section class="bg-white py-24">
            <div class="sequencia container">
                <h2 class="text-center mainTextColor mb-12">Videoaula com o que realmente cai
                    na prova</h2>
                <ul class="flex justify-center">
                    <li class="p-6">
                        <img class="pointer-events-none" :src="require('~/assets/images/sequencia-1.svg')"
                            alt="Homem analisando prova">
                        <p class="mainTextColor font-bold mt-3">Estude somente o que a banca cobra:</p>
                        <p class="mt-3">Analisamos as provas anteriores e organizamos o curso de acordo com o que é mais
                            cobrado pela
                            banca organizadora</p>
                    </li>
                    <li class="p-6">
                        <img class="pointer-events-none" :src="require('~/assets/images/sequencia-2.svg')"
                            alt="Mulher analisando prova">
                        <p class="mainTextColor font-bold mt-3">Na ordem que mais cai:</p>
                        <p class="mt-3">Em cada disciplina as videoaulas estão ordenadas do assunto que mais é cobrado
                            para o que menos é cobrado na prova</p>
                    </li>
                    <li class="p-6">
                        <img class="pointer-events-none" :src="require('~/assets/images/sequencia-3.svg')"
                            alt="Homem realizando tarefas">
                        <p class="mainTextColor font-bold mt-3">Tenha a melhor preparação:</p>
                        <p class="mt-3">Otimizamos seu tempo de estudo e você tem mais chances de ser aprovado</p>
                    </li>
                </ul>
            </div>
        </section>
        <!-- Vídeo -->
        <!-- <section class="pt-24" v-if="projects[slug].iniciais != 'cursos-por-area-de-interesse'">
            <div class="container flex justify-center items-center">
                <iframe width="560" height="315" :src="projects[slug].assets.videoUrl" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </section> -->
        <!-- FAQ -->
        <section class="py-24">
            <div class="container flex flex-col justify-center items-center">
                <h2 class="mainTextColor text-center">Dúvidas frequentes</h2>
                <div class="flex justify-center mt-12 w-full">
                    <ul class="w-full max-w-3xl">
                        <li class="bg-white w-full rouded p-3 mb-3 cursor-pointer" v-for="(faq, index) in faqs"
                            :key="index" @click="faqAccordion(index)">
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
        <!-- Questões e Assinatura -->
        <section v-if="projects[slug].iniciais != 'assinatura'" class="bg-white py-24">
            <div class="container">
                <h2 class="mainTextColor text-center mb-12">Conheça também</h2>
                <div class="flex flex-col items-center justify-center md:flex-row md:items-start">
                    <div class="flex flex-1 justify-center items-center max-w-sm mb-6 md:m-6">
                        <div class="flex flex-col items-center justify-center bg-[#182B3E] rounded-md p-6">
                            <img class="mb-6 max-w-[16rem]" :src="require('~/assets/images/logo-questoes.svg')"
                                alt="Logotipo aprova questões">
                            <h3 class="text-white font-bold mb-6">Milhares de questões atuais do Exame de Ordem. E o
                                melhor:
                                <span class="text-lemon-green">SEM
                                    LIMITE!</span>
                            </h3>
                            <p class="text-base-white mb-6">Nosso banco de questões é atualizado diariamente com provas,
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
                                alt="Logotipo aprova questões">
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
                                    <p class="text-base-white pl-7">Milhares de preparatórios para concursos federais,
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
        <!-- Footer -->
        <footer class="darkBgColor py-24">
            <div class="container">
                <div class="w-full mb-12">
                    <ul class="flex justify-center items-center">
                        <li class="mx-2 opacity-60 hover:opacity-100">
                            <a :href="urls.blog" target="_blank" rel="noopener noreferer">
                                <img class="pointer-events-none" src="~/assets/icons/blog.svg" alt="Ícone do blog">
                            </a>
                        </li>
                        <li class="mx-2 opacity-60 hover:opacity-100">
                            <a :href="urls.facebook" target="_blank" rel="noopener noreferer">
                                <img class="pointer-events-none" src="~/assets/icons/facebook.svg" alt="Ícone do blog">
                            </a>
                        </li>
                        <li class="mx-2 opacity-60 hover:opacity-100">
                            <a :href="urls.instagram" target="_blank" rel="noopener noreferer">
                                <img class="pointer-events-none" src="~/assets/icons/instagram.svg" alt="Ícone do blog">
                            </a>
                        </li>
                        <li class="mx-2 opacity-60 hover:opacity-100">
                            <a :href="urls.twitter" target="_blank" rel="noopener noreferer">
                                <img class="pointer-events-none" src="~/assets/icons/twitter.svg" alt="Ícone do blog">
                            </a>
                        </li>
                        <li class="mx-2 opacity-60 hover:opacity-100">
                            <a :href="urls.youtube" target="_blank" rel="noopener noreferer">
                                <img class="pointer-events-none" src="~/assets/icons/youtube.svg" alt="Ícone do blog">
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
                    <div
                        class="footer-item flex justify-between flex-row text-sm text-base-white mb-12 sm:justify-center">
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
                    <div class="footer-item flex justify-center">
                        <a :href="urls.aprovaConcursos" target="_blank" rel="noopener noreferer">
                            <img class="max-w-[130px] pointer-events-none"
                                :src="require('~/assets/images/logo-aprova.svg')" alt="Logotipo aprova concursos">
                        </a>
                    </div>
                </div>
                <div class="text-base-white text-center text-sm">
                    <p class="mb-3">Al. Dr. Carlos de Carvalho, 1482 Batel - CEP 80730-200 Curitiba - PR</p>
                    <p>Estúdios em São Paulo, Belo Horizonte, Curitiba - Alunos em todos os estados do Brasil.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

import { mask } from 'vue-the-mask';

export default {
    name: "projectsPage",

    directives: {
        mask
    },

    head() {
        return {
            title: this.projects[this.slug].head.title,
            bodyAttrs: {
                class: this.active == true ? "active overflow-hidden" : ""
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: this.projects[this.slug].head.favicon
                },
                {
                    rel: 'canonical',
                    href: `https://www.aprovaconcursos.com.br/${this.projects[this.slug].canonical}`
                }
            ],
            meta: [
                {
                    name: 'theme-color',
                    content: this.projects[this.slug].iniciais == 'certificacoes-projetos' || this.projects[this.slug].iniciais == 'certificacoes-financeiras' || this.projects[this.slug].iniciais == 'certificacoes-ti' || this.projects[this.slug].iniciais == 'cursos-por-area-de-interesse' ? '#181A1D' : '#FFFFFF'
                }
            ]
        };
    },

    data() {
        return {
            active: false,
            activeTestimonials: false,
            modalActive: false,
            urls: {
                ava: "https://ava.aprovaconcursos.com.br",
                aprovaConcursos: "https://www.aprovaconcursos.com.br/",
                aprovaQuestoes: "https://www.aprovaconcursos.com.br/questoes-de-concurso/",
                assinaturaCompleta: "https://www.aprovaconcursos.com.br/assinaturas/",
                quemSomos: "https://www.aprovaconcursos.com.br/quem-somos",
                comoComprar: "https://www.aprovaconcursos.com.br/como-comprar",
                faleConosco: "https://www.aprovaconcursos.com.br/fale-conosco",
                politicaDePrivacidade: "https://www.aprovaconcursos.com.br/politica-de-privacidade",
                politicaDeCancelamento: "https://www.aprovaconcursos.com.br/politica-de-cancelamento",
                faq: "https://www.aprovaconcursos.com.br/perguntas-frequentes",
                trabalheConosco: "https://www.aprovaconcursos.com.br/trabalhe-conosco",
                blog: "https://www.aprovaconcursos.com.br/noticias/",
                facebook: "https://www.facebook.com/aprovaconcursos",
                instagram: "https://www.instagram.com/aprovaconcursos/",
                twitter: "https://twitter.com/AprovaConcursos",
                youtube: "https://www.youtube.com/user/aprovaconcursosiesde",
                whatsapp: "https://api.whatsapp.com/send?phone=554121068482&text=Oi"
            },
            materiais: {
                temas: [],
                editais: [],
                checklist: []
            },
            telefone: "0800 727 6282",
            celularClickToCall: ""
        };
    },

    async asyncData({ params, $axios }) {
        const editais = [];
        const { slug } = params;
        const projects = await $axios.$get(`https://d1cqjkd0k5bd3q.cloudfront.net/upload/projects-nuxt/projects_config.json`);

        await $axios.$get(`https://api-concurso.iesde.com.br/cms/instituicao/${projects[slug].id}/editais`)
            .then(response => {
                if (response.data) {
                    response.data.forEach(element => {
                        editais.push(element);
                    })
                }
            });

        editais.forEach(element => {
            $axios.$get(`https://api-concurso.iesde.com.br/cms/edital/${element.id}/pacotes`)
                .then(response => {
                    if (response.data.length) {
                        let preparatorios = [];

                        if (preparatorios.length) {
                            preparatorios = response.data.sort((a, b) => a.attributes.cargo.localeCompare(b.attributes.cargo));
                        } else {
                            preparatorios = preparatorios.concat(response.data);
                        }
                    }
                });
        });

        const logoImg = projects[slug].assets.logoPath;

        // Dinamic colors
        let mainColor = `rgba(${projects[slug].theme.mainColor})`;
        let mainColorHover = `rgba(${projects[slug].theme.mainColorHover})`;
        let secondColor = `rgba(${projects[slug].theme.secondColor})`;
        let secondColorHover = `rgba(${projects[slug].theme.secondColorHover})`;
        let darkBgColor = `rgba(${projects[slug].theme.darkBgColor})`;

        const testimonials = projects[slug].testimonials;
        const faqs = projects[slug].faq;

        return {
            logoImg,
            projects,
            editais,
            slug,
            mainColor,
            mainColorHover,
            secondColor,
            secondColorHover,
            darkBgColor,
            testimonials,
            faqs
        };
    },

    async fetch() {
        await this.editais.forEach(element => {
            this.$axios.$get(`https://api-concurso.iesde.com.br/cms/edital/${element.id}/pacotes`)
                .then(response => {
                    response.data.forEach(preparatorio => {
                        this.$axios.$get(`https://api-concurso.iesde.com.br/cms/preparatorio/${preparatorio.id}/arquivos`)
                            .then(response => {
                                const cargoNome = preparatorio.attributes.cargo;
                                const cargoSplit = cargoNome.split('-');
                                const cargo = cargoNome.replace('-' + cargoSplit.slice(-1)[0], '');;
                                const arquivos = response.data;

                                if (arquivos.length > 0) {
                                    arquivos.forEach(arquivo => {
                                        const titulo = arquivo.ds_titulo;
                                        const path = arquivo.ds_path;

                                        if (arquivo.ds_titulo.includes('Temas')) {
                                            this.materiais.temas.push({ tipo: 'temas', titulo, path, cargo });
                                        };
                                        if (arquivo.ds_titulo.includes('Edital')) {
                                            this.materiais.editais.push({ tipo: 'editais', titulo, path, cargo });
                                        };
                                        if (arquivo.ds_titulo.includes('Checklist')) {
                                            this.materiais.checklist.push({ tipo: 'checklist', titulo, path, cargo });
                                        };
                                    })
                                }
                            })
                    })
                })
        })
    },

    methods: {
        toggleMenu() {
            let windowSize = "(max-width: 1024px)";
            let windowElement = window.matchMedia(windowSize).matches;
            if (windowElement) {
                this.active = !this.active;
            }
            else {
                return;
            }
        },

        openClickToCall() {
            this.toggleMenu();
            this.modalActive = !this.modalActive;
        },

        updateClickToCallStatus(message, status, tel, show) {
            let divMessage = this.$el.querySelector('.callback-box .message');
            divMessage.innerHTML = message;

            let divPhone = this.$el.querySelector('.callback-box .phone');
            divPhone.innerHTML = 'Seu Número: ' + tel;

            let divStatus = this.$el.querySelector('.click-to-call');
            divStatus.classList.add(status);

            let divButton = this.$el.querySelector('.click-to-call .button');
            divButton.innerHTML = (status === 'error' ? 'Tentar novamente' : 'Enviar');

            let callBackBox = this.$el.querySelector('.callback-box');

            if (show) {
                callBackBox.setAttribute('style', 'display: block');
            } else {
                divStatus.classList.add(status);
                divStatus.classList.remove('running', 'error', 'success');
                callBackBox.setAttribute('style', 'display: none');
            }
        },

        sendNumber() {
            const ramal = 9904;

            // validar numero
            const inputNumber = this.celularClickToCall;
            // remover DDD 41
            const numToCall = inputNumber.replace('(41) ', '');
            // removendo caracteres
            const numeroInt = numToCall.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');

            let messageStatus = '';
            let continuar = true;

            if (inputNumber.length >= 14 && inputNumber.length <= 15) {
                // se tiver 11 digitos, considerar que seja celular e verifica o nono digito
                if (inputNumber.length === 15 && inputNumber[5] != '9') {
                    continuar = false;
                }
                if (continuar) {
                    messageStatus = 'Chamando um de nossos atendentes.'
                    this.updateClickToCallStatus(messageStatus, 'running', inputNumber, true);
                    const settings = {
                        "url": "https://iesde.cloudnexcore.com.br/ncall/api/v1/nexus/click2call",
                        "method": "POST",
                        "timeout": 0,
                        "data": JSON.stringify({
                            "tipoOrigem": "discagem",
                            "numeroOrigem": parseInt(numeroInt),
                            "numeroDestino": ramal
                        }),
                    };
                    this.http.post(settings.url, settings.data, httpOptions).subscribe((response) => {
                        if (!response.status) {
                            if (response.response.message === 'Nao Existe.') {
                                messageStatus = 'Não existe. Verifique seu número.';
                            };
                            if (response.response.message === 'Ocupado.') {
                                messageStatus = 'Ocupado. Tente novamente.';
                            };
                            this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                        } else {
                            messageStatus = 'Estamos te ligando!!!';
                            this.updateClickToCallStatus(messageStatus, 'success', inputNumber, true);
                        }
                        setTimeout(() => {
                            // ocultar popup
                            this.updateClickToCallStatus(messageStatus, 'success', inputNumber, false);
                        }, 7000);
                    })
                } else {
                    messageStatus = 'Número inválido. Verifique o 9º dígito.';
                    this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                    setTimeout(() => {
                        this.updateClickToCallStatus(messageStatus, 'error', inputNumber, false);
                    }, 3000);
                }
            } else {
                messageStatus = 'Número inválido, tente novamente.';
                this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                setTimeout(() => {
                    this.updateClickToCallStatus(messageStatus, 'error', inputNumber, false);
                }, 3000);
            };

            return false;
        },

        closeClickToCall() {
            this.modalActive = !this.modalActive;
        },

        faqAccordion(index) {
            let answer = this.$el.querySelectorAll('.answer');

            answer[index].classList.toggle('hidden');
        }
    }
}

</script>

<style lang="scss">
.line-1,
.line-2 {
    transition: .2s ease-in-out;
}

.line-1 {
    transition-property: top, transform;
    transition-delay: .1s, .0s;
}

.line-2 {
    transition-property: bottom, transform;
    transition-delay: .1s, 0s;
}

.line-1 {
    top: 0;
}

.line-2 {
    bottom: 0;
}

.active {
    .line-1 {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        transition-property: top, transform;
        transition-delay: 0s, .1s;
    }

    .line-2 {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
        transition-property: bottom, transform;
        transition-delay: 0s, .1s;
    }
}

.menuList {

    li {
        &:hover {
            color: var(--second-color);
        }
    }

    .subMenuList {

        li {
            &:hover {
                color: var(--second-color);
            }
        }
    }
}

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

.materiais {

    &::before {
        display: none;
        position: absolute;
        top: -28%;
        content: '';
        width: 100%;
        height: 115px;
        background-image: linear-gradient(0deg, var(--dark-bg-color), transparent);
        z-index: 10;

        @media screen and (min-width: 768px) {
            display: block;
        }
    }
}

.sequencia {
    ul {
        flex-wrap: wrap;

        li,
        &:before,
        &:after {
            flex: 1 100%;
            max-width: 400px;

            @media screen and (min-width: 768px) {
                flex-basis: 33.3%;
            }
        }

        &::before {
            order: 2
        }
    }
}

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

$circleSize: 80px;
$lgScreen: 1024px;

@media(min-width: $lgScreen) {
    $circleSize: 125px;
}

.study-lifecycle {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: $lgScreen) {
        max-width: 100%;
        margin: (-$circleSize * 0.082) 0;
    }

    .study-item-body {
        @media (min-width: $lgScreen) {
            max-width: calc(50% + ($circleSize / 2));
        }

        .study-item {
            display: flex;
            background-color: #ffffff;
            justify-content: space-between;
            align-items: center;
            max-height: $circleSize;

            .step-item {
                position: relative;
                width: $circleSize;
                height: $circleSize;

                .circle-before {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;

                    @media (min-width: $lgScreen) {
                        width: 50%;
                    }
                }

                .circle-after {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgb(255, 255, 255);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
                    width: 67%;
                    height: 67%;
                    border-radius: 1000px;
                    z-index: 1;
                }
            }
        }

        .svg-item {
            width: 30%;
        }

        .text-item {
            padding-left: 1rem;

            @media(min-width: $lgScreen) {
                max-width: 20rem;
                margin-left: 0;
                padding-left: 0;
            }

            flex: 1;
        }
    }

    &:nth-child(even) {
        .step-item {
            order: 0;

            @media (min-width: $lgScreen) {
                order: 1;
            }

            .circle-before {
                border-radius: 50%;

                @media (min-width: $lgScreen) {
                    border-radius: 1000px 0 0 1000px;
                }

                left: 0;
            }
        }
    }

    &:nth-child(odd) {
        .study-item-body {
            @media (min-width: $lgScreen) {
                margin-left: auto;
            }

            .circle-before {
                border-radius: 50%;
                right: 0;

                @media (min-width: $lgScreen) {
                    border-radius: 0 1000px 1000px 0;
                }
            }
        }
    }

    &:nth-child(2) {

        .circle-before {
            &::before {
                display: none;
            }

            @media (min-width: 1024px) {
                &::before {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: -30%;
                    content: '';
                    width: calc($circleSize * (0.082 * 2));
                    border-radius: 0 100px 100px 0;
                    height: 20px;
                    background-color: #503279;
                }
            }
        }
    }

    &:nth-child(2) {
        .circle-before {
            background: linear-gradient(180deg, #503279, #6B3279);
        }
    }

    &:nth-child(3) {
        .circle-before {
            background: linear-gradient(180deg, #6B3279, #963F98);
        }
    }

    &:nth-child(4) {
        .circle-before {
            background: linear-gradient(180deg, #963F98, #BC469B);
        }
    }

    &:nth-child(5) {
        .circle-before {
            background: linear-gradient(180deg, #BC469B, #DE55B8);
        }
    }

    &:nth-child(6) {
        .circle-before {
            background: linear-gradient(180deg, #DE55B8, #FF559C);
        }
    }

    &:nth-child(6) {

        .circle-before {

            &::before {
                display: none;
            }

            @media (min-width: 1024px) {
                &::before {
                    display: block;
                    position: absolute;
                    bottom: 0;
                    right: -30%;
                    content: '';
                    width: calc($circleSize * (0.082 * 2));
                    border-radius: 0 100px 100px 0;
                    height: 20px;
                    background-color: #FF559C;
                }
            }
        }
    }
}
</style>