<template>
  <div class="card">
    <img :src="curso.img" :alt="curso.nombre">
    <h3>{{ curso.nombre }}</h3>
    <p>{{ curso.descripcion }}</p>
    <p><strong>Costo:</strong> ${{ curso.costo }}</p>
    <p><strong>Duración:</strong> {{ curso.duracion }}</p>
    <p><strong>Cupos:</strong> {{ curso.cupos }}</p>
    <p><strong>Inscritos:</strong> {{ curso.inscritos }}</p>
  </div>
</template>

<script>
export default {
  name: 'CursoCard',
  props: {
    curso: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
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
