import vueticol from'./vueticol.vue';

export default {
    install: (app, options) => {
        app
            .directive('vueticol-click-outside', {
                beforeMount: (el, binding) => {
                    el.clickOutsideEvent = event => {
                        if (!(el === event.target || el.contains(event.target))) {
                            binding.value();
                        }
                    };
                    document.addEventListener("click", el.clickOutsideEvent);
                },
                unmounted: el => {
                    document.removeEventListener("click", el.clickOutsideEvent);
                },
            })
            .component("Vueticol", vueticol);
    }
}