<template>
  <div id="addBlog">
    <h2>Tambah Blog Baru</h2>
    <form v-if="!submitted">
      <label for="judul">Judul</label>
      <input type="text" v-model.lazy="blog.judul" required />
      <label for="konten">Konten</label>
      <textarea name="konten" cols="30" rows="10" v-model.lazy="blog.konten"></textarea>
      <label for="kategori">Kategori</label>
      <div id="kategori">
        <input type="checkbox" value="pemberitahuan" v-model.lazy="blog.kategori" />
        <label>Pemberitahuan</label>
        <input type="checkbox" value="keluh kesah" v-model.lazy="blog.kategori" />
        <label>Keluh Kesah</label>
        <input type="checkbox" value="hiburan" v-model.lazy="blog.kategori" />
        <label>Hiburan</label>
        <input type="checkbox" value="cinta" v-model.lazy="blog.kategori" />
        <label>Cinta</label>
      </div>
      <label for="dilihatOleh">Dilihat Oleh</label>
      <select name="dilihatOleh" v-model="blog.viewer">
        <option v-for="(viewer, index) in blog.viewers" :key="index">{{ viewer }}</option>
      </select>
      <div class="submitButton">
        <button type="button" @click.prevent="postBlog">Posting</button>
      </div>
    </form>
    <div v-if="submitted">
      <h3 class="lightgreen">Tulisan Anda sudah diunggah!</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <h5>Judul</h5>
      <p>{{ blog.judul }}</p>
      <h5>Konten</h5>
      <p>{{ blog.konten }}</p>
      <h5>Kategori</h5>
      <ul>
        <li v-for="(kat, index) in blog.kategori" :key="index" v-text="kat"></li>
      </ul>
      <h5>Dilihat Oleh</h5>
      <p>{{ blog.viewer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        judul: "",
        konten: "",
        kategori: [],
        viewers: ["Publik", "Teman Dekat", "Hanya Saya"],
        viewer: ""
      },
      submitted: false
    };
  },
  methods: {
    postBlog: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          userID: 1,
          id: 120,
          title: this.blog.judul,
          body: this.blog.konten
        })
        .then(function() {
          alert("Berhasil");
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
#addBlog * {
  box-sizing: border-box;
  text-align: left;
}
#addBlog {
  margin: 20px auto;
  max-width: 700px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 9px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h2 {
  text-align: center !important;
}
h3 {
  margin-top: 10px;
}
.submitButton {
  margin: 10px auto;
}
button {
  padding: 10px;
  font-weight: bold;
}
.lightgreen {
  color: lightgreen;
}
#kategori input {
  display: inline-block;
}
#kategori label {
  display: inline-block;
  margin-right: 15px;
}
</style>