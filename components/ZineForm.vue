<template>
  <form @submit.prevent="onSave">
    <div class="field" style="width: 50%">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Zine title"
          v-model="editedZine.title"
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
          v-model="editedZine.description"
        ></textarea>
      </div>
    </div>
    <div class="field" style="width: 50%">
      <label class="label">Hash number</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Hash number"
          v-model="editedZine.hash_number"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Thumbnail</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Thumbnail"
          v-model="editedZine.thumbnail"
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
          v-model="editedZine.author"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Backpage text</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Backpage text"
          rows="2"
          v-model="editedZine.backpage_text"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Slug</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Post Slug"
          v-model="editedZine.slug"
        />
      </div>
    </div>
    <div class="field" style="width: 50%">
      <label class="label">Num photos</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Num photos"
          v-model="editedZine.num_photos"
        />
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field" style="width: 40%; padding-right: 1.5em">
        <label class="label">PDF filename</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="filename.pdf"
            v-model="editedZine.pdf_filename"
          />
        </div>
      </div>
      <div class="field" style="width: 40%">
        <label class="label">Zip filename</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="filename.zipf"
            v-model="editedZine.zip_filename"
          />
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Tags</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="#tag1 #tag2 #tag3"
          v-model="editedZine.tags"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Pages json</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Pages as json"
          rows="10"
          v-model="editedZine.pages_json"
        ></textarea>
      </div>
    </div>

    <div class="field mt25">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="editedZine.publish" />
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
    zine: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedZine: this.zine
        ? { ...this.zine }
        : {
            title: "", //
            description: "", //
            hash_number: "", //
            thumbnail: "", //
            author: "", //
            backpage_text: "", //
            slug: "", //
            num_photos: 0,
            pdf_filename: "",
            tags: "",
            pages_json: "",
            publish: false,
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedZine);
      console.log("save me");
    },
    onCancel() {
      // Navigate back
      this.$router.push("/zines");
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
