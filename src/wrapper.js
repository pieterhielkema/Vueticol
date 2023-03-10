import vueticol from'./vueticol.vue';

const plugin = {
    install (Vue) {
        Vue.component("Vueticol", vueticol);
    }
}

export default plugin