import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: []
  },
  getters: {
  },
  mutations: {
    SET_CURSOS(state,cursos){
      state.cursos = cursos;
    }
  },
  actions: {
    async fetchCursos({ commit }) {
      try {
        const response = await fetch('/cursos.json');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        commit('SET_CURSOS', data);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    },
  },
  modules: {
  }
})
