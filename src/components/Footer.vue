<template>
    <footer class='site-footer'>
        <div class='site-footer-wrapper'>
            <p class='copy-right'>©︎ 2023 Rina Yamaguchi. All Rights Reserved.</p>
        </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      items: [
        { title: 'Profile', path: 'profile' },
        { title: 'Skills', path: 'skills' },
        { title: 'Outputs', path: 'outputs' }
      ],
      logo: require('@/assets/rina-ly.png')
    }
  }
}
</script>

<style>
.site-footer {
    display: block;
    color: white;
    font-weight: bold;
    width: 100%;
    background-color: gray;
}
.site-footer-wrapper {
    height: 100%;
    text-align: center;
}
.copy-right {
    margin: 0;
    padding: 20px;
}
</style>
