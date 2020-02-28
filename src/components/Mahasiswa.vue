<template>
  <div id="daftar-mahasiswa">
    <h1>Daftar Mahasiswa</h1>
    <ol>
      <li v-for="(student, index) in students" :key="index">
        <router-link :to="'/dataMhs/' + student.id">{{ student.name }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "mahasiswa",
  data() {
    return {
      students: []
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(data) {
        this.students = data.body;
      });
  }
};
</script>

<style scoped>
#daftar-mahasiswa {
  max-width: 700px;
  margin: 0 auto;
}
</style>