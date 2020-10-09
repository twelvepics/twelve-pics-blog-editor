<template>
  <form @submit.prevent="onSave">
    <div class="field" style="width: 50%">
      <label class="label">Rubric</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Post rubric"
          v-model="editedPost.rubric"
        />
      </div>
    </div>
    <div class="field" style="width: 50%">
      <label class="label">Author</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Post author"
          v-model="editedPost.author"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Post title"
          v-model="editedPost.title"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Description"
          rows="2"
          v-model="editedPost.description"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Thumbnail</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Thumbnail"
          v-model="editedPost.thumbnail"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Slug</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Post Slug"
          v-model="editedPost.slug"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Tags</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="#tag1 #tag2 #tag3"
          v-model="editedPost.tags"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">html main</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Subtitle"
          rows="10"
          v-model="editedPost.html_main"
        ></textarea>
      </div>
    </div>

    <div class="field mt25">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="editedPost.publish" />
          Good to publish
        </label>
      </div>
    </div>

    <div class="field is-grouped submit-buttons">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click="onCancel">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            rubric: "",
            author: "",
            title: "",
            description: "",
            thumbnail: "",
            slug: "",
            tags: "",
            html_main: "",
            publish: false,
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
      console.log("save me");
    },
    onCancel() {
      // Navigate back
      this.$router.push("/blog-posts");
    },
  },
};
</script>
<style>
.submit-buttons {
  border-top: 1px solid #aaa;
  margin: 30px 0 20px 0;
  padding-top: 15px;
}
.mt25 {
  margin-top: 25px;
}
</style>
