<template>
    <header class='site-header'>
        <div class='site-header-wrapper'>
            <a href='/' class='site-logo' >
                <img :src='logo' :class="'logo-img'" />
                <h1>Rina Yamaguchi</h1>
            </a>
            <nav class='nav'>
                <ul>
                    <li class='header-li'>
                        <a class='menu-item' href='/'>
                            Top
                        </a>
                    </li>
                    <li v-for="(item, index) in items" :key=index :class="'header-li'" >
                        <router-link class='menu-item' :to="item.path">
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
        { title: 'Profile', path: '/#profile' },
        { title: 'Skills', path: '/#skills' },
        { title: 'Works', path: '/#works' },
        { title: 'Certifications', path: '/#certifications' }
      ],
      logo: require('@/assets/rina-ly.png')
    }
  }
}
</script>

<style>
.site-header {
    top: 0;
    left: 0;
    display: block;
    color: #e4d2d8;
    font-weight: bold;
    background-color: #d69090;
    opacity: 0.9;
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
    width: 60%;
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    text-decoration: none;
}
h1 {
    font-size: medium;
    margin: 0;
    margin-left: 8px;
}
@media screen and (min-width: 480px) {
    h1 {
        font-size: 24px;
    }
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
    font-size: small;
    margin-left: 2px;
}
.menu-item {
    height: 100%;
    color: white;
    text-decoration: none;
}

@media screen and (min-width: 480px) {
    .header-li {
        height: 100%;
        display: inline-block;
        font-size: large;
        margin-left: 8px;
    }
}
</style>
