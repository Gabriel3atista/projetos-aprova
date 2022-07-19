<template>
  <ul
    class="grid gap-4"
    :class="
      pacotes.length > 1
        ? 'grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'
        : 'grid-cols-1'
    "
  >
    <li
      v-for="(pacote, index) in pacotes"
      :key="index"
      class="card relative p-6 h-auto bg-black/[.10] rounded backdrop-blur-md border border-px transition duration-300"
    >
      <div
        class="flex flex-col items-center justify-between text-center h-full"
      >
        <p
          v-if="pacote.attributes.descricao.split('-')[1]"
          class="uppercase font-bold text-white"
        >
          {{ pacote.attributes.descricao.split("-")[1] }}
        </p>
        <p v-else class="flex uppercase font-bold text-white">
          {{
            pacote.attributes.descricao
              .replace("Curso Online para concursos na ", "")
              .replace("Curso Online para concursos de ", "")
              .replace("Curso Online para Concursos de ", "")
              .replaceAll("/", " / ")
              .split("-")[0]
          }}
          <i
            @click="toggleCursoInfo(index, pacote.id)"
            class="info absolute z-10 cursor-pointer top-1 right-1 text-base-white hover:mainTextColor"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 1.375C5.68477 1.375 1.375 5.68477 1.375 11C1.375 16.3152 5.68477 20.625 11 20.625C16.3152 20.625 20.625 16.3152 20.625 11C20.625 5.68477 16.3152 1.375 11 1.375ZM11 18.9922C6.58711 18.9922 3.00781 15.4129 3.00781 11C3.00781 6.58711 6.58711 3.00781 11 3.00781C15.4129 3.00781 18.9922 6.58711 18.9922 11C18.9922 15.4129 15.4129 18.9922 11 18.9922Z"
                fill="currentColor"
              />
              <path
                d="M11 3.00781C6.58711 3.00781 3.00781 6.58711 3.00781 11C3.00781 15.4129 6.58711 18.9922 11 18.9922C15.4129 18.9922 18.9922 15.4129 18.9922 11C18.9922 6.58711 15.4129 3.00781 11 3.00781ZM11.6875 15.6406C11.6875 15.7352 11.6102 15.8125 11.5156 15.8125H10.4844C10.3898 15.8125 10.3125 15.7352 10.3125 15.6406V9.79688C10.3125 9.70234 10.3898 9.625 10.4844 9.625H11.5156C11.6102 9.625 11.6875 9.70234 11.6875 9.79688V15.6406ZM11 8.25C10.7301 8.24449 10.4732 8.13342 10.2843 7.94062C10.0954 7.74783 9.98959 7.48867 9.98959 7.21875C9.98959 6.94883 10.0954 6.68967 10.2843 6.49688C10.4732 6.30408 10.7301 6.19301 11 6.1875C11.2699 6.19301 11.5268 6.30408 11.7157 6.49688C11.9046 6.68967 12.0104 6.94883 12.0104 7.21875C12.0104 7.48867 11.9046 7.74783 11.7157 7.94062C11.5268 8.13342 11.2699 8.24449 11 8.25Z"
                fill="currentColor"
                fill-opacity="0.15"
              />
              <path
                d="M9.96875 7.21875C9.96875 7.49225 10.0774 7.75456 10.2708 7.94795C10.4642 8.14135 10.7265 8.25 11 8.25C11.2735 8.25 11.5358 8.14135 11.7292 7.94795C11.9226 7.75456 12.0312 7.49225 12.0312 7.21875C12.0312 6.94525 11.9226 6.68294 11.7292 6.48955C11.5358 6.29615 11.2735 6.1875 11 6.1875C10.7265 6.1875 10.4642 6.29615 10.2708 6.48955C10.0774 6.68294 9.96875 6.94525 9.96875 7.21875V7.21875ZM11.5156 9.625H10.4844C10.3898 9.625 10.3125 9.70234 10.3125 9.79688V15.6406C10.3125 15.7352 10.3898 15.8125 10.4844 15.8125H11.5156C11.6102 15.8125 11.6875 15.7352 11.6875 15.6406V9.79688C11.6875 9.70234 11.6102 9.625 11.5156 9.625Z"
                fill="currentColor"
              />
            </svg>
          </i>
        </p>
        <MountPrice
          class="mt-6"
          :price="pacote.attributes.valor"
          :discount="pacote.attributes.valor_desconto"
        />
        <div class="flex flex-col items-center justify-center mt-6">
          <button
            @click="compraCurso(pacote.id)"
            class="button py-2 px-4 text-white font-bold rounded uppercase cursor-pointer"
          >
            comprar
          </button>
          <a
            :href="`https://www.aprovaconcursos.com.br/concurso/${iniciais}/${idInstituicao}/${urlCargo(
              pacote.attributes.cargo
            )}/${pacote.id}`"
            target="_blank"
            rel="noopener noreferer"
            class="text-base-white underline mt-3"
            >saiba mais</a
          >
        </div>
      </div>
      <div
        v-if="pacote.id == 129880"
        class="cursoInfo absolute inset-0 text-base-white w-full h-full hidden"
      >
        <div class="darkBgColor p-3 pt-12 h-full rounded">
          STJ, STF, STM, TCU, TSE, TRF’s, TJ’s, TST’s, TRT’s, TCE’s, TCM’s e
          TRE’s, MP’s, AL’s
        </div>
      </div>
      <div
        v-if="pacote.id == 130020"
        class="cursoInfo absolute inset-0 text-base-white w-full h-full hidden"
      >
        <div class="darkBgColor p-3 pt-12 h-full rounded">
          Ministérios Públicos, Tribunais, AGU, Secretarias da Fazenda,
          Assembleias Legislativas, Controladorias, Bancos, Conselhos Regionais,
          Universidades, Câmaras e Prefeituras Municipais
        </div>
      </div>
      <div
        v-if="pacote.id == 130019"
        class="cursoInfo absolute inset-0 text-base-white w-full h-full hidden"
      >
        <div class="darkBgColor p-3 pt-12 h-full rounded">
          Ministério da Saúde, ANS, ANVISA, Secretarias, Institutos, Fundações,
          Consórcios Intermunicipais, Conselhos Regionais e Hospitais Públicos
        </div>
      </div>
      <div
        v-if="pacote.id == 130030"
        class="cursoInfo absolute inset-0 text-base-white w-full h-full hidden"
      >
        <div class="darkBgColor p-3 pt-12 h-full rounded">
          INSS, Receita Federal, Ministérios, IBGE, ABIN, DNIT, IBAMA, DETRAN’s,
          Correios, PF, PRF, PC’s, PM’s, Bancos, Forças Armadas, Câmaras,
          Prefeituras e muitos outros.
        </div>
      </div>
      <div
        v-if="pacote.id == 130021"
        class="cursoInfo absolute inset-0 text-base-white w-full h-full hidden"
      >
        <div class="darkBgColor p-3 pt-12 h-full rounded">
          Universidades, Faculdades, Institutos Federais, Secretarias de
          Educação, Câmaras e Prefeituras Municipais
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardCertificacoes",

  data() {
    return {
      pacotes: [],
      buyItems: [],
    };
  },

  props: {
    idEdital: {
      type: Number,
    },

    idInstituicao: {
      type: String,
    },

    iniciais: {
      type: String,
    },
  },

  async fetch() {
    await this.$axios
      .$get(`${this.$config.apiURL}/edital/${this.idEdital}/pacotes`)
      .then((response) => {
        if (response.data.length) {
          this.pacotes = this.pacotes.concat(response.data);
          this.pacotes = this.pacotes.sort(
            (a, b) =>
              parseFloat(b.attributes.valor) - parseFloat(a.attributes.valor)
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
    fetchOnServer: true;
  },

  methods: {
    urlCargo(str) {
      str = str === "" ? "curso" : str;
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/([^\w]+|\s+)/g, "-") // Substitui espaço e outros caracteres por hífen
        .replace(/\-\-+/g, "-") // Substitui multiplos hífens por um único hífen
        .replace(/(^-+|-+$)/, "")
        .toLowerCase();
    },

    compraCurso(id) {
      const idCurso = id;

      this.buyItems.push({
        id: idCurso,
        parent_id: "",
        product_type: "concurso",
        qty: 1,
      });

      const items = JSON.stringify({ items: this.buyItems });

      this.$axios
        .$post("https://carrinho.aprovaconcursos.com.br/add-item", items)
        .then((response) => {
          if (response.status == "success") {
            location.href = response.url;
          }
        });
    },

    toggleCursoInfo(index, id) {
      let cursoInfoEl = this.$el.querySelectorAll(".cursoInfo");

      cursoInfoEl[index].classList.toggle("hidden");
    },
  },
};
</script>

<style lang="scss">
.tag {
  border-color: var(--dark-bg-color);
}
</style>
