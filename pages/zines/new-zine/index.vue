<template>
  <div class="main">
    <ZineForm @submit="onSubmitted" />
  </div>
</template>

<script>
import ZineForm from "@/components/ZineForm";

export default {
  components: {
    ZineForm,
  },
  methods: {
    onSubmitted(zineData) {
      console.log("submitted");
      console.log(zineData);
      this.$store.dispatch("addZine", zineData).then(() => {
        this.$router.push("/zines");
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
