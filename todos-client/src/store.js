import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ismodal: false
    },
    mutations: {
        btnClick (state) {
            state.ismodal = !state.ismodal;
        }
    }
});