<template>
  <div class="main">
    <PostForm :post="loadedPost" @submit="onSubmitted" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import { getDb } from "@/lib/db.js";

export default {
  components: {
    PostForm,
  },
  // !!! The result from asyncData will be merged with data.
  asyncData(context) {
    const postId = context.params.postId;
    const dbHandle = getDb();
    const collection = dbHandle().collection("posts");
    return collection.document(postId).then(
      (data) => {
        return {
          loadedPost: { ...data },
        };
      },
      (err) => console.error("Failed to fetch document:", err)
    );
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/blog-posts");
      });
      console.log(editedPost);
    },
  },
};
</script>

<style>
.main {
  margin: 25px auto;
  max-width: 1024px;
  border: 1px solid #aaa;
  padding: 20px;
}
</style>
