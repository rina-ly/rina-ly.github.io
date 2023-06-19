<template>
    <header class='site-header'>
        <div class='site-header-wrapper'>
            <a href='/' class='site-logo' >
                <img :src='logo' :class="'logo-img'" />
                <h1>portfolio</h1>
            </a>
            <nav class='nav'>
                <ul>
                    <li v-for="(item, index) in items" :key=index :class="'header-li'" >
                        <router-link v-bind:to=item.path :class="'menu-item'" >
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'Profile', path: '/#profile' },
        { title: 'Skills', path: '/#skills' },
        { title: 'Outputs', path: '/#outputs' }
      ],
      logo: require('@/assets/rina-ly.png')
    }
  }
}
</script>

<style>
.site-header {
    top: 0; /* 基準の位置を画面の一番上に指定する */
    left: 0; s
    display: block;
    color: #e4d2d8;
    font-weight: bold;
    background-color: #d69090;
    height: 8%;
    width: 100%;
    position: fixed;
}
.site-header-wrapper {
    display: flex;
    height: 100%;
    margin: 0 5%;
}
.site-logo {
    width: 40%;
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    text-decoration: none;
}
h1 {
    box-sizing: border-box;
    font-size:  x-large;
    font-family: sans-serif;
    margin: 0;
    margin-left: 8px;
}
.logo-img {
    height: 80%;
    border-radius: 4px;
}
.nav {
    width: 80%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;
}
ul {
    list-style: none;
}
.header-li {
    height: 100%;
    display: inline-block;
    font-size: large;
    margin-left: 8px;
}
.menu-item {
    height: 100%;
    color: white;
    text-decoration: none;
}
</style>
