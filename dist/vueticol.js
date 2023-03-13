'use strict';

var vue = require('vue');

var script = {
	name: 'Vueticol',
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		removeText: {
			type: String,
			default: "Remove color"
		},
		style: {
			type: String,
			default: "square"
		},
		colors: {
			type: Array,
			default: () => [
				'#3233ff', '#5151ff', '#6f70fe', '#9998fe', '#c3c2fe',
				'#fe0166', '#fe277d', '#fe4d95', '#ff80b5', '#feb3d1',
				'#e32a1d', '#f54830', '#ff6b55', '#ff9e8b', '#ffcabc',
				'#ffd148', '#ffd863', '#ffdf7b', '#ffe9a3', '#fff2c8',
				'#1e8a60', '#2db37e', '#47d49a', '#7fdfb9', '#bcefdc',
				'#080726', '#24303e', '#535b68', '#9ba2b4', '#c7cfda',
			]
		}
	},
	data() {
		return {
			isOpen: false,
			value: '',
		}
	},
	mounted() {
		this.value = this.modelValue;
	},
	computed: {
		selectedColor: {
			get() {
				return this.value;
			},
			set(newValue) {
				this.$emit('update:modelValue', newValue);
				this.isOpen = false;
				this.value = newValue;
			}
		}
	},
};

const _withScopeId = n => (vue.pushScopeId("data-v-34948904"),n=n(),vue.popScopeId(),n);
const _hoisted_1 = {
  key: 0,
  class: "vueticol-icon",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  color: "#000000"
};
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("path", {
  d: "M13.879 7.697L16 9.817a1 1 0 010 1.415L8.363 18.87a1.001 1.001 0 01-.326.218L5.54 20.114c-1.233.508-2.466-.725-1.958-1.958L4.61 15.66a.999.999 0 01.218-.327l7.636-7.636a1 1 0 011.415 0zM13.879 3.454L16 5.575m4.243 4.243L18.12 7.697m-2.12-2.122l1.413-1.414a1 1 0 011.414 0l.708.707a1 1 0 010 1.414L18.12 7.697m-2.12-2.122l2.12 2.122",
  stroke: "#000000",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = { class: "vueticol-grid" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  key: 0,
  class: "vueticol-check",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  color: "#000000"
};
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("path", {
  d: "M5 13l4 4L19 7",
  stroke: "#000000",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */));
const _hoisted_8 = [
  _hoisted_7
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["vueticol-wrapper", $props.style]),
      onClick: _cache[2] || (_cache[2] = $event => ($data.isOpen = !$data.isOpen)),
      style: vue.normalizeStyle({background:$options.selectedColor ? $options.selectedColor : '#dddddd'})
    }, [
      (!$data.value)
        ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3))
        : vue.createCommentVNode("v-if", true),
      ($data.isOpen)
        ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {}, ["stop"])),
            class: "vueticol-dropdown"
          }, [
            vue.createElementVNode("div", _hoisted_4, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.colors, (color) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: color,
                  class: "vueticol-color",
                  style: vue.normalizeStyle({background:color}),
                  onClick: $event => ($options.selectedColor = color)
                }, [
                  (color === $data.value)
                    ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_6, _hoisted_8))
                    : vue.createCommentVNode("v-if", true)
                ], 12 /* STYLE, PROPS */, _hoisted_5))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            ($data.value !== '')
              ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  onClick: _cache[0] || (_cache[0] = $event => ($options.selectedColor = '')),
                  class: "vueticol-remove"
                }, vue.toDisplayString($props.removeText), 1 /* TEXT */))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true)
    ], 6 /* CLASS, STYLE */)
  ]))
}

script.render = render;
script.__scopeId = "data-v-34948904";
script.__file = "src/vueticol.vue";

var wrapper = {
    install: (app, options) => {
        app.component("Vueticol", script);
    }
};

module.exports = wrapper;
