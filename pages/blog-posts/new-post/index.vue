<template>
  <div class="main">
    <PostForm @submit="onSubmitted" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";

export default {
  components: {
    PostForm,
  },
  methods: {
    onSubmitted(postData) {
      console.log("submitted");
      console.log(postData);
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/blog-posts");
      });
    },
  },
};
</script>

<style scoped>
.main {
  margin: 25px auto;
  max-width: 1024px;
  border: 1px solid #aaa;
  padding: 20px;
}
</style>
