<template>
  <div class="container">
    <div class="idx-title">Zines</div>
    <div>
      <div class="mb15">
        <nuxt-link to="zines/new-zine">-- create zine --</nuxt-link>
      </div>
      <div v-for="zine in loadedZines" :key="zine._key">
        <div class="columns">
          <div class="column is-three-quarters">
            <nuxt-link :to="`/zines/${zine._key}`"
              >[ {{ zine.slug }} ]</nuxt-link
            >
          </div>
          <div class="created column">
            {{ zine.createdDate | date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loadedZines() {
      return this.$store.getters.zines;
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
