<template>
  <div class="container">
    <div class="idx-title">Blog posts</div>
    <div>
      <div class="mb15">
        <nuxt-link to="/blog-posts/new-post">-- create post --</nuxt-link>
      </div>
      <div v-for="post in loadedPosts" :key="post._key">
        <div class="columns">
          <div class="column is-three-quarters">
            <nuxt-link :to="`/blog-posts/${post._key}`">
              [ {{ post.slug }} ]
            </nuxt-link>
          </div>
          <div class="created column">
            {{ post.createdDate | date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.posts;
    },
  },
  created() {
    console.log("created");
    // console.log(this.$store.state.posts);
    // console.log(this.loadedPosts);
  },
};
</script>

<style>
.idx-title {
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px 0;
}
.container {
  margin: 25px auto;
  max-width: 900px;
  border: 1px solid #aaa;
  padding: 20px;
}
.created {
  color: #999;
  text-align: right;
}
.mb15 {
  margin-bottom: 15px;
}
.column {
  padding: 0.5rem 0.75rem;
}
</style>
