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
                        class="button relative bottom-0 flex justify-center w-full p-3 rounded cursor-pointer opacity-100 transform duration-700 delay-100 lg:delay-0 lg:w-auto lg:h-auto lg:p-0 lg:duration-200"
                        :class="active ? 'translate-y-0' : '-translate-y-8 lg:opacity-300 lg:-translate-y-0'">
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
                    <a :href="`tel:${telefone.replaceAll(' ', '')}`" class="font-bold secondTextColor">{{ telefone
                    }}</a>
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
                                        <span href="#" class="flex p-3 w-full" @click="openClickToCall">
                                            <svg class="mr-3 fill-current" width="24" height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                                            </svg>
                                            <p>Clique aqui, te ligamos agora!</p>
                                        </span>
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
                        class="button relative bottom-0 flex justify-center w-full p-3 rounded cursor-pointer opacity-100 transform duration-700 delay-100 lg:delay-0 lg:w-auto lg:h-auto lg:p-0 lg:duration-200"
                        :class="active ? 'translate-y-0' : '-translate-y-8 lg:opacity-300 lg:-translate-y-0'">
                        <a :href="urls.ava"
                            class="flex items-center justify-center w-full h-full uppercase text-xl font-semibold text-white lg:text-sm lg:py-2 lg:px-6"
                            target="_blank" rel="noopener noreferer">login</a>
                    </button>
                </div>
            </nav>
        </header>
        <!-- Click to call -->
        <div v-if="clickToCallActive"
            class="fixed flex z-50 justify-center items-center w-full h-full bg-black/70 backdrop-blur-sm px-6">
            <div class="click-to-call relative w-full h-full rounded-lg bg-white overflow-hidden">
                <span class="cursor-pointer absolute top-0 right-0 z-20 w-10 h-10 p-1 flex justify-center items-center"
                    @click="closeClickToCall">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path
                            d="M55.0584 50L80.6932 19.4434C81.1228 18.9355 80.7615 18.1641 80.0975 18.1641H72.3045C71.8455 18.1641 71.4061 18.3691 71.1033 18.7207L49.9607 43.9258L28.8182 18.7207C28.5252 18.3691 28.0857 18.1641 27.617 18.1641H19.824C19.16 18.1641 18.7986 18.9355 19.2283 19.4434L44.8631 50L19.2283 80.5566C19.1321 80.6698 19.0703 80.8083 19.0504 80.9555C19.0305 81.1028 19.0532 81.2526 19.116 81.3873C19.1787 81.522 19.2787 81.6359 19.4042 81.7154C19.5298 81.7949 19.6754 81.8368 19.824 81.8359H27.617C28.076 81.8359 28.5154 81.6309 28.8182 81.2793L49.9607 56.0742L71.1033 81.2793C71.3963 81.6309 71.8357 81.8359 72.3045 81.8359H80.0975C80.7615 81.8359 81.1228 81.0645 80.6932 80.5566L55.0584 50Z"
                            fill="white" />
                    </svg>
                </span>
                <div
                    class="relative top-0 z-10 w-full h-36 flex items-center justify-center rounded-bl-3xl rounded-br-3xl mainBgColor">
                    <div class="w-20 h-20">
                        <svg v-if="clickToCallStatus == 'default'" class="w-full h-auto text-white" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path
                                d="M20.4873 17.1402L16.4223 13.4442C16.2301 13.2696 15.9776 13.1764 15.7181 13.1845C15.4585 13.1925 15.2123 13.3011 15.0313 13.4872L12.6383 15.9482C12.0623 15.8382 10.9043 15.4772 9.71228 14.2882C8.52028 13.0952 8.15928 11.9342 8.05228 11.3622L10.5113 8.96824C10.6977 8.78737 10.8064 8.54106 10.8144 8.28145C10.8225 8.02183 10.7292 7.76928 10.5543 7.57724L6.85928 3.51324C6.68432 3.3206 6.44116 3.20374 6.18143 3.1875C5.92171 3.17125 5.66588 3.2569 5.46828 3.42624L3.29828 5.28724C3.12539 5.46075 3.0222 5.69169 3.00828 5.93624C2.99328 6.18624 2.70728 12.1082 7.29928 16.7022C11.3053 20.7072 16.3233 21.0002 17.7053 21.0002C17.9073 21.0002 18.0313 20.9942 18.0643 20.9922C18.3088 20.9786 18.5396 20.8749 18.7123 20.7012L20.5723 18.5302C20.7423 18.3333 20.8286 18.0776 20.8127 17.8179C20.7968 17.5582 20.68 17.315 20.4873 17.1402V17.1402Z"
                                fill="currentColor" />
                        </svg>
                        <svg v-if="clickToCallStatus == 'running'" class="w-full h-auto text-white" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path d="M16.793 5.793L12.293 10.293L13.707 11.707L18.207 7.207L21 10V3H14L16.793 5.793Z"
                                fill="currentColor" />
                            <path
                                d="M16.422 13.446C16.2299 13.2714 15.9774 13.1782 15.7178 13.1862C15.4583 13.1943 15.212 13.3028 15.031 13.489L12.638 15.95C12.062 15.84 10.904 15.479 9.71204 14.29C8.52004 13.097 8.15904 11.936 8.05204 11.364L10.511 8.97C10.6975 8.78913 10.8062 8.54282 10.8142 8.28321C10.8222 8.02359 10.7289 7.77104 10.554 7.579L6.85904 3.516C6.68408 3.32336 6.44092 3.20651 6.18119 3.19026C5.92147 3.17402 5.66564 3.25966 5.46804 3.429L3.29904 5.29C3.12569 5.46289 3.0221 5.69358 3.00804 5.938C2.99304 6.188 2.70704 12.11 7.29904 16.704C11.305 20.71 16.323 21.003 17.705 21.003C17.907 21.003 18.031 20.997 18.064 20.995C18.3086 20.9813 18.5394 20.8777 18.712 20.704L20.572 18.533C20.7415 18.3355 20.8273 18.0798 20.8113 17.8201C20.7952 17.5603 20.6785 17.3171 20.486 17.142L16.422 13.446V13.446Z"
                                fill="currentColor" />
                        </svg>
                        <svg v-if="clickToCallStatus == 'success'" class="w-full h-auto text-white" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                                fill="currentColor" />
                            <path
                                d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2299 13.2683 15.9774 13.1752 15.7178 13.1832C15.4583 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71204 14.287C8.52004 13.094 8.15904 11.933 8.05204 11.361L10.511 8.96699C10.6975 8.78612 10.8062 8.53982 10.8142 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85904 3.51299C6.68408 3.32035 6.44092 3.2035 6.18119 3.18725C5.92146 3.17101 5.66564 3.25665 5.46804 3.42599L3.29804 5.28699C3.12515 5.46051 3.02196 5.69145 3.00804 5.93599C2.99304 6.18599 2.70704 12.108 7.29904 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3086 20.9783 18.5394 20.8747 18.712 20.701L20.572 18.53C20.7415 18.3325 20.8273 18.0768 20.8113 17.817C20.7952 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443V13.443Z"
                                fill="currentColor" />
                        </svg>
                        <svg v-if="clickToCallStatus == 'error'" class="w-full h-auto text-white" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M9.17004 13.42C8.71388 12.8092 8.39649 12.1061 8.24004 11.36L10.7 9C10.8803 8.81353 10.981 8.56434 10.981 8.305C10.981 8.04566 10.8803 7.79647 10.7 7.61L7.05004 3.51C6.87381 3.31572 6.62829 3.19845 6.36641 3.18349C6.10453 3.16853 5.84726 3.25706 5.65004 3.43L3.48004 5.29C3.30693 5.46377 3.20372 5.6951 3.19004 5.94C3.15444 9.56215 4.40934 13.0787 6.73004 15.86L2.29004 20.29L3.71004 21.71L21.71 3.71L20.29 2.29L9.17004 13.42ZM16.61 13.44C16.4172 13.2663 16.1643 13.1744 15.9049 13.1838C15.6455 13.1931 15.3999 13.3029 15.22 13.49L12.82 16C12.6472 15.9644 12.4768 15.9177 12.31 15.86L9.65004 18.47C12.1013 20.0775 14.9591 20.9549 17.89 21H18.25C18.4949 20.9863 18.7263 20.8831 18.9 20.71L20.76 18.54C20.9287 18.3421 21.0137 18.0863 20.9968 17.8268C20.98 17.5673 20.8628 17.3245 20.67 17.15L16.61 13.44Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div class="p-6">
                    <h2 class="mainTextColor">Está com alguma dúvida? Preencha abaixo seu telefone e
                        ligaremos pra você:</h2>
                    <form action="" class="mt-6" @submit.prevent="sendNumber" required>
                        <div class="w-full">
                            <input type="text" v-mask="['(##) ####-####', '(##) #####-####']"
                                v-model="celularClickToCall" placeholder="Preencha seu celular ou telefone"
                                class="w-full h-12 pl-4 border-b border-black/25 focus-visible:outline-none" required />
                        </div>
                        <div class="mt-6">
                            <label class="text-sm" for="privacidadeClick">
                                <input type="checkbox" name="privacidadeClick" id="privacidadeClick" v-model="termos"
                                    required>
                                Autorizo a coleta e tratamentos dos dados pessoais fornecidos, por mim titularizados,
                                que
                                servirão de base para o contato e comunicação com o Fale Conosco Aprova. O dado pessoal
                                disponibilizado não terá uso que exorbite a tentativa de
                                3
                                telefonemas. Central exclusiva para dúvidas referentes à matrícula. Se você já é aluno
                                ligue
                                para <a :href="`tel:${telefone.replaceAll(' ', '')}`" class="font-bold">{{ telefone
                                }}</a> -
                                Opção 2.
                            </label>
                        </div>
                        <div class="mt-6">
                            <button type="submit"
                                class="button buttonCtc w-full h-12 uppercase rounded text-white font-bold"
                                :class="termos ? 'opacity-100' : 'opacity-50 pointer-events-none'">enviar</button>
                        </div>
                    </form>
                    <div class="callbox absolute flex-col justify-center p-6 inset-0 bg-white callback-box no-transition"
                        style="display:none">
                        <span class="message">
                            <div class="flex flex-col">
                                <span>Número inválido</span>
                                <h2 class="mainTextColor mt-3">Verifique o 9º dígito</h2>
                            </div>
                        </span>
                        <span class="phone mt-12">
                            <div class="flex flex-col">
                                <span>Seu número</span>
                                <h2 class="mainTextColor mt-3">(41) 98401-2729</h2>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Homes personalizadas -->
        <LazyHydrate when-idle>
            <div>
                <HomeOab v-if="projects[slug].iniciais == 'oab'" :editais="editais"
                    :iniciais="projects[slug].iniciais" />
                <HomeCfc v-if="projects[slug].iniciais == 'cfc'" />
                <HomeEnem v-if="projects[slug].iniciais == 'enem'" />
                <HomeEncceja v-if="projects[slug].iniciais == 'encceja'" />
                <HomeAssinatura v-if="projects[slug].iniciais == 'assinatura'" />
                <HomeCertificacoesFinanceiras v-if="projects[slug].iniciais == 'certificacoes-financeiras'"
                    :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
                <HomeCertificacoesTi v-if="projects[slug].iniciais == 'certificacoes-ti'"
                    :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
                <HomeCertificacoesProjetos v-if="projects[slug].iniciais == 'certificacoes-projetos'"
                    :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
                <HomePrimeiroConcurso v-if="projects[slug].iniciais == 'cursos-por-area-de-interesse'"
                    :idInstituicao="projects[slug].id" :editais="editais" :iniciais="projects[slug].iniciais" />
            </div>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <div>
                <Packages v-if="
                projects[slug].iniciais != 'assinatura' &&
                projects[slug].iniciais != 'certificacoes-financeiras' &&
                projects[slug].iniciais != 'cursos-por-area-de-interesse' &&
                projects[slug].iniciais != 'certificacoes-ti' &&
                projects[slug].iniciais != 'certificacoes-projetos'" :idInstituicao="projects[slug].id" :slug="slug"
                    :editais="editais" :iniciais="projects[slug].iniciais" id="cursos" />
                <ConteudosAssinatura v-if="projects[slug].iniciais == 'assinatura'" />
                <Questoes v-if="projects[slug].iniciais == 'assinatura'" :linkAprovaQuestoes="urls.aprovaQuestoes" />
                <CicloDeVida v-if="projects[slug].iniciais == 'assinatura'" />
                <Depoimentos :testimonials="testimonials" />
                <MateriaisGratuitos v-if="
                projects[slug].iniciais != 'assinatura' &&
                projects[slug].iniciais != 'encceja' &&
                projects[slug].iniciais != 'certificacoes-financeiras' &&
                projects[slug].iniciais != 'certificacoes-ti' &&
                projects[slug].iniciais != 'certificacoes-projetos' &&
                projects[slug].iniciais != 'cursos-por-area-de-interesse'" :materiais="materiais" />
                <Sequencia />
                <Faq :faqs="faqs" />
                <QuestoesAssinaturas v-if="projects[slug].iniciais != 'assinatura'" :urls="urls" />
                <Footer :urls="urls" />
            </div>
        </LazyHydrate>
        <!-- Vídeo -->
        <!-- <section class="pt-24" v-if="projects[slug].iniciais != 'cursos-por-area-de-interesse'">
                <div class="container flex justify-center items-center">
                    <iframe width="560" height="315" :src="projects[slug].assets.videoUrl" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </section> -->
    </div>
</template>

<script>

import { mask } from 'vue-the-mask';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: "projectsPage",

    directives: {
        mask
    },

    components: {
        LazyHydrate,
        HomeOab: () => import('@/components/HomeOab.vue'),
        HomeCfc: () => import('@/components/HomeCfc.vue'),
        HomeEnem: () => import('@/components/HomeEnem.vue'),
        HomeEncceja: () => import('@/components/HomeEncceja.vue'),
        HomeAssinatura: () => import('@/components/HomeAssinatura.vue'),
        HomeCertificacoesFinanceiras: () => import('@/components/HomeCertificacoesFinanceiras.vue'),
        HomeCertificacoesTi: () => import('@/components/HomeCertificacoesTi.vue'),
        HomeCertificacoesProjetos: () => import('@/components/HomeCertificacoesProjetos.vue'),
        HomePrimeiroConcurso: () => import('@/components/HomePrimeiroConcurso.vue'),
        Packages: () => import('@/components/Packages.vue'),
        ConteudosAssinatura: () => import('@/components/ConteudosAssinatura.vue'),
        Questoes: () => import('@/components/Questoes.vue'),
        CicloDeVida: () => import('@/components/CicloDeVida.vue'),
        Depoimentos: () => import('@/components/Depoimentos.vue'),
        MateriaisGratuitos: () => import('@/components/MateriaisGratuitos.vue'),
        Sequencia: () => import('@/components/Sequencia.vue'),
        Faq: () => import('@/components/Faq.vue'),
        QuestoesAssinaturas: () => import('@/components/QuestoesAssinaturas.vue'),
        Footer: () => import('@/components/Footer.vue'),
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
            clickToCallActive: false,
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
            celularClickToCall: '',
            clickToCallStatus: 'default',
            termos: false
        };
    },

    async asyncData({ params, $axios }) {
        const apiURL = 'https://api-concurso.iesde.com.br/cms';
        const editais = [];
        const { slug } = params;
        const projects = await $axios.$get(`https://d1cqjkd0k5bd3q.cloudfront.net/upload/projects-nuxt/projects_config.json`);

        await $axios.$get(`${apiURL}/instituicao/${projects[slug].id}/editais`)
            .then(response => {
                if (response.data) {
                    response.data.forEach(element => {
                        editais.push(element);
                    })
                }
            });

        editais.forEach(element => {
            $axios.$get(`${apiURL}/edital/${element.id}/pacotes`)
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
            this.clickToCallActive = !this.clickToCallActive;
        },

        closeClickToCall() {
            this.clickToCallActive = !this.clickToCallActive;
        },

        updateClickToCallStatus(message, status, tel, show) {
            let divMessage = this.$el.querySelector('.callback-box .message');
            divMessage.innerHTML = message;

            let divPhone = this.$el.querySelector('.callback-box .phone');
            divPhone.innerHTML = `
                <div class="flex flex-col">
                    <span>Seu número</span>
                    <h2 class="mainTextColor mt-3">${tel}</h2>
                </div>`

            let divStatus = this.$el.querySelector('.click-to-call');
            divStatus.classList.add(status);

            let divButton = this.$el.querySelector('.click-to-call .buttonCtc');
            divButton.innerHTML = (status === 'error' ? 'Tentar novamente' : 'Enviar');

            let callBackBox = this.$el.querySelector('.callback-box');

            if (show) {
                callBackBox.setAttribute('style', 'display: flex');
                if (status == 'success') {
                    this.clickToCallStatus = 'success';
                } else {
                    this.clickToCallStatus = 'error';
                }
            } else {
                divStatus.classList.add(status);
                divStatus.classList.remove('running', 'error', 'success');
                callBackBox.setAttribute('style', 'display: none');
                this.clickToCallStatus = 'default';
            }
        },

        sendNumber() {
            let httpOptions = {
                headers: {
                    'Token': 'fefe48337b4cb0285f2678c71fb982b6',
                    'Content-Type': 'application/json'
                }
            }
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
                    messageStatus = '<h2 class="mainTextColor">Chamando um de nossos atendentes.</h2>'
                    this.updateClickToCallStatus(messageStatus, 'running', inputNumber, true);
                    this.clickToCallStatus = 'running';
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
                    this.$axios.$post(settings.url, settings.data, httpOptions).then((response) => {
                        if (!response.status) {
                            if (response.response.message === 'Nao Existe.') {
                                messageStatus = '<h2 class="mainTextColor">Não existe. Verifique seu número.</h2>';
                            };
                            if (response.response.message === 'Ocupado.') {
                                messageStatus = '<h2 class="mainTextColor">Ocupado. Tente novamente.</h2>';
                            };
                            this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                        } else {
                            messageStatus = '<h2 class="mainTextColor">Estamos te ligando!<h2>';
                            this.updateClickToCallStatus(messageStatus, 'success', inputNumber, true);
                        }
                        setTimeout(() => {
                            // ocultar popup
                            this.updateClickToCallStatus(messageStatus, 'success', inputNumber, false);
                        }, 7000);
                    })
                } else {
                    messageStatus = '<div class="flex flex-col"><span>Número inválido</span><h2 class="mainTextColor mt-3">Verifique o 9º dígito</h2></div>';
                    this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                    setTimeout(() => {
                        this.updateClickToCallStatus(messageStatus, 'error', inputNumber, false);
                    }, 3000);
                }
            } else {
                messageStatus = '<h2 class="mainTextColor">Número inválido, tente novamente.</h2>';
                this.updateClickToCallStatus(messageStatus, 'error', inputNumber, true);
                setTimeout(() => {
                    this.updateClickToCallStatus(messageStatus, 'error', inputNumber, false);
                }, 3000);
            };

            return false;
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

.click-to-call {
    width: 100%;
    max-width: 450px;
    height: max-content;
    max-height: max-content;
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
</style>