<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <section>
        <div class="block">
          {{ new Date().getFullYear() }}
          <a :href="linkTelegram" target="_blank">
            <span class="icon">
              <i class="fab fa-telegram"></i>
            </span>
          </a>
          <a :href="linkGithub" target="_blank">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      linkTelegram: 'https://t.me/dbuhonov',
      linkGithub: 'https://github.com/dmitrybukhonov',
    }
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000 !important
}
</style>