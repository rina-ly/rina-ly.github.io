<template>
    <div class="works-wrapper">
        <h2 id="works">Works</h2>
            <div class='works-area'>
                <div v-for="(item, key) of items" :key="key">
                    <img :src="item.img">
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      items: [
        { img: '' }
      ]
    }
  }
}
</script>

<style>
.works-wrapper {
    margin-top: 24px;
}
.works-area {
    display: flex;
    text-align: center;
    align-items: center;
}
.works-card {
    width: 40%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
