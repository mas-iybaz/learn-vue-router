<template>
  <div id="data-mahasiswa">
    <h3>{{ student.name }}</h3>
    <ul>
      <h5>Nama Lengkap : {{ student.name }}</h5>
      <h5>Email : {{ student.email }}</h5>
      <h5>Nomor Telepon : {{ student.phone }}</h5>
      <h5>Website : {{ student.website }}</h5>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dataMahasiswa",
  data() {
    return {
      id: this.$route.params.id,
      student: {}
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users/" + this.id)
      .then(function(data) {
        this.student = data.body;
      });
  }
};
</script>

<style scoped>
#data-mahasiswa {
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
}
ul {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  text-align: left;
}
</style>