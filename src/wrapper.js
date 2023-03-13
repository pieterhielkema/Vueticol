import vueticol from'./vueticol.vue';

export default {
    install: (app, options) => {
        app.component("Vueticol", vueticol);
    }
}