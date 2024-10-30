<template>
  <v-container>
    <div id="app">
      <h1>Lista de Cursos</h1>
      <div id="courses-container">
        <CursoCard
          v-for="curso in cursos"
          :key="curso.id"
          :curso="curso"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CursoCard from './CursoCard.vue'

export default {
  name: "home-view",
  components: {
    CursoCard
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(["cursos"]),
  },
  created() {
    this.$store.dispatch("fetchCursos").then(() => {
      this.loading = false;
    });
  },
  methods: {},
};
</script>

<style scoped>
#courses-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card img {
  max-width: 100%;
  border-radius: 8px 8px 0 0;
}
.card h3 {
  margin: 0;
  font-size: 1.5em;
}
.card p {
  margin: 8px 0;
}
</style>
