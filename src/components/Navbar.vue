<template>
  <div>
    <ul class="menu">
      <li>
        <router-link to="/">Universitas</router-link>
      </li>
      <li>
        <router-link to="/kelas">Kelas</router-link>
      </li>
      <li>
        <router-link to="/mahasiswa">Mahasiswa</router-link>
      </li>
      <li>
        <router-link to="/showBlogs">Lihat Blog</router-link>
      </li>
      <li>
        <router-link to="/addBlog">Tambah Blog</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin: 10px 5px;
}
</style>