<template>
  <div class="main">
    <ZineForm :zine="loadedZine" @submit="onSubmitted" />
  </div>
</template>

<script>
import ZineForm from "@/components/ZineForm";
import { getDb } from "@/lib/db.js";

export default {
  components: {
    ZineForm,
  },
  // !!! The result from asyncData will be merged with data.
  asyncData(context) {
    const zineId = context.params.zineId;
    const dbHandle = getDb();
    const collection = dbHandle().collection("zines");
    return collection.document(zineId).then(
      (data) => {
        return {
          loadedZine: { ...data },
        };
      },
      (err) => console.error("Failed to fetch document:", err)
    );
  },
  methods: {
    onSubmitted(editedZine) {
      this.$store.dispatch("editZine", editedZine).then(() => {
        this.$router.push("/zines");
      });
      console.log(editedZines);
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
