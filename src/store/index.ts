/*
 * @Date: 2022-12-12 14:42:02
 * @LastEditors: ylh
 * @LastEditTime: 2022-12-23 16:26:44
 * @FilePath: /ztoSupplyPlat/src/store/index.ts
 */
import { createStore } from "vuex";
import { createPinia } from "pinia";

export const vuexStore = createStore({
    state: {
        isLoading: false,
        userName: ""
    },
    getters: {

    },
    mutations: {
        changeIsLoading(state, val) {
            state.isLoading = val;
        },

        getUserNmae(state, data) {
            state.userName = data;
        }

    },
    actions: {

    },
    modules: {},
});


export const piniaStore = createPinia();
