import mycompoment from './mycompoment.vue';

const demo = {
    install:function(Vue) {
        Vue.component('mycompoment', mycompoment)
    }
}

export default demo;