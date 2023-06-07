<template>
  <footer>
    <div class="box">
      <div class="footer-content">
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