<template>
  <div class="container">
    <div class="idx-title">Twelve pics blog admin</div>
    <div><nuxt-link to="blog-posts">Blog posts</nuxt-link></div>
    <div><nuxt-link to="zines">Zines</nuxt-link></div>
  </div>
</template>

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
</style>
