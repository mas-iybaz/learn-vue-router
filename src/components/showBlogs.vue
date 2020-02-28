<template>
  <div id="show-blogs">
    <h2>List Blog</h2>
    <input type="text" v-model="kataKunci" placeholder="Cari Artikel" />
    <div class="single-blog" v-for="(blog, index) in filterBlog" :key="index">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlogs",
  data() {
    return {
      blogs: [],
      kataKunci: ""
    };
  },
  computed: {
    filterBlog: function() {
      return this.blogs.filter(blog => {
        return blog.title.includes(this.kataKunci);
      });
    }
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
};
</script>

<style scoped>
#show-blogs {
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
}
input[type="text"] {
  display: block;
  width: 97%;
  padding: 9px;
}
h2 {
  text-align: center;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>